import { currentMenuId } from '@/router/menu.js'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Homeview.vue';
import LoginView from '@/views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      components: {
        default: HomeView,
        'HOME': HomeView,
        'COM_01': () => import('../views/company/company_info.vue'),
        'COM_02': () => import('../views/company/company_ceo.vue'),
        'COM_03': () => import('../views/company/company_history.vue'),
        'COM_04': () => import('../views/company/company_map.vue'),
        'COM_05': () => import('../views/company/company_organ.vue'),
        'BUS_01': () => import('../views/business/BUS_01.vue'),
        'BUS_02': () => import('../views/business/BUS_02.vue'),
        'BUS_03': () => import('../views/business/BUS_03.vue'),
        'BUS_04': () => import('../views/business/BUS_04.vue'),
        'SOL_01': () => import('../views/solution/SOL_01.vue'),
        'SOL_02': () => import('../views/solution/SOL_02.vue'),
        'PJT_01': () => import('../views/project/PJT_01.vue'),
        'PJT_02': () => import('../views/project/PJT_02.vue'),
        // 여기로 GNB 메뉴들이 추가됩니다.
      }
    },
    {
      name: 'login',
      path: '/login',
      components: {
        default: LoginView,
        'LOGIN': LoginView,
        // 'RESET': PasswordResetView,
      }
    },
    {
      name: 'employees',
      path: '/employees',
      components: {
        default: HomeView,
        // 여기로 직원용 메뉴들이 추가됩니다.
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.query.menuId){
    currentMenuId.value = to.query.menuId;
    next(to.path);
  } else {
    next();
  }
});

router.afterEach(() => {
  window.scrollTo({ top: 0, behavior: 'instant' });
});

export default router;
