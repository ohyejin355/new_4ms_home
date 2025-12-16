<script setup>
import { ref } from 'vue'

const effectCards = ref([
  {
    title: '새로운 디지털환경 대응과\n서비스 개선',
    subtitle: '고객의 행동변화로 인한 Digital Traffic의 증가와 대응',
    list: [
      '비대면채널에서의 고객만족도 향상',
      '맞춤 금융상품 추천을 통한 매출증진 기여',
      '새로운 채널에서의 고객 상호작용을 통한 신뢰 확보',
    ],
  },
  {
    title: '새로운 업무효율성과\n수익성 향상',
    subtitle: '방대한 Content/빅데이터에 대한 지식화 및 손쉬운 확장',
    list: [
      '내부 및 외부지식에 대한 손쉬운 접근을 통해 업무효율성 향상',
      '인력의 세대교체 = 지적자산의 효율적 관리',
      '운영업무 Risk 감소 및 관리',
    ],
  },
  {
    title: '프로세스의 자동화와\n업무연속성 향상',
    subtitle: 'IT–Human 프로세스의 업무분절을 최소화',
    list: [
      '단순반복적인 일상업무를 최소화, 업무의 생산성 제고',
      '24시간 고객응대율을 향상',
      'Risk 관리',
    ],
  },
])
</script>

<template>
  <div class="effect-page">
    <section class="section">
      <div class="wrapper">
        <div class="effect-content">
          <p class="intro-text">
            대부분의 선도기업들이 AI도입을 서두르는 이유는 ‘새로운 디지털환경에서의 적극적인
            대응과 경쟁업종보다 빠른 비즈니스의 변화 방향성과 기회 발굴’에 그 목적이 있으며,
            실제로 이러한 노력들은 기업의 경쟁력에서 차이를 만들어내고 있습니다.
          </p>

          

          <div class="card-grid">
            <div v-for="(card, index) in effectCards" :key="index" class="card">
              <div class="card-header">
                <h3>{{ card.title }}</h3>
              </div>
              <div class="card-body">
                <p class="card-subtitle">{{ card.subtitle }}</p>
                <ul class="card-list">
                  <li v-for="item in card.list" :key="item">{{ item }}</li>
                </ul>
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
.effect-content {
  max-width: 64rem; /* max-w-5xl (약 1024px) */
  margin: 0 auto;
}

.intro-text {
  color: #334155; /* slate-700 */
  line-height: 1.625;
  margin-bottom: 3rem;
  text-align: center;
  white-space: pre-line;
  font-size: 1.125rem;
}

/* =========================================
   2. Card Grid
   ========================================= */
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* =========================================
   3. Card Component
   ========================================= */
.card {
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background-color: #ffffff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card-header {
  padding: 1.5rem; /* p-6 */
  background-color: #f1f5f9; /* slate-100 */
  text-align: center;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 5rem; /* 헤더 높이 통일감 부여 */
}

.card-header h3 {
  font-weight: 700;
  margin: 0;
  font-size: 1.125rem; /* text-lg */
  line-height: 1.5;
  color: #0f172a;
  white-space: pre-line; /* 줄바꿈(\n) 적용 */
}

.card-body {
  padding: 1.5rem;
  flex-grow: 1;
}

.card-subtitle {
  font-weight: 600;
  margin-bottom: 1rem;
  color: #0f172a;
  font-size: 1rem;
  line-height: 1.4;
}

.card-list {
  list-style-type: disc;
  list-style-position: inside;
  padding: 0;
  margin: 0;
  font-size: 0.875rem;
  color: #334155;
  line-height: 1.6;
}

.card-list li + li {
  margin-top: 0.25rem;
}
</style>