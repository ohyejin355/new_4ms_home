import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/css/common.css'
import '@/css/tailwind.css'
import { useKakao } from 'vue3-kakao-maps/@utils';
import { createPinia } from 'pinia';

useKakao('appkey');

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app');
