import type { NuxtI18nOptions } from '@nuxtjs/i18n';

const i18nConfig: Partial<NuxtI18nOptions> = {
  locales: [
    { code: 'en-US', name: 'English', file: 'en-US/index.ts' },
    { code: 'zh-TW', name: '繁體中文', file: 'zh-TW/index.ts' },
  ],
  langDir: '../app/i18n',
  vueI18n: '../app/i18n/index.ts',
  defaultLocale: 'zh-TW',
  // strategy: 'prefix_except_default',
};

export default i18nConfig;
