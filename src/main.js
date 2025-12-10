import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import menu from './router/menu.js';

const app = createApp(App);

app.use(router).use(menu).mount('#app');
