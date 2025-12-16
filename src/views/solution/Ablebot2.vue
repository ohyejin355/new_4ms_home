<script setup>
import { ref } from 'vue'

// 챗봇 유형 데이터 (자연어 처리 기반 vs 룰 기반)
const botTypes = ref([
  {
    title: '자연어 처리 기반',
    pros: [
      '사용자의 의도(Intent)를 유연하게 판단',
      '데이터 축적에 따른 지속적 품질 향상',
      '유지보수/관리 노력의 점진적 감소',
      '새로운 질문에도 딥러닝에 따른 답변이 가능',
    ],
    cons: [
      '엔진에 따른 품질 편차',
      '초기 학습 및 구축 비용, 학습기간의 오류 확률',
      '초기 안정화 기간의 오류 발생',
      '딥러닝의 물리적 시간이 필요함',
    ],
  },
  {
    title: '룰 기반',
    pros: [
      '비교적 단순한 구축 형태',
      '모델에 대한 직관적 이해 가능',
      '사용자 의도(Intent)가 소수일 경우 정확도 향상',
      '오류의 원인을 정확히 알 수 있음',
    ],
    cons: [
      '새로운 사용자 의도(Intent) 인지 능력의 한계',
      '메시지가 정확하게 일치하지 않으면 오류 발생',
      '표현이 다양한 언어에서, 기하급수적인 예문 증가',
      '오류 수정을 위한 지속적인 유지보수 필요',
    ],
  },
])
</script>

<template>
  <div class="bot-type-page">
    <section class="section">
      <div class="wrapper">
        <div class="type-content">
          <p class="intro-text">
            국내 금융권 챗봇은 ‘자연어처리기반’과 ‘정해진 룰 기반’ 두 가지 케이스로 운영되고
            있습니다. 룰 기반 챗봇은 자연어 인지 기능이 없기에 운영자가 지속적으로 룰을 추가하는
            방식으로 한계가 있으며, 자연어처리기반과의 차이점을 이해하는 것이 반드시 필요합니다.
          </p>
          
          

          <div class="img-wrapper">
            <img src="/image/sub/sol_02_01_img.png" alt="Chatbot types" />
          </div>

          <div class="comparison-grid">
            <div v-for="type in botTypes" :key="type.title" class="comparison-box">
              <h3 class="box-title">{{ type.title }}</h3>

              <div class="section-block">
                <h4 class="section-label">장점</h4>
                <ul class="list-dots">
                  <li v-for="pro in type.pros" :key="pro">{{ pro }}</li>
                </ul>
              </div>

              <div class="section-block">
                <h4 class="section-label">단점</h4>
                <ul class="list-dots">
                  <li v-for="con in type.cons" :key="con">{{ con }}</li>
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
   1. Content Layout
   ========================================= */
.type-content {
  max-width: 64rem; /* max-w-5xl (약 1024px) */
  margin: 0 auto;
}

.intro-text {
  color: #334155; /* slate-700 */
  line-height: 1.6;
  margin-bottom: 2rem;
  white-space: pre-line;
  font-size: 1.125rem;
}

/* =========================================
   2. Image Wrapper
   ========================================= */
.img-wrapper {
  margin: 2rem auto;
  text-align: center;
}

.img-wrapper img {
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  height: auto;
}

/* =========================================
   3. Comparison Grid & Box
   ========================================= */
.comparison-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .comparison-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.comparison-box {
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1.5rem;
  background-color: #ffffff;
  height: 100%; /* 높이 맞춤 */
}

.box-title {
  font-size: 1.25rem; /* text-xl */
  font-weight: 700;
  text-align: center;
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #0f172a;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

/* =========================================
   4. Section Block (Pros/Cons)
   ========================================= */
.section-block {
  margin-bottom: 1.5rem;
}

.section-block:last-child {
  margin-bottom: 0;
}

.section-label {
  background-color: #f1f5f9; /* slate-100 */
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  color: #0f172a;
  display: inline-block;
}


/* List Styles */
.list-dots {
  list-style-type: disc;
  list-style-position: inside;
  padding: 0.5rem;
  margin: 0;
  font-size: 0.95rem;
  color: #334155;
  line-height: 1.6;
}

.list-dots li + li {
  margin-top: 0.25rem;
}
</style>