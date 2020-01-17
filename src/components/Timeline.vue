<template>
  <div class="timeline border">
    <h3 class="timeline-title">Timeline</h3>
    <el-collapse v-model="activeName">
      <el-collapse-item v-for="(time, i) in Object.keys(timeline)" :key="i" :title="getTime(time , timeline)" :name="i + 1" class="timeline-item">
        <ul class="timeline-item-day">
          <li class="article" v-for="(article, j) in timeline[time]" :key="j" @click="$emit('toArticle', { number: article.number, title: article.title })">{{article.title}}</li>
        </ul>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  props: ['timeline'],
  data () {
    return {
      activeName: [1],
      getTime(key, obj) {
        return `${key} (${obj[key].length})`
      }
    }
  },
  watch: {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
@import '../assets/style/variables.less';

.timeline {
  background: #fff;
  margin-bottom: @gapOuter;
  &-title {
    margin: 0;
    padding: @gapOuter;
    font-weight: normal;
    border-bottom: 1px solid @firstBorderColor;
    color: @regularFontColor;
  }

  &-item {
    margin: 0 @gapOuter;
    border-bottom: 1px solid @thirdBorderColor;
    color: @regularFontColor;
    &:first-child {
      padding-top: @gapOuter;
    }
    &:last-child {
      padding-bottom: @gapOuter;
      border-bottom: none;
    }
    &-date {
      cursor: pointer;
      font-size: 1.1rem;
    }
    &-day {
      padding-left: @gapOuter;
      margin: 0;
      list-style: upper-roman;
      
      .article {
        padding-top: @gapInner;
        margin-bottom: @gapInner;
        text-decoration: underline;
        cursor: pointer;

        &:hover {
          color: @spanHoverColor;
        }
      }
    }
  }
}
</style>
