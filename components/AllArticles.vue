<template>
  <li class="list-item">
    <div class="item-top">
      <img src="~/assets/images/article-placeholder.png" alt="article" />
    </div>
    <div class="item-content">
      <div class="item-content-time">
        <span class="author-name">By {{ articleInfo.author }}</span>
        <span class="step"></span>
        <span class="article-time">{{ articleInfo.publishTime }}</span>
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

defineProps({
  articleInfo: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="stylus" scoped>
.list-item
  width 382px
.item-top
  width 382px
  height auto
  img
    max-width 100%
    max-height 100%
.item-content-time
  margin-top 15px
  color #374857
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
.item-content-title
  margin-top 12px
  color #1c2b33
  font-weight 600
  font-size 18px
  font-family 'NotoSans'
  font-weight 500
.item-content-description
  margin-top 12px
  color #1c2b33
  font-size 15px
  line-height 24px
  display -webkit-box
  -webkit-box-orient vertical
  -webkit-line-clamp 3
  overflow hidden
  font-family 'NotoSans'
  font-weight 400
.item-footer
  margin-top 30px
  display flex
  align-items center
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
