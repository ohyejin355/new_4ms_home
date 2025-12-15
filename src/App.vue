<script setup>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Tab from './components/Tab.vue'
import { menu, currentSubMenu, getMenu, createMenuRoute } from './router/menu';
import { useRouter } from 'vue-router'

// fetch menu
menu.value = getMenu();

// add menu to router
const router = useRouter();
createMenuRoute().forEach(r => router.addRoute(r));
</script>

<template>
  <div id="app" class="app-wrapper">
    <Header />
    <Tab v-if="typeof currentSubMenu.name != 'undefined' /*$route.path != '/'*/"/>
    <div class="content">
      <router-view :name="currentSubMenu.componentName" v-slot="{ Component }">
        <keep-alive>
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
