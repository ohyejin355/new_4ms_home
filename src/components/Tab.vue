<template>
  <div class="sub-visual">
    <div class="visual-bg" style="background-image: url('/image/sub/sub_visual_img_bg.png')">
      <div class="overlay">
        <div class="visual-content wrapper">
          <h1 class="visual-title">{{ currentMenu.subMenu.title }}</h1>
        </div>
      </div>
    </div>

    <div class="sub-menu-bar dragging-disable">
      <div class="wrapper">
        <ul class="sub-menu-list">
          <li
            class="sub-menu-link"
            v-for="menu in currentMenu.subMenu.menu"
            :key="menu"
            :class="{ active: currentSubMenu === menu }"
            :update:to="menu.componentPath"
            @click="onSubMenuClick(menu)"
            >{{ menu.name }}</li
          >
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { currentMenu, currentSubMenu } from '@/router/menu.js';

  const onSubMenuClick = (menu) => {
    currentSubMenu.value = menu;
  };
</script>

<style scoped>
  .sub-visual {
    position: relative;
    margin-top: 5rem;
  }

  .visual-bg {
    position: relative;
    height: 300px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 768px) {
    .visual-bg {
      padding-top: 8rem;
      padding-bottom: 8rem;
    }
  }

  .overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    /*margin-top: 70px;*/
    position: absolute;
    inset: 0;
    background-color: rgba(15, 23, 42, 0.6); /* slate-900 opacity-60 */
  }

  .visual-content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 10;
    width: 100%;
    text-align: center;
  }

  .visual-title {
    color: white;
    font-size: 1.875rem;
    font-weight: 900;
    font-family: "Montserrat", sans-serif;
  }

  @media (min-width: 768px) {
    .visual-title {
      font-size: 2.25rem;
    }
  }

  /* Sub Menu Bar */
  .sub-menu-bar {
    background-color: white;
    border-bottom: 1px solid #e2e8f0;
  }

  .sub-menu-list {
    height: 4rem;
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .sub-menu-link {
    white-space: nowrap;
    padding: 0.5rem 1rem;
    font-weight: 600;
    line-height: 3rem;
    color: #64748b;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: all 0.3s;
    cursor: pointer;
  }

  .sub-menu-link:hover,
  .sub-menu-link.active {
    color: #0d9488; /* teal */
    border-bottom-color: #0d9488;
  }
</style>
