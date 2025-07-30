import enUS from './en-US';
import zhTW from './zh-TW';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'zh-TW',
  messages: {
    'en-US': enUS,
    'zh-TW': zhTW,
  },
}));
