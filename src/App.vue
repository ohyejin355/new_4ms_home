<script setup>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Tab from './components/Tab.vue'
import { currentSubMenu } from './router/menu'
</script>

<template>
  <div id="app" class="app-wrapper">
    <Header />
    <Tab v-if="typeof currentSubMenu.name != 'undefined' /*$route.path != '/'*/" />
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
