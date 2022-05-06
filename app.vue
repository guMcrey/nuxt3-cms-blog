<template>
  <div>
    <client-only>
      <Fonts />
    </client-only>
    <Nav></Nav>
    <div class="main-content">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<style lang="stylus" scoped>
.main-content
  width 100%
  height 100%
  min-height 50vh
</style>
