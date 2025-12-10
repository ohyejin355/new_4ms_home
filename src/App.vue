<script setup>
  import { inject } from 'vue';
  import menu from './router/menu.js';
  import Footer from './components/Footer.vue';
  import Header from './components/Header.vue';

  menu.setup();
  const currentSubMenu = inject('currentSubMenu');
</script>

<template>
  <div id="app" class="app-wrapper">
    <Header />
    <div class="content">
      <router-view :name="currentSubMenu.componentName" v-slot="{ Component }">
        <!-- TO-DO: include에는 캐싱할 컴포넌트의 이름 입력 (router/index.js; router.routes.components.name) 추후 수정 필요 -->
        <keep-alive include="business,solution,dev,maintenance">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <Footer />
  </div>
</template>

<style>
@import './css/reset.css';
@import './css/common.css';

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>
