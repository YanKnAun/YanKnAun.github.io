
import { GetArticles, GetUserInfo } from './gglQueries'

const API_DOMAIN = 'https://api.github.com'
const REPO_URL = `${API_DOMAIN}/repos/YanKnAun/YanKnAun.github.io`
// const MY_TOKEN = "MWNlNzU4MjgyZDc1ZjZhZTAzODExNmE0MmE4NDYzMWQ5M2Q2OWQ3OA=="

export const state = () => ({
  articles: [],
  userInfo: {},
  keyword: ''
})

export const getters = {
  timeline ({ articles }) {
    const tl = {}
    articles.forEach(article => {
      const date = article.date.replace(/-\d{1,2}$/, '')
      if (!tl[date]) {
        tl[date] = []
      }
      tl[date].push(article)
    })
    return tl
  },
  labels ({ articles }) {
    const lb = {}
    articles.forEach(article => {
      article.labels.forEach(label => {
        if (!lb[label.name]) {
          lb[label.name] = []
        }
        lb[label.name].push({
          color: label.color,
          name: label.name
        })
      })
    })
    return lb
  },
  articles ({ articles, keyword }) {
    let list = articles
    if (keyword) {
      const regx = new RegExp(keyword, 'i')
      list = articles.filter(article => regx.test(article.title))
    }
    return list
  }
}

export const mutations = {
  GET_ARTICLES (state, articles) {
    state.articles = articles
  },
  ADD_ARTICLES (state, articles) {
    state.article = state.articles.concat(articles)
  },
  GET_USER_INFO (state, info) {
    state.userInfo = info
  },
  GET_COMMENTS (state, { commentsUrl, comments }) {
    state.articles.forEach(article => {
      if (article.commentsUrl === commentsUrl) {
        article.comments = comments
      }
    })
  },
  UPDATE_KEYWORD (state, keyword) {
    state.keyword = keyword
  },
  UPDATE_REACTIONS (state, { reactions, number }) {
    state.articles.forEach(article => {
      if (+article.number === +number) {
        article.praise = reactions.filter(re => re.content === '+1')
      }
    })
  }
}

export const actions = {
  async getArticlesV4 ({ commit, dispatch }, nextCursor) {
    const nextPage = nextCursor ? `after:"${nextCursor}",` : ''
    try {
      const res = await this.$axios.$post(`${API_DOMAIN}/graphql`,
        {
          query: GetArticles(nextPage)
        }
      )
      const data = res.data

      const articles = data.repository.issues.nodes.map(article => ({
        title: article.title,
        content: article.body,
        cover: article.body.match(/!\[.+?\]\((.+?[^)]*)\)/)[1],
        number: article.number,
        date: new Date(article.createdAt).toLocaleDateString('zh').replace(/\//g, '-'),
        labels: article.labels.nodes,
        commentsUrl: `${REPO_URL}/issues/${article.number}/comments`,
        commentsAmount: article.comments.totalCount,
        reactions: article.reactions.totalCount
      }))

      if (nextCursor) {
        commit('ADD_ARTICLES', articles)
      } else {
        commit('GET_ARTICLES', articles)
      }
      const { hasNextPage, endCursor } = data.repository.issues.pageInfo
      if (hasNextPage) {
        await dispatch('getArticlesV4', endCursor)
      }
      return true

    } catch (error) {
      return {
        status: '401',
        documentation_url: 'https://developer.github.com/v3/#authentication',
        message: 'This endpoint requires you to be authenticated.'
      }
    }
  },
  async getArticlByNumber ({ commit }, articleNumber) {
    const { status, data } = await this.$axios.get(`${REPO_URL}/issues/${articleNumber}`)
    if (status < 400) {
      const article = {
        title: data.title,
        content: data.body,
        cover: data.body.match(/!\[.+?\]\((.+?[^)]*)\)/)[1],
        number: data.number,
        date: new Date(data.created_at).toLocaleDateString('zh').replace(/\//g, '-'),
        labels: data.labels,
        commentsUrl: `${REPO_URL}/issues/${data.number}/comments`,
        commentsAmount: data.comments
      }
      commit('GET_ARTICLES', [article])
      return article
    } else {
      return { status, data }
    }
  },
  async getUserInfo ({ commit }, token) {
    const { status, data } = await this.$axios({
      method: 'post',
      url: `${API_DOMAIN}/graphql`,
      headers: {
        'Authorization': token
      },
      data: {
        query: GetUserInfo()
      }
    })
    if (status < 400) {
      commit('GET_USER_INFO', data.data.viewer)
    }

    return {
      status,
      data
    }
  },
  async getComments (_, articleNumber) {
    const commentsUrl = `${REPO_URL}/issues/${articleNumber}/comments`
    const { data: comments } = await this.$axios.$get(commentsUrl)
    // commit('GET_COMMENTS', { commentsUrl, comments })
    return comments
  },
  async createComment (_, { articleNumber, comment }) {
    const commentsUrl = `${REPO_URL}/issues/${articleNumber}/comments`
    const result = await this.$axios({
      url: commentsUrl,
      method: 'post',
      data: {
        body: comment
      }
    })
    return result
  },
  async getReactions ({ commit }, { number, autoCommit }) {
    const result = await this.$axios({
      method: 'get',
      url: `${REPO_URL}/issues/${number}/reactions`,
      headers: {
        'Accept': 'application/vnd.github.squirrel-girl-preview+json'
      }
    }).catch(e => e)
    autoCommit && commit('UPDATE_REACTIONS', {
      reactions: result.data,
      number
    })
    return result
  },
  async createAnReaction ({ dispatch }, { number, content }) {
    await this.$axios({
      method: 'post',
      url: `${REPO_URL}/issues/${number}/reactions`,
      data: {
        content
      },
      headers: {
        'Accept': 'application/vnd.github.squirrel-girl-preview+json'
      }
    }).catch(e => e)
    dispatch('getReactions', { number, autoCommit: true })
  },
  async deleteAnReaction ({ dispatch }, { number, id }) {
    await this.$axios({
      method: 'delete',
      url: `${API_DOMAIN}/reactions/${id}`,
      headers: {
        'Accept': 'application/vnd.github.squirrel-girl-preview+json'
      }
    }).catch(e => e)
    dispatch('getReactions', { number, autoCommit: true })
  },
  async githubAuth (_, code) {
    // const data = {
    //   error: null,
    //   success: true,
    //   code: 0,
    //   result: {
    //     access_token: atob(MY_TOKEN)
    //   }
    // }
    const data = await this.$axios.$post('https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token', {
      client_id: 'fde03693c9f701545b11',
      client_secret: 'b94ae609b2335da5e52acace175d028e98652008',
      code: code
    }).catch(e => e)
    let obj = {}
    const arr2 = data.split("&");
    for(let i = 0; i < arr2.length; i++) {
      const res = arr2[i].split("=");
      obj[res[0]] = res[1];
    }
    console.log(obj)

    return obj
  }
}
