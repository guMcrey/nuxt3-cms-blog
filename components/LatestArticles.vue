<template>
  <li v-for="item in latestArticles" :key="item.article_id" class="list-item">
    <div class="item-image">
      <img
        :src="
          (item.main_img && `http://localhost:3000/images/${item.main_img}`) ||
          defaultArticleImg
        "
        alt="article"
      />
    </div>
    <div class="item-article">
      <div class="article-top">
        <span class="author-name">By {{ item.author }}</span>
        <span class="step"></span>
        <span class="article-time">{{ item.publish_time }}</span>
      </div>
      <div class="article-title">
        {{ item.title }}
      </div>
      <div class="article-content">
        {{ item.description }}
      </div>
      <div class="article-footer">
        <div class="article-tag">
          <span class="tag-item" v-for="tItem in item.tag" :key="tItem">{{
            tItem
          }}</span>
        </div>
        <div class="footer-read-more">
          <div class="read-info">
            <img
              class="read-info-icon"
              src="@/assets/images/icons/view-eye.svg"
              alt="reads"
            />
            1.6k Reads
          </div>
          <div class="more-area">
            <img
              class="more-icon"
              src="@/assets/images/icons/more-btn.svg"
              alt="more"
            />
            <span class="more-text">Learn More</span>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script lang="ts" setup>
import defaultArticleImg from '@/assets/images/article-placeholder.png'
const {data: articles} = await useFetch('http://localhost:3001/api/articles')

// TODO: 获取最新文章
const latestArticles = [(articles.value as any).result[2]]
</script>

<style lang="stylus" scoped>
// latest article
.list-item
  display flex
  align-items flex-start
  gap 50px
  &:hover
    cursor pointer
.item-image
  width 500px
  max-height 310px
  overflow hidden
  img
    height 100%
    width 100%
.item-article
  flex 1
  position relative
  height 310px
.article-top
  color #8500FE
  font-size 13px
  font-family 'NotoSans'
  font-weight 400
  .step
    display inline-block
    width 3px
    height 3px
    background-color currentColor
    border-radius 50px
    margin 0 5px
    vertical-align middle
.article-title
  font-size 20px
  margin-top 12px
  font-weight 500
  color #1c2b33
  font-family 'NotoSans'
  font-weight 500
.article-content
  font-size 15px
  margin-top 10px
  line-height 25px
  color #1c2b33
  display -webkit-box
  -webkit-box-orient vertical
  -webkit-line-clamp 5
  overflow hidden
  font-family 'NotoSans'
  font-weight 400

.article-footer
  position absolute
  bottom 0
  left 0
  width 100%

// tag
.article-tag
  display flex
  align-items center
  margin-top 10px
.tag-item
  display inline-block
  padding 3px 12px
  background-color rgba(247,242,253,1)
  color #8500FE
  border-radius 20px
  font-size 12px
  margin-right 10px
  font-family 'NotoSans'
  font-weight 400
  &:nth-child(2n)
    color #467392
    background-color rgba(231,249,254,1)

.footer-read-more
  margin-top 17px
  display flex
  align-items center
  justify-content space-between
// Reads
.read-info
  display inline-flex
  align-items center
  font-size 13px
  color #1c2b33
  font-weight 500
  font-family 'NotoSans'
.read-info-icon
  display block
  width 18px
  height auto
  margin-right 8px
.more-area
  display flex
  align-items center
.more-icon
  display block
  width 32px
  height 32px
.more-text
  margin-left 10px
  font-size 14px
  color #1c2b33
  font-weight 600
  font-family 'NotoSans'
</style>
