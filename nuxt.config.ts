import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['assets/styles/reset.css'],
  typescript: {
    shim: false,
    strict: true,
  },
  server: {
    port: 3003,
    host: '0.0.0.0',
  },
})
