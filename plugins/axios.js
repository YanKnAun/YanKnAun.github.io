
export default function ({ $axios, redirect }) {

  $axios.onRequest(config => {
    // set token
    config.headers["Authorization"] = localStorage.getItem('github_token') ? localStorage.getItem('github_token') : null

    if(config.method == 'get') {
      config.params = {
        ...config.params,
        _t: new Date().getTime()
      }
    }

  })

  $axios.onResponse(response => {

  })

  $axios.onError(error => {
    return Promise.resolve(error.response);
    // return Promise.reject(error.response.data);
  })
}
