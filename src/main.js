import { createApp } from 'vue'
import App from './App.vue'
import '@/css/common.css'
import '@/css/tailwind.css'
import { useKakao } from 'vue3-kakao-maps/@utils';
import { createPinia } from 'pinia';
import router from './router'

const pinia = createPinia();

useKakao('appkey');

createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app');
