<template>
  <div>
    <BackToList @click="backToList"></BackToList>
    <div class="page-articles">
      <div class="page-articles-left">
        <div class="articles-detail">
          <span class="articles-detail-author">{{ articleInfo.author }}</span>
          <div class="articles-detail-title">
            {{ articleInfo.title }}
          </div>
          <div class="articles-detail-area">
            <div class="articles-detail-time">
              {{ articleInfo.publish_time }}
            </div>
            <div class="articles-detail-read">
              <img
                class="read-info-icon"
                src="@/assets/images/icons/view-eye.svg"
                alt="reads"
              />
              1.6k Reads
            </div>
          </div>
        </div>
        <div class="articles-content">
          <div class="articles-content-main-img">
            <img
              :src="
                (articleInfo.main_img &&
                  `http://localhost:3000/images/${articleInfo.main_img}`) ||
                defaultArticleImg
              "
              alt="Main image"
            />
          </div>
          <div class="articles-content-text">
            <span v-html="articleInfo.content"></span>
          </div>
        </div>
      </div>
      <div class="page-articles-right">
        <ul class="articles-related">
          <div class="related-title">Related articles</div>
          <li
            class="articles-tag"
            v-for="tagItem in articleInfo.tag"
            :key="tagItem"
            @click="clickTagHandler(tagItem)"
          >
            {{ tagItem }}
          </li>
          <div
            v-if="
              pagination.total / pagination.pageNumber > pagination.pageSize
            "
            class="pagination-area"
            @click="loadMoreHandler"
          >
            <img src="@/assets/images/icons/next-btn.svg" alt="more" />
            Next
          </div>
        </ul>
        <ul class="articles-share">
          <div class="share-title">Share</div>
          <div class="share-item-wrapper">
            <li class="share-item">
              <img src="@/assets/images/icons/wechat.svg" alt="wechat" />
            </li>
            <li class="share-item">
              <img src="@/assets/images/icons/linkedin.svg" alt="linkedin" />
            </li>
            <li class="share-item">
              <img src="@/assets/images/icons/facebook.svg" alt="facebook" />
            </li>
            <li class="share-item">
              <img src="@/assets/images/icons/weibo.svg" alt="weibo" />
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import defaultArticleImg from '@/assets/images/article-placeholder.png'

const route = useRoute()
const router = useRouter()
const pagination = reactive({
  pageNumber: 1,
  pageSize: 4,
  total: 0,
})

const {data} = await useFetch(
  `http://localhost:3001/api/articles/${route.params.id}`,
  {
    key: `${route.params.id}`,
  }
)

const articleInfo = (data.value as any).result

const searchTagHandler = async (pageNumber: number, pageSize: number) => {
  if (articleInfo.tag.length && pageNumber <= 1) return
  const {
    data: tags,
  } = await useFetch(
    `http://localhost:3001/api/tags/page?page_number=${pageNumber}&page_size=${pageSize}`,
    {key: Math.random().toString()}
  )
  articleInfo.tag = (tags.value as any).result.map(
    (_: {tag_name: string}) => _.tag_name
  )
  Object.assign(pagination, (tags.value as any).page)
}

const backToList = () => {
  router.push({path: '/'})
}

const loadMoreHandler = () => {
  Object.assign(pagination, {pageNumber: pagination.pageNumber + 1})
  searchTagHandler(pagination.pageNumber, pagination.pageSize)
}

const clickTagHandler = (tagName: string) => {
  router.push({
    path: `/tags`,
    query: {
      tag: tagName,
    },
  })
}

onMounted(async () => {
  searchTagHandler(pagination.pageNumber, pagination.pageSize)
  const win = window as any
  setTimeout(() => {
    win.Prism.highlightAll()
  }, 50)
})
</script>

<style lang="stylus" scoped>
.page-articles
  padding 0 100px
  display flex
  align-items flex-start
  justify-content space-between
  margin-bottom 50px
.page-articles-left
  max-width 886px
  word-wrap break-word
  overflow hidden
.page-articles-right
  width 223px
.articles-detail
  margin-top 50px
.articles-detail-author
  padding-bottom 2px
  font-size 16px
  font-weight 400
  font-family "NotoSans"
  border-bottom 2px solid #8500FE
.articles-detail-title
  margin-top 12px
  font-family "NotoSans"
  font-weight 500
  font-size 42px
  color #344854

.articles-detail-area
  margin-top 20px
  display flex
  align-items center
  justify-content flex-start
  gap 50px
.articles-detail-time
  font-size 14px
  font-family "NotoSans"
  font-weight 400
  color #666

.articles-detail-read
  display flex
  align-items center
  font-size 13px
  color #666
  font-family 'NotoSans'
.read-info-icon
  display block
  width 18px
  height auto
  margin-right 8px
.articles-content
  margin-top 48px
.articles-content-main-img
  width 886px
  height auto
  img
    max-width 100%
    max-height 100%
.articles-content-text
  margin-top 35px
  font-size 17px
  font-weight 400
  font-family "NotoSans"
  line-height 1.5em

// right
.page-articles-right
  margin-top 50px
.articles-related
  font-family "NotoSans"
  font-weight 400
.related-title
  font-size 18px
  color #677b8c
.articles-tag
  padding 10px 0
  color #000
  font-size 16px
  &:hover
    cursor pointer
    font-weight 500
.articles-tag:first-of-type
    margin-top 15px
.articles-share
  margin-top 30px
  padding 20px 0
  font-family "NotoSans"
  font-weight 400
  border-top 1px solid hsla(0,0%,9%,.1)
  border-bottom 1px solid hsla(0,0%,9%,.1)
.share-title
  font-size 16px
  color #677b8c
.share-item-wrapper
  margin-top 20px
  display flex
  align-items center
  gap 20px
.share-item
  img
    width 30px
    height 30px
.pagination-area
  display flex
  align-items center
  gap 5px
  margin-top 25px
  font-size 13px
  font-family "NotoSans"
  color #677b8c
  img
    width 16px
    height 16px
  &:hover
    font-weight bold
    cursor pointer
</style>
