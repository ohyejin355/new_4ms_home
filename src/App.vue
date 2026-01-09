<script setup>
import FooterComponent from './components/FooterComponent.vue'
import headerComponent from './components/HeaderComponent.vue'
import navigationComponent from './components/NavigationComponent.vue'
import { currentMenuId } from './router/menu.js'
import { useRoute } from 'vue-router'

const route = useRoute();
</script>

<template>
  <div id="app" class="app-wrapper">
    <!-- Header (GNB) -->
    <header-component />

    <!-- Navigation (LNB) -->
    <transition name="fade">
      <navigation-component v-if="route.path === '/' && currentMenuId !== 'HOME' && currentMenuId !== 'default'" />
    </transition>

    <!-- Content -->
    <router-view :name="currentMenuId" v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- Footer -->
    <transition name="fade">
      <FooterComponent v-if="route.path === '/'"/>
    </transition>
  </div>
</template>

<style>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
