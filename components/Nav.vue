<template>
  <div class="nav-wrapper">
    <ul class="nav-wrapper-left">
      <div class="logo-img">
        <img src="@/assets/images/logo.png" alt="logo" />
      </div>
      <li class="nav-item">Home</li>
      <li class="nav-item">About Me</li>
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
  height 100px
  padding 0 30px
  display flex
  justify-content space-between
  align-items center
  box-shadow 0 2px 4px -5px #333
.nav-wrapper-left
  display flex
  align-items center
.nav-item
  padding 35px
  font-size 18px
  font-weight 600
  &:hover
    color #6A39D0
.logo-img
  width 120px
  height auto
  padding-right 30px
  position relative
  display flex
  align-items center
  &:before
    position absolute
    right 0
    content ''
    border-right 1px solid #E6E6E6
    height 50px
    vertical-align middle
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
  background-color #6A39D0
  .search-icon
    transform translateY(-200px)
    filter drop-shadow(0 200px #fff)
</style>
