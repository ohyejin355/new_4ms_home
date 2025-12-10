import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Homeview.vue'

import BusinessArea from '../views/business/BusinessArea.vue'
import BusinessConsulting from '../views/business/BusinessConsulting.vue'
import BusinessDev from '../views/business/BusinessDev.vue'
import BusinessMaintenance from '../views/business/BusinessMaintenance.vue'

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
      component: BusinessArea,
    },
    {
      path: '/business/solution',
      name: 'BusinessConsulting',
      component: BusinessConsulting,
    },
    {
      path: '/business/dev',
      name: 'BusinessDev',
      component: BusinessDev,
    },
    {
      path: '/business/maintenance',
      name: 'BusinessMaintenance',
      component: BusinessMaintenance,
    },
  ],
})

export default router
