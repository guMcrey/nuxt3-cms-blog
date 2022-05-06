<template>
  <div class="back-area">
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
        <span class="articles-detail-author">Hakuna</span>
        <div class="articles-detail-title">
          The Weekly Planet: An Outdated Idea Is Still Shaping Climate Policy
        </div>
        <div class="articles-detail-time">April 25, 2022</div>
      </div>
      <div class="articles-content">
        <div class="articles-content-main-img">
          <img src="@/assets/images/article-placeholder.png" alt="Main image" />
        </div>
        <div class="articles-content-text">
          Maecenas consectetur pharetra nisi, vel congue ligula tempor quis. Sed
          turpis lorem, tempor varius pharetra pretium, varius at lorem. Nam
          viverra blandit massa id vehicula. Ut feugiat in erat vitae lacinia.
          Etiam tincidunt eros vitae neque iaculis elementum. Etiam vestibulum
          scelerisque nisl in placerat. Curabitur ultrices quam et ligula congue
        </div>
      </div>
    </div>
    <div class="page-articles-right"></div>
  </div>
</template>

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
.articles-detail-time
  font-size 14px
  font-family "NotoSans"
  font-weight 400
  color #666
  margin-top 20px
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
</style>
