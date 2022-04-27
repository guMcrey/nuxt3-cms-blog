<template>
  <div class="page-index">
    <div class="index-latest-title">Latest</div>
    <ul class="latest-list">
      <LatestArticles></LatestArticles>
    </ul>
    <div class="index-all-title">All</div>
    <ul class="all-news-list">
      <AllArticles
        v-for="item in allArticle"
        :key="item.articleId"
        :articleInfo="item"
      />
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {reactive} from 'vue'

const allArticle = reactive([
  {
    articleId: 1,
    mainPicture: 'article-placeholder',
    author: 'hakuna',
    publishTime: '2022-04-22',
    title:
      'The Weekly Planet: An Outdated Idea Is Still Shaping Climate Policy',
    description:
      ' Maecenas consectetur pharetra nisi, vel congue ligula tempor quis. Sed turpis lorem, tempor varius pharetra pretium, varius at lorem.',
  },
  {
    articleId: 2,
    mainPicture: 'article-placeholder',
    author: 'hakuna',
    publishTime: '2022-04-22',
    title:
      'The Weekly Planet: An Outdated Idea Is Still Shaping Climate Policy',
    description:
      ' Maecenas consectetur pharetra nisi, vel congue ligula tempor quis. Sed turpis lorem, tempor varius pharetra pretium, varius at lorem.',
  },
  {
    articleId: 3,
    mainPicture: 'article-placeholder',
    author: 'hakuna',
    publishTime: '2022-04-22',
    title:
      'The Weekly Planet: An Outdated Idea Is Still Shaping Climate Policy',
    description:
      ' Maecenas consectetur pharetra nisi, vel congue ligula tempor quis. Sed turpis lorem, tempor varius pharetra pretium, varius at lorem. Nam viverra blandit massa id vehicula. Ut feugiat in erat vitae lacinia.',
  },
])
</script>

<style lang="stylus" scoped>
.page-index
  padding 0 100px
  margin-bottom 50px
.index-latest-title
  font-size 24px
  margin-top 30px
.latest-list
  margin-top 30px
.index-all-title
  font-size 24px
  margin-top 60px
  color #1C2B33
.all-news-list
  display flex
  gap 30px
  align-center flex-start
  justify-content space-between
.all-news-list
  margin-top 30px
</style>
