<template>
  <div class="page-tags">
    <TagArticle
      class="tag-articles"
      v-for="item in allArticle"
      :key="item.article_id"
      :articleInfo="item"
    ></TagArticle>
  </div>
</template>

<script lang="ts" setup>
import {onMounted} from 'vue'

const pagination = reactive({
  pageNum: 1,
  pageSize: 3,
  total: 0,
})
const allArticle = ref<any[]>([])

// TODO: tag query
const {data: articles} = await useFetch(
  `http://localhost:3001/api/articles/page?tag=TypeScript&page_num=${pagination.pageNum}&page_size=${pagination.pageSize}`
)
allArticle.value = (articles.value as any)?.result
Object.assign(pagination, (articles.value as any)?.page)
</script>

<style lang="stylus" scoped>
.page-tags
  padding 0 100px
  margin 50px 0
.tag-articles
  margin-bottom 80px
</style>
