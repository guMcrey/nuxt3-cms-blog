<template>
  <div class="nav-wrapper">
    <ul class="nav-wrapper-left">
      <div class="logo-img">
        <img src="@/assets/images/blog-logo.png" alt="logo" />
      </div>
      <li class="nav-item">
        <span class="nav-item-title">Home</span>
      </li>
      <li class="nav-item">
        <span class="nav-item-title">About Me</span>
      </li>
    </ul>
    <ul class="nav-wrapper-right">
      <li class="search-btn">
        <img
          class="search-icon"
          src="@/assets/images/icons/search.svg"
          alt="search"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="stylus" scoped>
.nav-wrapper
  height 90px
  padding 0 45px
  display flex
  justify-content space-between
  align-items center
.nav-wrapper-left
  display flex
  align-items center
.nav-item
  margin 25px 0 25px 30px
.nav-item-title
  color #1c2b33
  font-size 17px
  font-weight normal
  padding 3px
  &:hover
    border-bottom 1px solid #8500FE
.logo-img
  width 110px
  height auto
  padding-right 40px
  display flex
  align-items center
  img
    max-width 100%
    max-height 100%
.search-btn
  width 38px
  height 38px
  background-color #ECECEC
  border-radius 100%
  text-align center
  line-height 38px
  .search-icon
    width 15px
    height auto
.search-btn:hover
  background-color #8500FE
  .search-icon
    transform translateY(-200px)
    filter drop-shadow(0 200px #fff)
</style>
