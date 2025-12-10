<template>
  <header>
    <div class="container">
      <div class="layout-pc">
        <router-link to="/"
          ><span class="logo">4MS<span class="logo-dot">.</span></span></router-link
        >
        <nav class="global-navigation">
          <router-link
            class="global-navigation-button"
            v-for="item in menu"
            :key="item.name"
            :to="item.path /* replace here to link subMenu :: ex) {path: '/business', query: {menuId: 'BUS_02'}}*/"
            >{{ item.name }}</router-link
          >
        </nav>
        <router-link class="global-navigation-contact" to="/company">CONTACT</router-link>
      </div>
      <div class="layout-mobile">
        <router-link to="/"
          ><span class="logo">4MS<span class="logo-dot">.</span></span></router-link
        >
        <button class="mobile-menu-button" aria-label="메뉴" :onclick="toggleMobileMenu">
          <svg class="mobile-menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div
      id="mobile-menu-toggle"
      class="layout-mobile mobile-menu-container"
      style="max-height: 0px; opacity: 0"
    >
      <nav class="global-navigation">
        <router-link
          class="global-navigation-button"
          v-for="item in menu"
          :key="item.name"
          :to="item.path"
          >{{ item.name }}</router-link
        >
      </nav>
    </div>
  </header>

  <div class="sub-visual" v-if="$route.fullPath !== '/'">
    <div class="visual-bg" style="background-image: url('/image/sub/sub_visual_img_bg.png')">
      <div class="overlay">
        <div class="visual-content wrapper">
          <h1 class="visual-title">{{ currentMenu.subMenu.title }}</h1>
        </div>
      </div>
    </div>

    <div class="sub-menu-bar">
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
  import { inject } from 'vue';

  const menu = inject('menu');
  const currentMenu = inject('currentMenu');
  const currentSubMenu = inject('currentSubMenu');

  const toggleMobileMenu = () => {1
    const mobileMenu = document.getElementById('mobile-menu-toggle')
    if (mobileMenu.style.maxHeight === '0px') {
      mobileMenu.style.maxHeight = '400px'
      mobileMenu.style.opacity = '1'
    } else {
      mobileMenu.style.maxHeight = '0px'
      mobileMenu.style.opacity = '0'
    }
  }

  const onSubMenuClick = (menu) => {
    currentSubMenu.value = menu;
  };
</script>

<style scoped>
/* =========================================
   1. GNB (Header)
   ========================================= */
header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 50;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

header div.container:has(> .layout-pc) {
  max-width: 80rem;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  height: 5rem;
  align-items: center;
}

header div.container:has(> .layout-mobile) {
  max-width: 80rem;
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  height: 5rem;
  align-items: center;
}

header div.container > .layout-pc,
header div.container > .layout-mobile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
}

header a {
  text-decoration: none;
}
header .logo {
  font-family: 'NanumGothic', sans-serif;
  z-index: 50;
  font-weight: 900;
  color: rgb(30, 41, 59, 1);
  cursor: pointer;
}

header .logo-dot {
  color: #115e59;
}

/* pc-layout */
header .layout-pc {
  .logo {
    font-size: 1.875rem;
  }
  .global-navigation {
    display: flex;
    gap: 2.5rem;
  }
  .global-navigation-button {
    transition-property:
      color,
      background-color,
      border-color,
      text-decoration-color,
      fill,
      stroke,
      opacity,
      box-shadow,
      transform,
      filter,
      backdrop-filter,
      -webkit-text-decoration-color,
      -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    color: rgb(71, 85, 105, 1);
    letter-spacing: 0.025em;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.875rem;
    cursor: pointer;
  }

  .global-navigation-contact {
    transition-property:
      color,
      background-color,
      border-color,
      text-decoration-color,
      fill,
      stroke,
      opacity,
      box-shadow,
      transform,
      filter,
      backdrop-filter,
      -webkit-text-decoration-color,
      -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    box-shadow:
      0 0 #0000,
      0 0 #0000,
      0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    color: rgb(255 255 255 / 1);
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    background-color: rgb(30 41 59 / 1);
    border-radius: 9999px;
    cursor: pointer;
  }
}

/* mobile-layout */
header .layout-mobile {
  .logo {
    font-size: 1.5rem;
  }

  .mobile-menu-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: rgb(30, 41, 59, 1);
  }

  .mobile-menu-icon {
    width: 2rem;
    height: 2rem;
  }
}

header .mobile-menu-container {
  transition:
    max-height 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  overflow: hidden;
  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  background-color: rgb(255 255 255 / 0.95);
  border-color: rgb(243 244 246 / 1);
  border-top-width: 1px;
  border-top-style: solid;

  .global-navigation {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .global-navigation-button {
    color: rgb(51 65 85 / 1);
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-color: rgb(241 245 249 / 1);
    border-bottom-width: 1px;
    border-style: solid;
  }
}

/* =========================================
   2. Sub Visual (Header Image)
   ========================================= */
.wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

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
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.sub-menu-link {
  white-space: nowrap;
  display: block;
  padding: 1rem 2rem;
  font-weight: 600;
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
