<template>
  <div class="nav-wrapper">
    <ul class="nav-wrapper-left">
      <NuxtLink to="/">
        <div class="logo-img">
          <img src="@/assets/images/blog-logo.png" alt="logo" />
        </div>
      </NuxtLink>
      <NuxtLink to="/">
        <li class="nav-item">
          <span
            :class="
              route.path === '/' ? 'nav-item-title active' : 'nav-item-title'
            "
            >Home</span
          >
        </li>
      </NuxtLink>
      <NuxtLink to="/about-me">
        <li class="nav-item">
          <span
            :class="
              route.path === '/about-me'
                ? 'nav-item-title active'
                : 'nav-item-title'
            "
            >About Me</span
          >
        </li>
      </NuxtLink>
    </ul>
    <ul class="nav-wrapper-right">
      <li class="search-btn" @click="showSearchDialog = true">
        <img
          class="search-icon"
          src="@/assets/images/icons/search.svg"
          alt="search"
        />
      </li>
    </ul>
    <Search v-if="showSearchDialog" @close="showSearchDialog = false"></Search>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const showSearchDialog = ref(false)
</script>

<style lang="stylus" scoped>
.nav-wrapper
  height 90px
  padding 0 45px
  display flex
  justify-content space-between
  align-items center
  border-bottom 1px solid rgba(22,22,22,0.1)
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
  font-family 'NotoSans'
  font-weight 400
  &:hover
    border-bottom 2px solid #8500FE
.active
  border-bottom 2px solid #8500FE
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
  width 35px
  height 35px
  background-color #ECECEC
  border-radius 100%
  text-align center
  line-height 38px
  .search-icon
    width 15px
    height auto
.search-btn:hover
  background-color #8500FE
  transition all 0.3s linear
  cursor pointer
  .search-icon
    transform translateY(-200px)
    filter drop-shadow(0 200px #fff)
</style>
