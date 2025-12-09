import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Homeview.vue'
import business_area from '../views/business_area.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/business',
      name: 'business',
      component: business_area,
    },
  ],
})

export default router
