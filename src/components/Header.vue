<script setup>
import { ref } from 'vue'

// 1. 모바일 메뉴 상태 관리 (true: 열림, false: 닫힘)
const isMenuOpen = ref(false)

// 2. 메뉴 토글 함수
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// 3. 링크 클릭 시 메뉴 닫기 (모바일에서 이동 후 메뉴가 닫혀야 하므로)
const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="site-header glass-effect">
    <div class="wrapper">
      <div class="header-inner">
        <router-link to="/" class="logo" @click="closeMenu">
          4MS<span class="logo-dot">.</span>
        </router-link>

        <nav class="desktop-nav">
          <router-link to="/company/info" class="nav-link">About</router-link>
          <router-link to="/business" class="nav-link">Business</router-link>
          <router-link to="/solution/ai" class="nav-link">Solutions</router-link>
          <router-link to="/project" class="nav-link">Project</router-link>
        </nav>

        <div class="desktop-action">
          <router-link to="/company/map" class="btn-contact"> CONTACT </router-link>
        </div>

        <div class="mobile-toggle">
          <button @click="toggleMenu" class="menu-btn" aria-label="Toggle menu">
            <svg
              v-if="!isMenuOpen"
              class="icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
            <svg v-else class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <transition name="slide-fade">
      <div v-show="isMenuOpen" class="mobile-menu-dropdown">
        <nav class="mobile-nav">
          <router-link to="/company/info" class="mobile-link" @click="closeMenu">About</router-link>
          <router-link to="/business" class="mobile-link" @click="closeMenu">Business</router-link>
          <router-link to="/solution/ai" class="mobile-link" @click="closeMenu"
            >Solutions</router-link
          >
          <router-link to="/project" class="mobile-link" @click="closeMenu">Project</router-link>
          <router-link to="/company/map" class="mobile-link highlight" @click="closeMenu"
            >Contact</router-link
          >
        </nav>
      </div>
    </transition>
  </header>
</template>

<style scoped>
/* =========================================
   1. Header Layout
   ========================================= */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

/* 유리 효과 (Blur) */
.glass-effect {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem; /* 모바일 높이 */
}

@media (min-width: 768px) {
  .header-inner {
    height: 5rem; /* PC 높이 */
  }
}

/* =========================================
   2. Logo
   ========================================= */
.logo {
  font-size: 1.5rem;
  font-weight: 900;
  color: #1e293b; /* slate-800 */
  letter-spacing: -0.05em;
  text-decoration: none;
  z-index: 60;
}

@media (min-width: 768px) {
  .logo {
    font-size: 1.875rem;
  }
}

.logo-dot {
  color: #0d9488; /* teal-600 (primary) */
}

/* =========================================
   3. Desktop Navigation
   ========================================= */
.desktop-nav {
  display: none; /* 모바일 기본 숨김 */
  gap: 2.5rem;
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 600;
  color: #475569; /* slate-600 */
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  /* 현재 활성화된 메뉴 */
  color: #0d9488; /* primary */
}

.desktop-action {
  display: none;
}

/* PC 화면 (768px 이상) */
@media (min-width: 768px) {
  .desktop-nav {
    display: flex;
  }
  .desktop-action {
    display: block;
  }
}

/* Contact Button */
.btn-contact {
  padding: 0.5rem 1.5rem;
  background-color: #1e293b; /* slate-800 */
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 9999px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.btn-contact:hover {
  background-color: #0d9488; /* primary */
}

/* =========================================
   4. Mobile Menu
   ========================================= */
.mobile-toggle {
  display: block;
}
@media (min-width: 768px) {
  .mobile-toggle {
    display: none;
  }
}

.menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #1e293b;
  padding: 0.5rem;
}

.menu-btn:hover {
  color: #0d9488;
}

.icon {
  width: 2rem;
  height: 2rem;
  display: block;
}

/* Dropdown Area */
.mobile-menu-dropdown {
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-top: 1px solid #f1f5f9;
  position: absolute; /* 헤더 바로 아래 */
  top: 100%;
  left: 0;
  width: 100%;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
}

.mobile-link {
  padding: 1rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: #334155;
  text-decoration: none;
  border-bottom: 1px solid #f1f5f9;
}

.mobile-link:last-child {
  border-bottom: none;
}

.mobile-link:hover,
.mobile-link.router-link-active {
  color: #0d9488;
}

.highlight {
  color: #0d9488;
}

/* Transition Animation */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
