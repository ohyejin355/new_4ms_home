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

import { ref, watch, inject } from 'vue'
import { useRoute } from 'vue-router'

export default {
  install: (app) => {
    // TO-DO: 메뉴 데이터 DB 연동
    const menu = ref([
      {
        name: 'About',
        path: '/company',
        subMenu: {
          title: '회사소개',
          menu: [
            { menuId: 'COM_01', name: '회사소개' },
            { menuId: 'COM_02', name: 'CEO인사말' },
            { menuId: 'COM_03', name: '회사연혁' },
            { menuId: 'COM_04', name: '조직도' },
            { menuId: 'COM_05', name: '오시는길' },
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
            { menuId: 'BUS_03', name: 'SI개발', componentName: 'dev' },
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
            { menuId: 'SOL_01', name: 'able bot', componentName: 'Ablebot1' },
            { menuId: 'SOL_02', name: 'sally plan', componentName: 'SallyPlan' },
          ],
        },
      },
      {
        name: 'Project',
        path: '/project',
        subMenu: {
          title: '프로젝트',
          menu: [
            { menuId: 'PJT_01', name: '주요프로젝트' },
            { menuId: 'PJT_02', name: '주요협력사' },
          ],
        },
      },
    ])
    const currentMenu = ref({})
    const currentSubMenu = ref({})

    app.provide('menu', menu)
    app.provide('currentMenu', currentMenu)
    app.provide('currentSubMenu', currentSubMenu)

    app.config.globalProperties.$menu = menu
    app.config.globalProperties.$currentMenu = currentMenu
    app.config.globalProperties.$currentSubMenu = currentSubMenu
  },
  setup() {
    const route = useRoute()
    const menu = inject('menu')
    const currentMenu = inject('currentMenu')
    const currentSubMenu = inject('currentSubMenu')

    watch(
      () => route.fullPath,
      () => {
        currentMenu.value = menu.value.filter((o) => o.path === route.path)[0]
        if (route.query.menuId) {
          currentSubMenu.value = currentMenu.value.subMenu.menu.filter(
            (o) => o.menuId === route.query.menuId,
          )[0]
        } else {
          currentSubMenu.value = currentMenu.value
            ? currentMenu.value.subMenu.menu[0]
            : { menuId: '', name: 'home', componentName: 'default' }
        }
      },
    )
  },
}
