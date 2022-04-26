<template>
  <div class="page-index">
    <div class="page-index-title">Latest</div>
    <ul class="latest-list">
      <li class="list-item">
        <div class="item-image">
          <img src="@/assets/images/article-placeholder.png" alt="article" />
        </div>
        <div class="item-article">
          <div class="article-top">
            <span class="author-name">By hakuna</span>
            <span class="step"></span>
            <span class="article-time">2022-04-22</span>
          </div>
          <div class="article-title">
            The Weekly Planet: An Outdated Idea Is Still Shaping Climate Policy
          </div>
          <div class="article-content">
            Maecenas consectetur pharetra nisi, vel congue ligula tempor quis.
            Sed turpis lorem, tempor varius pharetra pretium, varius at lorem.
            Nam viverra blandit massa id vehicula. Ut feugiat in erat vitae
            lacinia. Etiam tincidunt eros vitae neque iaculis elementum. Etiam
            vestibulum scelerisque nisl in placerat. Curabitur ultrices quam et
            ligula congue
          </div>
          <div class="article-footer">
            <div class="article-tag">
              <span class="tag-item">Vue</span>
              <span class="tag-item dark">Typescript</span>
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
    </ul>
  </div>
</template>

<style lang="stylus" scoped>
.page-index
  padding 0 100px
  margin-bottom 50px
.page-index-title
  font-size 24px
  margin-top 30px

// article
.latest-list
  margin-top 30px
.list-item
  display flex
  align-items flex-start
  gap 40px
.item-image
  width 500px
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
.article-content
  font-size 15px
  margin-top 10px
  line-height 25px
  color #1c2b33
  display -webkit-box
  -webkit-box-orient vertical
  -webkit-line-clamp 5
  overflow hidden

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
  padding 3px 12px
  background-color rgba(247,242,253,1)
  color #8500FE
  border-radius 20px
  font-size 12px
  margin-right 10px
.dark
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
  font-weight 500
</style>
