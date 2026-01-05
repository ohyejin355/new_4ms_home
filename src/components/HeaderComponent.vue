<template>
  <header class="fixed top-0 w-full bg-white/90 backdrop-blur-[10px] border-b border-white/30 z-50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 h-16 md:h-20 items-center md:px-8">

      <!-- PC -->
      <div class="layout-pc grid grid-rows-none grid-cols-[1fr_4fr_1fr] items-center h-20">
        <router-link :to="{path: '/', query: {menuId: 'HOME'}}" class="w-fit">
          <span class="z-50 font-black text-slate-800 cursor-pointer text-3xl dragging-disable">
            4MS
          <span class="text-teal-800">.</span></span>
        </router-link>
        <nav class="flex gap-10 dragging-disable justify-center">
          <router-link
            v-for="group in publicMenuList()"
            :key="group.id"
            class="text-slate-600 uppercase font-semibold text-sm cursor-pointer"
            :to="{path: '/', query: {menuId: group.menu[0].id}}"
          >{{ group.engName }}</router-link>
        </nav>
        <div class="flex gap-2 justify-end">
          <router-link
            class="transition-all duration-300 text-slate-800 bg-gray-100 font-bold text-sm py-2 px-6 rounded-full cursor-pointer dragging-disable"
            :to="{path: '/login', query: {menuId: 'LOGIN'}}"
          >LOGIN</router-link>
        </div>
      </div>

      <!-- MOBILE -->
      <div class="layout-mobile flex justify-between items-center h-16">
        <router-link :to="{path: '/', query: {menuId: 'HOME'}}">
          <span class="z-50 font-black text-slate-800 cursor-pointer text-xl md:text-3xl">4MS<span class="logo-dot text-teal-800">.</span></span>
        </router-link>
        <button
          ref="menuBtnRef"
          class="bg-transparent border-none cursor-pointer text-slate-800"
          aria-label="메뉴"
          @click="toggleMobileMenu"
        >
          <svg class="w-8 h-8 menu-icon" :class="{ open: isMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16"
              class="line"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 12h16"
              class="line"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 18h7"
              class="line"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <div
      ref="mobileMenuRef"
      class="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-white backdrop-blur-[10px] shadow-lg border-r border-gray-200 transition-transform duration-300 z-40"
      :style="{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)' }"
    >
      <nav class="flex flex-col pt-4 pb-4 px-6 overflow-y-auto h-full">
        <div v-for="group in publicMenuList()" :key="group.id" class="mb-4 border-b border-slate-100">
          <button
            class="w-full text-left text-slate-700 font-bold text-base py-2 flex justify-between items-center"
            @click="toggleGroup(group.id)"
          >
            {{ group.name }}
            <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': activeGroup.includes(group.id) }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div v-if="activeGroup.includes(group.id)" class="mt-2 ml-4 transition-all duration-300 space-y-2">
            <router-link
              v-for="item in group.menu"
              :key="item.id"
              class="block text-slate-600 font-medium text-base py-2 hover:text-teal-600"
              :to="{path: '/', query: {menuId: item.id}}"
              @click="closeMobileMenu"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { publicMenuList } from '@/router/menu.js'

// 모바일 메뉴 상태 관리
import { ref, onMounted, onUnmounted } from 'vue'

// 모바일 메뉴 상태 변수
const isMenuOpen = ref(false)

// 활성 그룹 상태
const activeGroup = ref([])

// 모바일 메뉴 참조
const mobileMenuRef = ref(null)

// 메뉴 버튼 참조
const menuBtnRef = ref(null)

// 모바일 메뉴 토글 함수
const toggleMobileMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    activeGroup.value = [];
    document.querySelector('html').setAttribute('class', 'stop-scroll');
  } else {
    document.querySelector('html').removeAttribute('class');
  }
}

// 그룹 토글 함수
const toggleGroup = (groupId) => {
  const index = activeGroup.value.indexOf(groupId);
  if (index > -1) {
    activeGroup.value.splice(index, 1);
  } else {
    activeGroup.value.push(groupId);
  }
}

// 모바일 메뉴 닫기 함수
const closeMobileMenu = () => {
  isMenuOpen.value = false;
  activeGroup.value = [];
  document.querySelector('html').removeAttribute('class');
}

// 외부 클릭 감지
const handleClickOutside = (event) => {
  if (!isMenuOpen.value) return;
  const target = event.target;

  // 메뉴가 열려있고, 클릭한 대상이 모바일 메뉴나 메뉴 버튼이 아닐 때 메뉴 닫기
  if (
    mobileMenuRef.value &&
    !mobileMenuRef.value.contains(target) &&
    menuBtnRef.value &&
    !menuBtnRef.value.contains(target)
  ) {
    closeMobileMenu();
  }
}

// 렌더링후 외부 클릭 이벤트 등록 및 해제
onMounted(() => {
  document.addEventListener('touchstart', handleClickOutside);
})

onUnmounted(() => {
  document.removeEventListener('touchstart', handleClickOutside);
})
</script>

<style scoped>
.menu-icon .line {
  transition: all 0.2s ease;
  transform-origin: center;
}

.menu-icon.open {
  transform: rotate(180deg)
}

.menu-icon.open .line:nth-child(1) {
  transform: rotate(45deg) translate(0, 6px);
}

.menu-icon.open .line:nth-child(2) {
  opacity: 0;
}

.menu-icon.open .line:nth-child(3) {
  d: path("M4 6h16");
  transform: rotate(-45deg) translate(0, 6px);
}
</style>
