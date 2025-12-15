import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/css/common.css'
import '@/css/tailwind.css'

const app = createApp(App)

app.use(router).mount('#app')
