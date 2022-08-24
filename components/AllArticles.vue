<template>
  <li class="list-item">
    <div class="item-top">
      <img
        v-if="articleInfo.main_img"
        :src="`http://localhost:3000/images/${articleInfo.main_img}`"
        alt="article"
      />
      <img v-else class="no-main-img-style" src="@/assets/images/blog-logo-no-text.png" alt="article picture" />
      <div class="img-wrap-mark"></div>
    </div>
    <div class="item-content">
      <div class="item-content-time">
        <img class="author-avatar" src="@/assets/images/author-avatar.jpeg" alt="avatar" />
        <span class="author-name">By {{ articleInfo.author }}</span>
        <span class="step"></span>
        <span class="article-time">{{ articleInfo.publish_time }}</span>
      </div>
      <div class="item-content-title">
        {{ articleInfo.title }}
      </div>
      <div class="item-content-description">
        {{ articleInfo.description }}
      </div>
    </div>
    <div class="item-footer">
      <img
        class="more-icon"
        src="@/assets/images/icons/more-btn.svg"
        alt="more"
      />
      <span class="more-text">Learn more</span>
    </div>
  </li>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import defaultArticleImg from '@/assets/images/article-placeholder.png'

defineProps({
  articleInfo: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="stylus" scoped>
.list-item
  max-width 377px
  &:hover .item-top > img
    transform scale(1.08)
    transition all 0.3s linear
    cursor pointer
  &:hover .img-wrap-mark
    opacity 1
  &:hover .item-footer .more-text
    color #8500FE
  &:hover .item-footer .more-icon
    position relative
    left -421px
    filter drop-shadow(#8500fe 421px 0)
    transition all 0.2s
.item-top
  transition all 0.6s
  position relative
  width 357px
  height 371px
  overflow hidden
  box-shadow 0 1px 15px rgba(0,0,0,0.04)
  border-radius 12px
  background-color #f0f0f5
  display flex
  align-items center
  justify-content center
  img
    max-width 100%
    max-height 100%
    transition all 0.6s
.no-main-img-style
  width 60px
  height 60px
.img-wrap-mark
  transition all 0.6s
  opacity 0
  position absolute
  top 0
  right 0
  bottom 0
  left 0
  background-color rgba(0, 0, 0, 0.1)
.item-content-time
  display flex
  align-items center
  margin-top 15px
  color #848193
  font-size 13px
  font-family 'NotoSans'
  font-weight 400
  .author-avatar
    width 25px
    height 25px
    border-radius 50%
    margin-right 10px
  .step
    display inline-block
    width 3px
    height 3px
    background-color currentColor
    border-radius 50px
    margin 0 5px
    vertical-align middle
.item-content-title
  margin-top 12px
  color #0D0230
  font-weight 600
  font-size 19px
  font-family 'NotoSans'
  font-weight 500
.item-content-description
  margin-top 12px
  color #848193
  font-size 15px
  line-height 24px
  display -webkit-box
  -webkit-box-orient vertical
  -webkit-line-clamp 3
  overflow hidden
  font-family 'NotoSans'
  font-weight 400
  min-height 72px
.item-footer
  margin-top 30px
  display flex
  align-items center
  &:hover .more-text, .more-icon
    color #737373
    transition all 0.3s
.more-icon
  display block
  width 26px
  height 26px
.more-text
  margin-left 10px
  font-size 14px
  color #1c2b33
  font-family 'NotoSans'
  font-weight 600
</style>
