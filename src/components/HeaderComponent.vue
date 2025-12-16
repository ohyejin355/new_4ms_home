<template>
  <header class="fixed top-0 w-full bg-white/90 backdrop-blur-[10px] border-b border-white/30 z-50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 h-20 items-center md:px-8">
      <div class="layout-pc flex justify-between items-center h-20">
        <router-link to="/">
          <span class="z-50 font-black text-slate-800 cursor-pointer text-3xl dragging-disable">
            4MS
          <span class="text-teal-800">.</span></span>
        </router-link>
        <nav class="flex gap-10 dragging-disable">
          <router-link
            class="transition-colors duration-150 text-slate-600 uppercase font-semibold text-sm cursor-pointer"
            v-for="item in menu"
            :key="item.name"
            :to="item.path"
          >{{ item.name }}</router-link>
        </nav>
        <router-link
          class="transition-all duration-300 shadow-md text-white font-bold text-sm py-2 px-6 bg-slate-800 rounded-full cursor-pointer dragging-disable"
          :to="{path: '/company', query: {menuId: 'company_map'}}"
        >CONTACT</router-link>
      </div>
      <div class="layout-mobile flex justify-between items-center h-20">
        <router-link to="/">
          <span class="z-50 font-black text-slate-800 cursor-pointer text-2xl">4MS<span class="logo-dot text-teal-800">.</span></span>
        </router-link>
        <button
          ref="menuBtnRef"
          class="bg-transparent border-none cursor-pointer text-slate-800"
          aria-label="메뉴"
          @click="toggleMobileMenu"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      class="transition-all duration-300 overflow-hidden shadow-md bg-white/95 border-t border-gray-100"
      :style="{ maxHeight: isMenuOpen ? '400px' : '0px', opacity: isMenuOpen ? '1' : '0' }"
    >
      <nav class=" flex flex-col gap-4 pt-4 pb-4 px-6">
        <router-link
          class="text-slate-700 font-bold text-base py-2 border-b border-slate-100"
          v-for="item in menu"
          :key="item.name"
          :to="item.path"
          @click="closeMobileMenu"
        >{{ item.name }}</router-link>
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
