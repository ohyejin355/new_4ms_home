<template>
  <header class="fixed top-0 w-full bg-white/90 backdrop-blur-[10px] border-b border-white/30 z-50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 h-12 md:h-20 items-center md:px-8">

      <!-- PC -->
      <div class="layout-pc grid grid-rows-none grid-cols-[1fr_4fr_1fr] items-center h-20">
        <router-link :to="{path: '/', query: {menuId: 'HOME'}}" class="w-fit">
          <span class="z-50 font-black text-slate-800 cursor-pointer text-3xl dragging-disable">
            4MS
          <span class="text-teal-800">.</span></span>
        </router-link>
        <nav class="flex gap-10 dragging-disable justify-center">
          <router-link
            v-for="group in publicMenuList"
            :key="group.id"
            class="text-slate-600 uppercase font-semibold text-sm cursor-pointer"
            :to="{path: '/', query: {menuId: group.menu ? group.menu[0].id : group.id}}"
          >{{ group.engName }}</router-link>
        </nav>
        <div class="flex gap-2 justify-end">
          <router-link
            v-if="!isLoggedIn"
            class="transition-all duration-300 text-slate-800 bg-gray-100 font-bold text-sm py-2 px-6 rounded-full cursor-pointer dragging-disable hover:bg-gray-200"
            :to="{ path: '/login', query: { menuId: 'LOGIN' } }"
          >
            {{ isLoggedIn ? 'LOGOUT' : 'LOGIN' }}
          </router-link>
          <div v-else>
            <button
              ref="menuBtnRef2"
              class="flex items-center gap-2 text-slate-800 bg-gray-100 font-bold text-sm py-2 px-4 rounded-full cursor-pointer dragging-disable"
              aria-label="메뉴"
              @click="toggleMobileMenu"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <span>{{ session.user?.name || '사용자' }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- MOBILE -->
      <div class="layout-mobile flex justify-between items-center h-12">
        <router-link :to="{path: '/', query: {menuId: 'HOME'}}">
          <span class="z-50 font-black text-slate-800 cursor-pointer text-lg md:text-3xl">4MS<span class="logo-dot text-teal-800">.</span></span>
        </router-link>
        <button
          ref="menuBtnRef1"
          class="bg-transparent border-none cursor-pointer text-slate-800"
          aria-label="메뉴"
          @click="toggleMobileMenu"
        >
          <svg class="w-6 h-6 menu-icon" :class="{ open: isMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

    <!-- 사이드 메뉴 음영 -->
    <teleport to="body">
      <transition name="fade">
        <div
          v-if="isMenuOpen"
          class="fixed top-0 left-0 w-full h-full bg-black/50 z-30"
          @click="closeMobileMenu"
        ></div>
      </transition>
    </teleport>

    <!-- 사이드 메뉴 -->
    <div
      ref="sideMenuRef"
      class="fixed left-0 top-0 w-[75dvw] max-w-80 h-[calc(100dvh)] bg-white backdrop-blur-[10px] shadow-lg border-r border-gray-200 transition-transform duration-300 z-40"
      :style="{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)' }"
    >
      <div class="px-6 pt-6 pb-4 border-b-1 border-slate-200">
        <router-link
          v-if="!session.checkState()"
          class="flex items-center text-slate-700 font-bold text-sm py-2 cursor-pointer hover:text-teal-600 dragging-disable"
          :to="{path: '/login', query: {menuId: 'LOGIN'}}"
          @click="closeMobileMenu"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          <span>LOGIN</span>
        </router-link>
        <div
          v-else
          class="flex items-center text-slate-700 font-bold text-sm py-2 cursor-pointer hover:text-teal-600 dragging-disable"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          <span>{{ session.user.name }}</span>
        </div>
      </div>

      <div class="overflow-y-auto h-[calc(100dvh-78px)]">

        <!-- 직원용 메뉴 -->
        <div class="px-6 bg-slate-50 border-b-1 border-slate-200">
          <div class="w-full pt-4" v-if="employeesMenuList.length > 0" />
          <MenuGroup
            v-for="group in employeesMenuList"
            :key="group.id"
            :group="group"
            :active-group="activeGroup"
            :toggle-group="toggleGroup"
            :close-mobile-menu="closeMobileMenu"
            :path="'/employees'"
            text-class="text-slate-800"
            border-class="border-b border-slate-300"
          />
        </div>



        <!-- 공용 메뉴 -->
        <nav class="flex flex-col pt-4 pb-4 px-6">
          <MenuGroup
            v-for="group in publicMenuList"
            :key="group.id"
            :group="group"
            :active-group="activeGroup"
            :toggle-group="toggleGroup"
            :close-mobile-menu="closeMobileMenu"
            :path="'/'"
            text-class="text-slate-700"
            border-class="border-b border-slate-200"
          />
        </nav>
      </div>
      </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { publicMenuList, employeesMenuList } from '@/router/menu.js'
import { userStore } from '@/store/pinia.store.js'
import MenuGroup from './MenuGroup.vue'

const session = userStore();

// Computed
const isLoggedIn = computed(() => session.checkState())

// 모바일 메뉴 상태 변수
const isMenuOpen = ref(false)

// 활성 그룹 상태
const activeGroup = ref([])

const sideMenuRef = ref(null);
const menuBtnRef1 = ref(null);
const menuBtnRef2 = ref(null);

// 모바일 메뉴 토글 함수
const toggleMobileMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    activeGroup.value = [];
    document.documentElement.classList.add('stop-scroll');
  } else {
    document.documentElement.classList.remove('stop-scroll');
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

// 메뉴 닫기 함수
const closeMobileMenu = () => {
  isMenuOpen.value = false;
  activeGroup.value = [];
  document.documentElement.classList.remove('stop-scroll');
}

// 외부 클릭 감지
const handleClickOutside = (event) => {
  if (!isMenuOpen.value) return;
  const target = event.target;

  // 메뉴가 열려있고, 클릭한 대상이 모바일 메뉴나 메뉴 버튼이 아닐 때 메뉴 닫기
  if (
    sideMenuRef.value &&
    !sideMenuRef.value.contains(target) &&
    menuBtnRef1.value &&
    !menuBtnRef1.value.contains(target) &&
    menuBtnRef2.value &&
    !menuBtnRef2.value.contains(target)
  ) {
    closeMobileMenu();
  }
}

// 렌더링후 외부 클릭 이벤트 등록 및 해제
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
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

.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s linear;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 500px;
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
