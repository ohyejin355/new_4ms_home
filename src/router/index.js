import { currentMenuId, employeesMenuList } from '@/router/menu.js'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Homeview.vue';
import LoginView from '@/views/LoginView.vue';
import { userStore } from '@/store/pinia.store.js';
import axios from '@/api/axios.js';

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
        'COM_04': () => import('../views/company/company_organ.vue'),
        'COM_05': () => import('../views/company/company_map.vue'),
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
        'FIN_01': () => import('../views/employees/finance/FIN_01.vue'),
        // 여기로 직원용 메뉴들이 추가됩니다.
      },
      meta: { requiresAuth: true },
    }
  ]
})

router.beforeEach(async (to, from, next) => {

  const session = userStore();

  if(sessionStorage.getItem("empNo")){
    try {
      const response = await axios.get("/api/me");
      console.log("🔐", response.data);

      if (response.status === 200) {
        addEmployeesMenu();
        session.login(response.data.empNo, response.data.empNm);
      } else {
        session.logout();
        if(to.meta.requiresAuth) return next({ path: '/login', query: { menuId: 'LOGIN' } });
      }
    } catch {
      session.logout();
      if(to.meta.requiresAuth) return next({ path: '/login', query: { menuId: 'LOGIN' } });
    }
  }

  if(to.path === '/login'){
    if(session.checkState()){
      return next({ path: '/', query: { menuId: 'HOME' } });
    } else {
      currentMenuId.value = 'LOGIN';
    }
  }

  if(to.query.menuId){
    currentMenuId.value = to.query.menuId;
    next(to.path);
  } else {
    console.log("📕", currentMenuId.value);
    next();
  }
});

router.afterEach(() => {
  window.scrollTo({ top: 0, behavior: 'instant' });
});

const addEmployeesMenu = () => {

  employeesMenuList.value = [
    {
      id: 'INF',
      name: '내정보',
      engName: '내 정보',
    },
    {
      id: 'FIN',
      name: '재무/회계',
      engName: 'Finance',
      menu: [
        {
          id: 'FIN_01',
          name: '경비신청',
          desc: '경비신청 메뉴입니다.'
        },
        {
          id: 'FIN_02',
          name: '경비내역',
          desc: '경비내역 메뉴입니다.'
        },
      ]
    },
  ];
}

export default router;
