<script setup>
import FooterComponent from './components/FooterComponent.vue'
import headerComponent from './components/HeaderComponent.vue'
import navigationComponent from './components/NavigationComponent.vue'
import { currentSubMenu } from './router/menu'
</script>

<template>
  <div id="app" class="app-wrapper">
    <header-component />
    <transition name="fade">
      <navigation-component v-if="typeof currentSubMenu.name != 'undefined'" />
    </transition>
    <div class="content">
      <router-view :name="currentSubMenu.componentName" v-slot="{ Component, route }">
        <keep-alive>
          <transition name="fade">
            <component :is="Component" :key="route.path" />
          </transition>
        </keep-alive>
      </router-view>
    </div>
    <FooterComponent />
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

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
