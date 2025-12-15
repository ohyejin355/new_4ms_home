import { menu, currentMenu, currentSubMenu } from '@/router/menu.js';
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Homeview.vue'

let queryMenuID = null;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
      },
    },
  ]
})

router.beforeEach((to, from, next) => {
  currentMenu.value = menu.value.filter((o) => o.path === to.path)[0];

  if (to.query.menuId) {
    queryMenuID = to.query.menuId;
    next(to.path);
  } else if(queryMenuID) {
    currentSubMenu.value = currentMenu.value.subMenu.menu.filter((o) => o.menuId === queryMenuID)[0];
    window.scrollTo({ top: 0, behavior: 'smooth' });
    queryMenuID = null;
    next();
  } else if(to.path !== '/') {
    currentSubMenu.value = currentMenu.value.subMenu.menu[0];
    window.scrollTo({ top: 0, behavior: 'smooth' });
    next();
  } else {
    currentSubMenu.value = {};
    window.scrollTo({ top: 0, behavior: 'smooth' });
    next();
  }
});

export default router
