// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
import {
  googleFontsConfig,
  i18nConfig,
  runtimeConfig,
  securityConfig,
  shadcnConfig,
  svgoConfig,
} from './app/configs';

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
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
  ],
  colorMode: {
    classSuffix: '',
  },
  typescript: {
    typeCheck: true,
  },
  ssr: false,
  runtimeConfig,
  googleFonts: googleFontsConfig,
  i18n: i18nConfig,
  security: securityConfig,
  shadcn: shadcnConfig,
  svgo: svgoConfig,
  css: ['@/assets/css/tailwind.css'],
  vite: {
    plugins: [tailwindcss()],
    esbuild: {
      drop: runtimeConfig.public.isProduction ? ['console', 'debugger'] : [],
    },
  },
});
