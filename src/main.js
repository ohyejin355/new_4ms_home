import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/css/common.css'
import '@/css/tailwind.css'
import { useKakao } from 'vue3-kakao-maps/@utils';

useKakao('appkey');

const app = createApp(App)

app.use(router).mount('#app')
