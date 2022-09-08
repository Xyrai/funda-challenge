import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/styles/main.scss'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      API_KEY: process.env.API_KEY,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/node_modules/bootstrap/scss/_functions.scss"; \
      @import "@/node_modules/bootstrap/scss/_variables.scss"; \
      @import "@/node_modules/bootstrap/scss/_mixins.scss";',
        },
      },
    },
  },
});
