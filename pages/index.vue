<template>
  <div class="page-index">
    <div class="index-latest-title">Latest</div>
    <ul class="latest-list">
      <LatestArticles @click="clickItemHandler"></LatestArticles>
    </ul>
    <div class="index-all-title">All</div>
    <ul class="all-news-list">
      <AllArticles
        v-for="item in allArticle"
        :key="item.articleId"
        :articleInfo="item"
      />
    </ul>
    <div class="load-more-area">
      <span class="load-more-btn">Load more articles</span>
    </div>
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

const clickItemHandler = () => {}
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

// load more
.load-more-area
  margin 65px 0 80px
  text-align center
.load-more-btn
  padding 12px 82px
  font-size 16px
  font-family "NotoSans"
  font-weight 500
  background-color #8500FE
  color #fff
  border-radius 4px
  &:hover
    background-color rgba(133,0,254, 0.8)
</style>
