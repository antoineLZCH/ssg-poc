// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@unocss/nuxt'],
  i18n: {
    locales: [
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'Français',
        file: 'fr.ts'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.ts'
      }
    ],
    langDir: 'i18n',
    defaultLocale: 'fr',
    vueI18n: './i18n.config.ts',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
  }
})
