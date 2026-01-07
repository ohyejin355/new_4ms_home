<template>
  <div class="">
    <section class="section">
      <div class="wrapper">
        <div class="text-center mb-16">
          <h2
            class="text-[1.875rem]/[36px] font-black text-slate-900 mb-4 md:text-[2.25rem]/[36px] font-mont"
          >
            주요프로젝트
          </h2>
          <p class="text-[1.125rem]/[18px] text-slate-600">
            주식회사 포엠에스는 다양한 업무를 수행하고 있습니다.
          </p>
        </div>

        <div v-if="isDesktop" class="flex gap-2 flex-wrap mb-12 justify-center">
          <a
            class="text-slate-700 py-3 px-6 bg-slate-200 rounded-md cursor-pointer text-xs leading-4.5 hover:text-white hover:bg-teal-700 hover:shadow-lg aria-selected:text-white aria-selected:bg-teal-700 aria-selected:shadow-lg"
            v-for="year in uniqueYears"
            :key="year"
            :aria-selected="selectedYear === year"
            @click="onSelectYear(year)"
            >{{ year }}년</a
          >
        </div>

        <div class="flex">
          <div class="layout-pc font-bold text-[1.5rem] leading-8 w-1/6 text-slate-800">
            {{ selectedYear }}
          </div>
          <div
            class="flex flex-col gap-6 w-full md:pl-8 md:border-l-2 md:border-slate-200 md:w-5/6"
          >
            <div
              v-for="project in isDesktop ? projectsByYear : visibleProject"
              :key="project.year + project.month + project.partner + project.name"
              class="border-b border-slate-200 gap-4 items-center pb-4 md:grid md:grid-cols-12"
            >
              <p class="text-slate-500 font-medium text-sm leading-5 md:col-span-2">
                {{ project.year }}.{{ project.month }}
              </p>
              <p
                class="text-slate-800 leading-7 font-semibold md:text-base md:leading-6 md:col-span-4"
              >
                {{ project.partner }}
              </p>
              <h3 class="leading-4.5 text-[14px] text-slate-600 md:col-span-6">
                {{ project.name }}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <TriggerComponent v-if="!isDesktop" @trigger="loadMoreProjects" />
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import Projects from './temp_projects.js'
import TriggerComponent from './TriggerComponent.vue'

const years = Projects.value.map((project) => project.year)
const uniqueYears = [...new Set(years)].sort((a, b) => b - a)
const selectedYear = ref(uniqueYears[0])
const projectsByYear = ref(Projects.value.filter((project) => project.year === selectedYear.value))

// 선택한 연도에 따라 필터링
const onSelectYear = (year) => {
  selectedYear.value = year
  projectsByYear.value = Projects.value.filter((project) => project.year === year)
}

// ---무한 스크롤 관련(모바일)---
const isDesktop = ref(false)
const currentMobileYearIndex = ref(0)

const updateWidth = () => {
  isDesktop.value = window.innerWidth >= 1024
}

onMounted(() => {
  updateWidth()
  window.addEventListener('resize', updateWidth)
})

// 메모리 정리
onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})

const visibleProject = computed(() => {
  if (!isDesktop.value) {
    const visibleYears = uniqueYears.slice(0, currentMobileYearIndex.value + 1)
    return Projects.value.filter((p) => visibleYears.includes(p.year))
  }
})

// 화면에서 트리거 보여지면 실행되는 함수
const loadMoreProjects = () => {
  if (currentMobileYearIndex.value >= uniqueYears.length - 1) return
  currentMobileYearIndex.value += 1
}
</script>
