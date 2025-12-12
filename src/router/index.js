import { menu, currentMenu, currentSubMenu } from '@/router/menu.js';
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Homeview.vue'

const createMenuRoute = (menu) => {
  const routes = [];
  menu.forEach((m) => {
    const baseUrl = '../views' + m.path;
    const baseRoute = {
      path: m.path,
      name: m.name,
      components: {}
    };

    baseRoute.components.default = () => import((baseUrl + `/${m.subMenu.menu[0].menuId}.vue`).toString());
    m.subMenu.menu.forEach((sm) => {
      if (sm.componentName) {
        baseRoute.components[sm.componentName] = () => import((baseUrl + `/${sm.menuId}.vue`).toString());
      }
    });
    routes.push(baseRoute);
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
    ...createMenuRoute(menu.value),
    // {
    //   path: '/company',
    //   name: 'about',
    //   components: {
    //     default: () => import('@/views/company/company_ceo.vue'),
    //     ceo: () => import('@/views/company/company_ceo.vue'),
    //     history: () => import('@/views/company/company_history.vue'),
    //     info: () => import('@/views/company/company_info.vue'),
    //     map: () => import('@/views/company/company_map.vue'),
    //     organ: () => import('@/views/company/company_organ.vue'),
    //   },
    // },
    // {
    //   path: '/business',
    //   name: 'business',
    //   components: {
    //     default: () => import('@/views/business/BusinessArea.vue'),
    //     business: () => import('@/views/business/BusinessArea.vue'),
    //     solution: () => import('@/views/business/BusinessConsulting.vue'),
    //     dev: () => import('@/views/business/BusinessDev.vue'),
    //     maintenance: () => import('@/views/business/BusinessMaintenance.vue'),
    //   },
    // },
    // {
    //   path: '/solution',
    //   name: 'solution',
    //   components: {
    //     default: () => import('@/views/solution/SolutionMain.vue'),
    //     Ablebot1: () => import('@/views/solution/SolutionMain.vue'),
    //     SallyPlan: () => import('@/views/solution/SallyPlan.vue'),
    //   },
    // },
    // {
    //   path: '/project',
    //   name: 'project',
    //   components: {
    //     default: () => import('@/views/project/ProjectInfo.vue'),
    //     info: () => import('@/views/project/ProjectInfo.vue'),
    //     partner:  () => import('@/views/project/ProjectPartner.vue'),
    //   },
    // },
  ]
})

router.beforeEach((to, from, next) => {
  const menuId = to.query.menuId;

  currentMenu.value = menu.value.filter((o) => o.path === to.path)[0];
  if (menuId) {
    next(to.path);
    setTimeout(() => {
      currentSubMenu.value = currentMenu.value.subMenu.menu.filter((o) => o.menuId === to.query.menuId)[0];
    }, 10);
  } else {
    next();
    currentSubMenu.value = currentMenu.value
      ? currentMenu.value.subMenu.menu[0]
      : { menuId: '', name: 'home', componentName: 'default' };
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
});

export default router
