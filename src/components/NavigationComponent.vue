<template>
  <div class="sub-visual relative mt-20">
    <div
      class="visual-bg relative h-75 bg-cover bg-center flex items-center justify-center md:pt-32 md:pb-32"
      style="background-image: url('/image/sub/sub_visual_img_bg.png')"
    >
      <div class="overlay absolute inset-0 flex items-center justify-center bg-slate-900/60">
        <div
          class="visual-content relative z-10 w-full text-center flex items-center justify-center"
        >
          <h1 class="visual-title text-white text-3xl font-black font-mont md:text-4xl">
            {{ currentMenu.subMenu.title }}
          </h1>
        </div>
      </div>
    </div>

    <div class="sub-menu-bar bg-white border-b border-slate-200 dragging-disable">
      <div class="wrapper">
        <ul class="sub-menu-list h-16 flex justify-center list-none p-0 m-0">
          <li
            :class="{ active: currentSubMenu === menu }"
            class="sub-menu-link whitespace-nowrap py-2 px-4 font-semibold leading-12 text-slate-500 no-underline border-b-2 border-transparent transition-all duration-300 cursor-pointer hover:text-teal-600 hover:border-teal-600"
            v-for="menu in currentMenu.subMenu.menu"
            :key="menu"
            :update:to="menu.componentPath"
            @click="onSubMenuClick(menu)"
          >
            {{ menu.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { currentMenu, currentSubMenu } from '@/router/menu.js'

const onSubMenuClick = (menu) => {
  currentSubMenu.value = menu
}
</script>

<style scoped>
li.active {
  color: #0d9488; /* teal */
  border-bottom-color: #0d9488;
}
</style>
