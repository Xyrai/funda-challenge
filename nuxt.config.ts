import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/styles/main.scss'],
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      API_KEY: process.env.API_KEY,
    },
  },
});
