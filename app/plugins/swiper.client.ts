// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';

export default defineNuxtPlugin((_nuxtApp) => {
  // register Swiper custom elements
  register();
});
