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
        @click="clickItemHandler(item.article_id)"
      />
    </ul>
    <div class="load-more-area" @click="loadMore">
      <span
        :class="
          pagination.total / pagination.pageSize >= pagination.pageNum
            ? 'load-more-btn'
            : 'load-more-btn-disabled'
        "
        >Load more articles</span
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive} from 'vue'

useHead({
  title: "Hakuna's Blog - Home",
})

const router = useRouter()
const pagination = reactive({
  pageNum: 1,
  pageSize: 3,
  total: 0,
})
const allArticle = ref<any[]>([])

const {data: articles} = await useFetch(
  `http://localhost:3001/api/articles/page?page_num=${pagination.pageNum}&page_size=${pagination.pageSize}`
)

allArticle.value = (articles.value as any).result
Object.assign(pagination, (articles.value as any).page)

const loadMore = async () => {
  if (pagination.total / pagination.pageSize < pagination.pageNum) return
  const {data: articles} = await useFetch(
    `http://localhost:3001/api/articles/page?page_num=${
      pagination.pageNum + 1
    }&page_size=${pagination.pageSize}`
  )
  allArticle.value = allArticle.value.concat((articles.value as any).result)
  Object.assign(pagination, (articles.value as any).page)
}

const clickItemHandler = (articleId: number) => {
  router.push({
    path: `/articles/${articleId}`,
  })
}
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
  gap 80px 45px
  align-items flex-start
  justify-content flex-start
  flex-wrap wrap
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

.load-more-btn-disabled
  padding 12px 82px
  font-size 16px
  font-family "NotoSans"
  font-weight 500
  color #fff
  border-radius 4px
  background-color #d0d0d0
</style>
