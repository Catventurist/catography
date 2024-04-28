export default defineNuxtConfig({
  telemetry: false,
  modules: [
    '@nuxthub/core',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    'nuxt-auth-utils'
  ],

  hub: {
    blob: true
  },

  ui: {
    icons: ['simple-icons']
  },

  experimental: {
    viewTransition: true
  },

  devtools: { enabled: true },

  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        commaDangle: 'never'
      }
    }
  }
})
