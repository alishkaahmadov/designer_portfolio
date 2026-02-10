// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  // modules: ['@nuxtjs/google-fonts', '@nuxt/image'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    pageTransition: {
      name: 'leave-up',
      mode: 'default', // NOT out-in
    },
  },
  css: ['~/assets/css/main.css', '~/assets/css/fonts.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
