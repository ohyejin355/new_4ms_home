<template>
  <header>
    <div class="container">
      <div class="layout-pc">
        <router-link to="/"
          ><span class="logo dragging-disable"
            >4MS<span class="logo-dot">.</span></span
          ></router-link
        >
        <nav class="global-navigation dragging-disable">
          <router-link
            class="global-navigation-button"
            v-for="item in menu"
            :key="item.name"
            :to="
              item.path /* replace here to link subMenu :: ex) {path: '/business', query: {menuId: 'BUS_02'}}*/
            "
            >{{ item.name }}</router-link
          >
        </nav>
        <router-link class="global-navigation-contact dragging-disable" to="/company"
          >CONTACT</router-link
        >
      </div>
      <div class="layout-mobile">
        <router-link to="/"
          ><span class="logo">4MS<span class="logo-dot">.</span></span></router-link
        >
        <button
          ref="menuBtnRef"
          class="mobile-menu-button"
          aria-label="메뉴"
          @click="toggleMobileMenu"
        >
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
      ref="mobileMenuRef"
      class="layout-mobile mobile-menu-container"
      :style="{ maxHeight: isMenuOpen ? '400px' : '0px', opacity: isMenuOpen ? '1' : '0' }"
    >
      <nav class="global-navigation">
        <router-link
          class="global-navigation-button"
          v-for="item in menu"
          :key="item.name"
          :to="item.path"
          @click="closeMobileMenu"
          >{{ item.name }}</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script setup>
import { menu } from '@/router/menu.js'

// 모바일 메뉴 상태 관리
import { ref, onMounted, onUnmounted } from 'vue'

// 모바일 메뉴 상태 변수
const isMenuOpen = ref(false)

// 모바일 메뉴 참조
const mobileMenuRef = ref(null)

// 메뉴 버튼 참조
const menuBtnRef = ref(null)

// 모바일 메뉴 토글 함수
const toggleMobileMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// 모바일 메뉴 닫기 함수
const closeMobileMenu = () => {
  isMenuOpen.value = false
}

// 외부 클릭 감지
const handleClickOutside = (event) => {
  if (!isMenuOpen.value) return
  const target = event.target

  // 메뉴가 열려있고, 클릭한 대상이 모바일 메뉴나 메뉴 버튼이 아닐 때 메뉴 닫기
  if (
    mobileMenuRef.value &&
    !mobileMenuRef.value.contains(target) &&
    menuBtnRef.value &&
    !menuBtnRef.value.contains(target)
  ) {
    closeMobileMenu()
  }
}

// 렌더링후 외부 클릭 이벤트 등록 및 해제
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
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

header div.container {
  max-width: 80rem;
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  height: 5rem;
  align-items: center;
}

@media (min-width: 768px) {
  header div.container {
    max-width: 80rem;
    margin: 0 auto;
    padding-left: 2rem;
    padding-right: 2rem;
    height: 5rem;
    align-items: center;
  }
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
</style>
