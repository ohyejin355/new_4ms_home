/**
 * 기능: route 변경 시 currentMenu, currentSubMenu 자동 변경
 *
 * 필요한 곳에서 아래와 같이 사용
    const menu = inject('menu');
    const currentMenu = inject('currentMenu'); // 현재 대메뉴 :: route.path 기준 menu의 N번째 객체
    const currentSubMenu = inject('currentSubMenu'); // 현재 중메뉴 :: currentMenu.subMenu.menu의 N번째 객체

    <div>{{ currentMenu.name }}</div>
    <div>{{ currentSubMenu.name }}</div>

 * <router-link> 예시
    <!-- 중메뉴 선택 시 -->
    <router-link :to="{path: '/business', query: {menuId: 'BUS_02'}}> 비즈니스 > 솔루션 </router-link>

    <!-- 대메뉴 선택 시 -->
    <router-link :to="/business"> 비즈니스 </router-link>

 * TO-DO: DB 연동 필요
 */

import { ref } from 'vue';

const menu = ref([
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
]);
const currentMenu = ref({});
const currentSubMenu = ref({});


export { menu, currentMenu, currentSubMenu };
