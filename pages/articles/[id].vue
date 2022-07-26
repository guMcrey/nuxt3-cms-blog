<template>
  <div>
    <div class="back-area" @click="backToList">
      <img
        class="back-area-btn"
        src="@/assets/images/icons/more-btn.svg"
        alt="back"
      />
      <span class="back-area-text">Back to list</span>
    </div>
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
            {{ articleInfo.content }}
          </div>
        </div>
      </div>
      <div class="page-articles-right">
        <ul class="articles-related">
          <div class="related-title">Related articles</div>
          <li class="articles-tag">Vue</li>
          <li class="articles-tag">Typescript</li>
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

const {data} = await useFetch(`/api/articles/${route.params.id}`, {
  key: `${route.params.id}`,
})

const articleInfo = (data.value as any).result

const backToList = () => {
  router.push({path: '/'})
}
</script>

<style lang="stylus" scoped>
.back-area
  padding 0 100px
  margin-top 40px
  display flex
  align-items center
.page-articles
  padding 0 100px
  display flex
  align-items flex-start
  justify-content space-between
  margin-bottom 50px
.page-articles-left
  width 886px
.page-articles-right
  width 223px
.back-area-btn
  width 36px
  height 36px
  transform rotate(180deg)
.back-area-text
  margin-left 15px
  font-size 16px
  font-weight 400
  font-family "NotoSans"
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
  padding 6px 0
  color #000
  font-size 16px
  &:hover
    cursor pointer
    font-weight 500
.articles-tag:first-of-type
    margin-top 18px
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
</style>
