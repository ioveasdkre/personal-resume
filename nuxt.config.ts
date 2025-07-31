// https://nuxt.com/docs/api/configuration/nuxt-config
import { i18nConfig, runtimeConfig, securityConfig } from './app/configs';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    'nuxt-security',
    'motion-v/nuxt',
  ],
  typescript: {
    typeCheck: true,
  },
  ssr: false,
  vite: {
    esbuild: {
      drop: runtimeConfig.public.isProduction ? ['console', 'debugger'] : [],
    },
  },
  runtimeConfig,
  i18n: i18nConfig,
  security: securityConfig,
});
