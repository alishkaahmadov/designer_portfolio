// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  // modules: ['@nuxtjs/google-fonts', '@nuxt/image'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    baseURL: '/',
    pageTransition: {
      name: 'leave-up',
      mode: 'default', // NOT out-in
    },
  },
  css: ['~/assets/css/main.css', '~/assets/css/fonts.css'],
  ssr: false,
  nitro: {
    preset: 'static'
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
