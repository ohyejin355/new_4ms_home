<template>
  <div class="mb-3">
    <button
      v-if="group.menu && group.menu.length > 0"
      class="w-full text-left font-bold text-sm py-3 px-2 rounded-md flex justify-between items-center transition-colors duration-200 active:bg-slate-100"
      :class="textClass"
      @click="toggleGroup(group.id)"
    >
      {{ group.engName }}
      <svg class="w-5 h-5 transition-transform duration-200 flex-shrink-0" :class="{ 'rotate-180': activeGroup.includes(group.id) }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
    <router-link
      v-else
      class="block font-bold text-sm py-3 px-2 rounded-md hover:text-teal-600 active:bg-slate-100 transition-colors duration-200"
      :class="textClass"
      :to="{path: path, query: {menuId: group.id}}"
      @click="closeMobileMenu"
    >
      {{ group.engName }}
    </router-link>

    <transition v-if="group.menu && group.menu.length > 0" name="slide">
      <div v-if="activeGroup.includes(group.id)" class="bg-slate-100 rounded-md p-3 space-y-3 overflow-hidden">
        <router-link
          v-for="item in group.menu"
          :key="item.id"
          class="block text-slate-600 font-medium text-sm py-2 px-3 rounded-md hover:text-teal-600 active:bg-slate-100 transition-colors duration-200"
          :to="{path: path, query: {menuId: item.id}}"
          @click="closeMobileMenu"
        >
          {{ item.name }}
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script setup>
defineProps({
  group: Object,
  activeGroup: Array,
  toggleGroup: Function,
  closeMobileMenu: Function,
  textClass: String,
  borderClass: String,
  path: String,
})
</script>
