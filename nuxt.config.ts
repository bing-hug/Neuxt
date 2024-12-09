// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src/',
  components: [
    {
      path: '~/components/',
      pathPrefix: false,
    }
  ],
  modules: [
      '@element-plus/nuxt',
      '@unocss/nuxt'
  ],
})
