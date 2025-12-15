import { menu, currentMenu, currentSubMenu } from '@/router/menu.js';
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Homeview.vue'

const subMenuView = import.meta.glob('../views/**/*.vue');
let queryMenuID = null;

const createMenuRoute = () => {
  const routes = [];

  menu.value.forEach((m) => {
    const baseUrl = '../views' + m.path;
    const newRoute = {
      path: m.path,
      name: m.name,
      components: {}
    };

    newRoute.components.default = subMenuView[(baseUrl + `/${m.subMenu.menu[0].menuId}.vue`).toString()];
    m.subMenu.menu.forEach((sm) => {
      if (sm.componentName) {
        newRoute.components[sm.componentName] = subMenuView[(baseUrl + `/${sm.menuId}.vue`).toString()];
      }
    });

    routes.push(newRoute);
  });

  return routes;
};

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
    ...createMenuRoute(),
  ]
})

router.beforeEach((to, from, next) => {

  currentMenu.value = menu.value.filter((o) => o.path === to.path)[0];
  if (to.query.menuId) {
    queryMenuID = to.query.menuId;
    next(to.path);
  } else if(queryMenuID) {
    currentSubMenu.value = currentMenu.value.subMenu.menu.filter((o) => o.menuId === queryMenuID)[0];
    queryMenuID = null;
    next();
  } else if(to.path !== '/') {
    currentSubMenu.value = currentMenu.value.subMenu.menu[0];
    next();
  } else {
    currentSubMenu.value = {};
    next();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
});

export default router
