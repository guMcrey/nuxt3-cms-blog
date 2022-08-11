<template>
  <div class="tag-list-item">
    <div class="item-left">
      <img
        :src="
          (articleInfo.main_img &&
            `http://localhost:3000/images/${articleInfo.main_img}`) ||
          defaultArticleImg
        "
        alt="article"
      />
    </div>
    <div class="item-right">
      <div class="content-tag">TypeScript</div>
      <div class="content-title">
        {{ articleInfo.title }}
      </div>
      <div class="content-description">
        {{ articleInfo.description }}
      </div>
      <span class="content-button" @click="viewItemHandler">
        View Details
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
import defaultArticleImg from '@/assets/images/article-placeholder.png'

const props = defineProps({
  articleInfo: {
    type: Object,
    default: () => {},
  },
})

const viewItemHandler = () => {
  router.push({path: `/articles/${props.articleInfo.article_id}`})
}
</script>

<style lang="stylus" scoped>
.tag-list-item
  padding 60px 100px
  display flex
  align-items flex-start
  gap 60px
  position relative
.item-left
  width 42%
  height auto
  border-radius 18px
  overflow hidden
.item-right
  margin-top -30px
  width 56%
.content-tag
  font-size 13px
  font-family "NotoSans"
  font-weight 500
  color #8500FE
.content-title
  margin-top 10px
  font-size 24px
  font-family "NotoSans"
  font-weight 700
  color #131A1D
  word-break break-word
  line-height 1.3em
.content-description
  margin-top 15px
  font-size 16px
  font-family "NotoSans"
  font-weight 400
  color #62696C
  line-height 1.7em
.content-button
  position absolute
  bottom 80px
  display inline-block
  padding 8px 13px
  font-size 14px
  font-family "NotoSans"
  font-weight 400
  background-color #8500FE
  color #fff
  border-radius 20px
  &:hover
    background-color rgba(133,0,254, 0.8)
    transition all 0.3s
</style>
