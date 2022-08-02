<template>
  <div class="search-wrapper">
    <div class="wrapper-area">
      <div class="input-wrapper">
        <img
          class="search-icon"
          src="@/assets/images/icons/search.svg"
          alt="search"
        />
        <div
          class="input-bar"
          contenteditable="true"
          placeholder="Search articles"
          @keydown.enter="keydownHandler"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const keydownHandler = (event: any) => {
  event.returnValue = false
  return false
}
</script>

<style lang="stylus" scoped>
.search-wrapper
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  background-color rgba(244, 244, 245, 0.7)
  z-index 999
  display flex
  justify-content center
  backdrop-filter blur(8px)
.wrapper-area
  padding 25px
  margin-top 5%
  width 40%
  height 400px
  background-color #fff
  box-shadow inset 0px 0px 0 0 hsla(0,0%,100%,0.4),0 3px 5px 0 #5f4b6d
  border-radius 12px
.input-wrapper
  display flex
  align-items center
  gap 10px
.input-bar
  width 100%
  padding 12px
  font-size 18px
.search-icon
  width 20px
  height auto
.input-bar:empty:before
    content attr(placeholder)
    color #b5afb6
    font-size 18px
</style>
