// https://nuxt.com/docs/api/configuration/nuxt-config
import { i18nConfig, runtimeConfig, securityConfig, svgoConfig } from './app/configs';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'nuxt-security',
    'motion-v/nuxt',
    'nuxt-svgo',
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
  svgo: svgoConfig,
});
