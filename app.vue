<template>
  <div>
    <Nav></Nav>
    <div class="main-content">
      <NuxtPage></NuxtPage>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="stylus" scoped>
.main-content
  padding 30px
  width 100%
  min-height calc(100vh - 404px)
  box-sizing border-box
</style>
