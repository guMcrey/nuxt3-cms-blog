<template>
  <Carousel :autoplay="5000" :wrap-around="true">
    <!-- TODO: -->
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">
        <div class="carousel__item-author">
          <div class="author-avatar">
            <img src="@/assets/images/author-avatar.jpeg" alt="author avatar"/>
          </div>
          <div class="author-name">Hakuna</div>
        </div>
        <div class="carousel__item-article">
          <div class="article-title">Artificial Intelligence Beyond Imaginations</div>
          <div class="article-description">Artificial Intelligence Beyond Imaginations Artificial Intelligence Beyond Imaginations Artificial Intelligence Beyond Imaginations<span class="read-more-btn">Read More</span></div>
        </div>
        <div class="carousel__item-info">
          <div class="info-item">
            <div class="info-item-icon">
              <img src="@/assets/images/icons/calendar.svg" alt="publish time" />
            </div>
            <div class="info-item-text">2022-10-22</div>
          </div>
          <div class="info-item">
            <div class="info-item-icon">
              <img src="@/assets/images/icons/view-eye.svg" alt="views" />
            </div>
            <div class="info-item-text">1k Reads</div>
          </div>
        </div>
      </div>
      <div class="popular-icon">
        <div class="icon-wrapper">
          <img src="@/assets/images/icons/hot-fire.png" alt="hot" />
        </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
</script>

<style lang="stylus" scoped>
.carousel__item
  position relative
  padding 50px
  background-color rgba(142,152,243, 0.5)
  min-height 200px
  width 100%
  font-size 20px
  border-radius 12px
  color #000;
  font-size 20px
  display flex
  align-items center
  justify-content center
  flex-direction column
  cursor pointer
.carousel__item-author
  display inline-flex
  align-items center
  gap 8px
  background-color #fff
  border-radius 22px
  padding 4px 9px
.author-avatar
  max-width 35px
  max-height 35px
  overflow hidden
  img
    max-width 100%
    max-height 100%
    border-radius 100%
.author-name
  font-size 14px
  font-family "NotoSans"
  font-weight 400
  color #848193
.carousel__item-article
  margin-top 20px
  max-width 65%
.article-title
  font-size 20px
  font-family "NotoSans"
  font-weight 700
  color #0D0230
.article-description
  margin-top 15px
  font-size 15px
  font-family "NotoSans"
  font-weight 400
  color #0D0230
  line-height 1.7em
.read-more-btn
  font-size 15px
  font-family "NotoSans"
  font-weight 500
  color #8500FE
  padding-left 5px
  text-decoration underline
.carousel__item-info
  margin-top 20px
  display flex
  align-items center
.info-item
  display flex
  align-items center
  padding 0 20px
  border-right 1px solid #c2bfd5
  gap 5px
  &:last-child
    border-right none
.info-item-icon
  max-width 20px
  max-height 20px
  overflow hidden
  img
    max-width 100%
    max-height 100%
.info-item-text
  font-size 13px
  font-family "NotoSans"
  font-weight 400
  color #8783a2
.popular-icon
  position absolute
  top 35px
  right 40px
  background-color #F7E6E4
  border-radius 50%
  z-index 1
.icon-wrapper
  padding 8px
  max-width 40px
  max-height 40px
  overflow hidden
  img
    max-width 100%
    max-height 100%
.carousel__slide
  position relative
  padding 10px
  &:before
    content ''
    position absolute
    background-image url('@/assets/images/article-bg.png')
    background-size 100% 100%
    width 300px
    height 93%
    left 15px
    bottom 0
    filter grayscale(100%)
:deep(.carousel__prev)
:deep(.carousel__next)
  box-sizing content-box
  border 5px solid #fff
  background-color #8500FE
</style>