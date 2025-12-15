/**
 * 사용 예시
 *  import { menu, currentMenu, currentSubMenu } from '@/router/menu.js'

    <div>{{ currentMenu.name }}</div>
    <div>{{ currentSubMenu.name }}</div>

 * <router-link> 예시
    <!-- 대메뉴 이동 -->
    <router-link :to="/business"> 비즈니스 </router-link>
    <!-- 중메뉴 이동 -->
    <router-link :to="{path: '/business', query: {menuId: 'BUS_02'}}> 비즈니스 > 솔루션 </router-link>

 * TO-DO: 서버 연결 후 getMenuList 변경
 */

import { ref } from 'vue';

const subMenuView = import.meta.glob('../views/**/*.vue');

const menu = ref([]);
const currentMenu = ref({});
const currentSubMenu = ref({});

function getMenu() {
  return [
    {
      name: 'About',
      path: '/company',
      subMenu: {
        title: '회사소개',
        menu: [
          { menuId: 'company_info', name: '회사소개', componentName: 'info' },
          { menuId: 'company_ceo', name: 'CEO인사말', componentName: 'ceo' },
          { menuId: 'company_history', name: '회사연혁', componentName: 'history' },
          { menuId: 'company_organ', name: '조직도', componentName: 'organization' },
          { menuId: 'company_map', name: '오시는길', componentName: 'map' },
        ],
      },
    },
    {
      name: 'Business',
      path: '/business',
      subMenu: {
        title: '사업영역',
        menu: [
          { menuId: 'BUS_01', name: '사업영역', componentName: 'business' },
          { menuId: 'BUS_02', name: 'SI컨설팅', componentName: 'solution' },
          { menuId: 'BUS_03', name: 'SI개발', componentName: 'develop' },
          { menuId: 'BUS_04', name: 'SI운영', componentName: 'maintenance' },
        ],
      },
    },
    {
      name: 'Solutions',
      path: '/solution',
      subMenu: {
        title: '솔루션',
        menu: [
          { menuId: 'SOL_01', name: 'able bot', componentName: 'ableBot' },
          { menuId: 'SOL_02', name: 'sally plan', componentName: 'sallyPlan' },
        ],
      },
    },
    {
      name: 'Project',
      path: '/project',
      subMenu: {
        title: '프로젝트',
        menu: [
          { menuId: 'PJT_01', name: '주요프로젝트', componentName: 'info' },
          { menuId: 'PJT_02', name: '주요협력사', componentName: 'partner' },
        ],
      },
    },
  ]
};

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

export { menu, currentMenu, currentSubMenu, getMenu, createMenuRoute };
