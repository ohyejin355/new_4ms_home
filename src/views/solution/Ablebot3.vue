<script setup>
import { ref } from 'vue'

// 1. 인지 서비스 데이터
const serviceList = ref([
  {
    title: 'Vision (비젼 서비스)',
    items: ['Computer Vision', 'Content Moderator', 'Emotion', 'Face', 'Video'],
  },
  {
    title: 'Speech (스피치 서비스)',
    items: ['Bing Speech', 'Custom Speech Service', 'Speaker Recognition'],
  },
  {
    title: 'Language (언어 서비스)',
    items: [
      'Bing Spell Check',
      'Language Understanding',
      'Linguistic Analysis',
      'Text Analysis',
      'Translator',
      'WebLM',
    ],
  },
  {
    title: 'Knowledge (지식 서비스)',
    items: ['Academic', 'Entity Linking', 'Knowledge Exploration', 'QnA Maker', 'Recommendations'],
  },
  {
    title: 'Search (검색 서비스)',
    items: [
      'Bing Autosuggest',
      'Bing Image Search',
      'Bing News Search',
      'Bing Video Search',
      'Bing Web Search',
    ],
  },
])

// 2. 주요 특징 데이터
const featureList = ref([
  'REST API를 사용한 손쉬운 자산화',
  '사용자가 선택한 플랫폼과\n언어에 손쉽게 통합됨',
  'MS Research의 최고 전문가들에 의해\n만들어지고 검증됨',
  '추가하기 쉬움: 몇 줄의 코드만으로\n서비스 추가 가능',
  '광범위한 API 제공이 사용자 App에\n알맞는 기능을 제공',
  '완전한 설명, 예제 및 커뮤니티로부터\n지원 받을 수 있음',
])
</script>

<template>
  <div class="function-page">
    <section class="section">
      <div class="wrapper">
        <div class="function-content">
          <p class="intro-text">
            AI에서 제공되는 인지서비스(Cognitive Service)를 통해 고객과의 다양한 인터페이스 및
            상호작용이 가능합니다.
          </p>

          <div class="service-grid">
            <div v-for="service in serviceList" :key="service.title" class="service-card">
              <div class="card-header">
                <h3>{{ service.title }}</h3>
              </div>
              <ul class="card-list">
                <li v-for="item in service.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>

          <p class="note-text">※ 서비스 제공(Platform as a Service)을 위한 API 집합</p>

          <div class="feature-grid-wrapper">
            <div class="feature-grid">
              <div v-for="(feature, index) in featureList" :key="index" class="feature-item">
                {{ feature }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* =========================================
   1. Layout & Text
   ========================================= */
.function-content {
  max-width: 72rem; /* max-w-6xl (약 1152px) */
  margin: 0 auto;
}

.intro-text {
  color: #334155; /* slate-700 */
  line-height: 1.6;
  margin-bottom: 2rem;
  white-space: pre-line;
  font-size: 1.125rem;
}

.note-text {
  font-size: 0.875rem;
  color: #64748b; /* slate-500 */
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 1rem;
}

/* =========================================
   2. Service Grid (5 Columns)
   ========================================= */
.service-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

@media (min-width: 640px) {
  .service-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .service-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

.service-card {
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}

.card-header {
  padding: 1rem;
  background-color: #f1f5f9; /* slate-100 */
  text-align: center;
  border-bottom: 1px solid #e2e8f0;
}

.card-header h3 {
  font-weight: 700;
  margin: 0;
  font-size: 1rem;
  color: #0f172a;
}

.card-list {
  padding: 1rem;
  margin: 0;
  list-style: none;
  font-size: 0.875rem;
  color: #334155;
  flex-grow: 1; /* 카드 높이 맞춤 */
}

.card-list li {
  margin-bottom: 0.25rem;
}

/* =========================================
   3. Feature Grid (3 Columns)
   ========================================= */
.feature-grid-wrapper {
  border: 1px solid #cbd5e1; /* slate-300 */
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #cbd5e1; /* Gap Color */
}

.feature-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px; /* 격자 선 효과 */
}

@media (min-width: 768px) {
  .feature-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-item {
  background-color: #ffffff;
  padding: 1.5rem 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #334155;
  line-height: 1.5;
  font-size: 1rem;
  white-space: pre-line;
  min-height: 5rem;
}
</style>
