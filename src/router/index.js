import { menu, currentMenu, currentSubMenu, getMenu } from '@/router/menu.js';
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Homeview.vue'

const subMenuView = import.meta.glob('../views/**/*.vue');
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

  if(typeof currentMenu.value == 'undefined' || !currentMenu.value){

    // fetch menu
    menu.value = getMenu();

    // add menu to router
    createMenuRoute().forEach(r => router.addRoute(r));

    currentMenu.value = menu.value.filter((o) => o.path === to.path)[0];

    if(to.path != '/'){
      return next(to.path);
    }
  }

  if (to.query.menuId) {
    queryMenuID = to.query.menuId;
    next(to.path);
  } else if(to.path !== '/') {
    currentSubMenu.value = currentMenu.value.subMenu.menu[0];
    window.scrollTo({ top: 0, behavior: 'instant' });
    next();
  } else {
    currentSubMenu.value = {};
    window.scrollTo({ top: 0, behavior: 'instant' });
    next();
  }
});

router.afterEach(() => {
  if(queryMenuID) {
    currentSubMenu.value = currentMenu.value.subMenu.menu.filter((o) => o.menuId === queryMenuID)[0];
    window.scrollTo({ top: 0, behavior: 'instant' });
    queryMenuID = null;
  }
});

function createMenuRoute() {
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

export default router
