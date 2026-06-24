export default defineNuxtConfig({
  srcDir: '.',
  compatibilityDate: '2024-06-24',

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],

  app: {
    head: {
      title: 'BeastBook',
      meta: [
        { name: 'description', content: 'BeastBook - Your Ultimate Training Companion' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      ],
    },
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api/v1',
      appName: 'BeastBook',
    },
  },

  devtools: { enabled: true },
});
