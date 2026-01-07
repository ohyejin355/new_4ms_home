<template>
  <div ref="triggerElement" class="h-8 w-full"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['trigger'])

const triggerElement = ref(null)

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        emit('trigger')
      }
    },
    { threshold: 0.1 },
  ) // 10% 보일 때 트리거

  if (triggerElement.value) observer.observe(triggerElement.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
