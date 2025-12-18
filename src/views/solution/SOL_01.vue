<script setup>
import { ref } from 'vue'

import Ablebot1 from './Ablebot1.vue'
import Ablebot2 from './Ablebot2.vue'
import Ablebot3 from './Ablebot3.vue'
import Ablebot4 from './Ablebot4.vue'
import Ablebot5 from './Ablebot5.vue'

// 탭 상태 관리
const currentTab = ref('Ablebot1')
</script>

<template>
  <section class="solution-page">
    <section class="section">
      <div class="text-center mb-16">
        <h2
          class="text-[1.875rem]/[36px] font-black text-slate-900 mb-4 md:text-[2.25rem]/[36px] font-mont"
        >
          able bot
        </h2>
        <p class="text-[1.125rem]/[18px] text-slate-600">상황인지기반 챗봇</p>
      </div>
      <div class="tab-buttons">
        <button
          class="btn bg-slate-200 text-slate-700 hover:bg-slate-300"
          :class="{ 'bg-primary text-white': currentTab === 'Ablebot1' }"
          @click="currentTab = 'Ablebot1'"
        >
          이해
        </button>
        <button
          class="btn bg-slate-200 text-slate-700 hover:bg-slate-300"
          :class="{ 'bg-primary text-white': currentTab === 'Ablebot2' }"
          @click="currentTab = 'Ablebot2'"
        >
          유형
        </button>
        <button
          class="btn bg-slate-200 text-slate-700 hover:bg-slate-300"
          :class="{ 'bg-primary text-white': currentTab === 'Ablebot3' }"
          @click="currentTab = 'Ablebot3'"
        >
          기능
        </button>
        <button
          class="btn bg-slate-200 text-slate-700 hover:bg-slate-300"
          :class="{ 'bg-primary text-white': currentTab === 'Ablebot4' }"
          @click="currentTab = 'Ablebot4'"
        >
          적용
        </button>
        <button
          class="btn bg-slate-200 text-slate-700 hover:bg-slate-300"
          :class="{ 'bg-primary text-white': currentTab === 'Ablebot5' }"
          @click="currentTab = 'Ablebot5'"
        >
          기대효과
        </button>
      </div>

      <div class="tab-content">
        <Ablebot1 v-if="currentTab === 'Ablebot1'" />

        <Ablebot2 v-if="currentTab === 'Ablebot2'" />

        <Ablebot3 v-if="currentTab === 'Ablebot3'" />

        <Ablebot4 v-if="currentTab === 'Ablebot4'" />

        <Ablebot5 v-if="currentTab === 'Ablebot5'" />
      </div>
    </section>
  </section>
</template>

<style>
.tab-buttons {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}
.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s;
  cursor: pointer;
}
.btn-primary {
  background-color: #2563eb;
  color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
/* 페이지 타이틀 */
.page-title {
  text-align: center;
  margin-bottom: 4rem;
}

.page-title p {
  font-size: 1.125rem;
  color: #334155;
}

.solution-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
