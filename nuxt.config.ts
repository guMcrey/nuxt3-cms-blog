import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-proxy'],
  css: ['assets/styles/reset.css'],
  typescript: {
    shim: false,
    strict: true,
  },
  server: {
    port: 3001,
  },
  proxy: {
    options: {
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api',
      },
      pathFilter: ['/api'],
    },
  },
})
