<template>
  <div class="footer-wrapper">
    <div class="footer-wrapper-top">
      <div class="wrapper-top-left">
        <img class="logo-area" src="@/assets/images/blog-logo.png" alt="logo" />
        <div class="footer-follow">Follow Me</div>
        <ul class="footer-follow-icon">
          <li class="icon-item">
            <img
              class="github-icon"
              src="@/assets/images/icons/footer-github.svg"
              alt="github"
            />
          </li>
          <li class="icon-item">
            <img
              class="email-icon"
              src="@/assets/images/icons/footer-email.svg"
              alt="email"
            />
          </li>
          <li class="icon-item npm-icon">
            <img
              class="npm-icon"
              src="@/assets/images/icons/footer-npm.svg"
              alt="npm"
            />
          </li>
        </ul>
      </div>
      <div class="wrapper-top-right"></div>
    </div>
  </div>
  <div class="footer-wrapper-bottom">
    © 2022 Hakuna blog
  </div>
</template>

<style lang="stylus" scoped>
.footer-wrapper
  margin-left auto
  margin-right auto
  background-color #f1f4f7
.footer-wrapper-top
  padding 0 47px
.wrapper-top-left
  padding 50px 0
  .logo-area
    width 110px
    height auto
  .footer-follow
    margin-top 32px
    font-size 13px
    color #222
  .footer-follow-icon
    display flex
    align-items center
    margin-top 10px
  .icon-item
    margin-right 10px
    width 24px
    height 24px
    padding 4px
  .npm-icon
    padding-top 4px
    width 30px
    height auto
  .github-icon:hover
    transform translateX(-200px)
    filter drop-shadow(200px 0 #644AFE)
  .email-icon:hover
    transform translateX(-200px)
    filter drop-shadow(200px 0 #58B6BB)
  .npm-icon:hover
    transform translateX(-200px)
    filter drop-shadow(200px 0 #BD232A)
.footer-wrapper-bottom
  background-color #fff
  padding 25px 72px
  color #172c34
  font-size 13px
img
  max-width 100%
  max-height 100%
</style>
