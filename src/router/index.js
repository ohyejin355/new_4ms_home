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
      components: {
        default: HomeView
      },
    },
    {
      path: '/company',
      name: 'about',
      components: {
      },
    },
    {
      path: '/business',
      name: 'business',
      components: {
        default: BusinessArea,
        business: BusinessArea,
        solution: BusinessConsulting,
        dev: BusinessDev,
        maintenance: BusinessMaintenance,
      },
    },
    {
      path: '/solution',
      name: 'solution',
      components: {
      },
    },
    {
      path: '/project',
      name: 'project',
      components: {
      },
    },
  ],
})

export default router
