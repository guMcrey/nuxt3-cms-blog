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

<script lang="ts" setup>
useHead({
  title: "Hakuna's Blog",
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{name: 'description', content: 'My amazing site.'}],
  link: [{rel: 'stylesheet', href: '/code-theme/prism.css'}],
  script: [{src: '/code-theme/prism.js'}],
})
</script>

<style lang="stylus" scoped>
.main-content
  width 100%
  height 100%
  min-height 50vh
</style>
