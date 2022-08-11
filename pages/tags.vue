<template>
  <div class="page-tags">
    <BackToList @click="backToList"></BackToList>

    <TagArticle
      class="tag-articles"
      v-for="item in allArticle"
      :key="item.article_id"
      :articleInfo="item"
    ></TagArticle>

    <div v-show="!allArticle.length" class="article-no-result">
      No related articles found.
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const route = useRoute()
const allArticle = ref<any[]>([])

const {
  data: articles,
} = await useFetch(
  `http://localhost:3001/api/articles?publish_status=publish&tag=${route.query.tag}`,
  {key: `${route.query.tag}`}
)
allArticle.value = (articles.value as any)?.result

const backToList = () => {
  router.back()
}
</script>

<style lang="stylus" scoped>
.tag-articles
  &:nth-child(2n + 1)
    background-color rgba(247, 242, 238, 0.7)
.article-no-result
  font-size 18px
  font-family "NotoSans"
  font-weight 500
  margin 50px 110px
</style>
