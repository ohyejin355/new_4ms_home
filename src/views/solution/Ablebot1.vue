<script setup>
import { ref } from 'vue'

// 테이블 데이터 정의
const featureList = ref([
  {
    category: '시각 이해 Vision',
    desc: '이미지와 비디오를 분석-이해하고, 사람처럼 해석할 수 있습니다.',
  },
  {
    category: '음성 이해 Speech',
    desc: '고객의 음성, 단어, 문장을 식별하고, 의도를 이해함으로써 고객의 의견을 듣고 대화할 수 있습니다.',
  },
  {
    category: '텍스트 이해 Language',
    desc: '텍스트를 처리하고 고객이 원하는 것을, 인식하는 방법을 스스로 학습합니다.',
  },
  {
    category: '빅데이터 연동 Knowledge',
    desc: '이미지와 비디오를 분석-이해하고, 사람처럼 해석할 수 있습니다.',
  },
  {
    category: '시각 이해 Vision', // 원본 데이터 유지 (중복된 항목이 있는 경우 확인 필요)
    desc: 'Web, 학계, 고객 및 자신의 데이터에서 축적된 빅데이터를 연동하여 활용합니다.',
  },
  {
    category: '인터넷 검색 Search',
    desc: '검색엔진 API의 강력한 기능을 통해 수십억 개의 웹 페이지, 이미지, 비디오 및 뉴스를 연동할 수 있습니다.',
  },
])
</script>

<template>
  <div class="understand-page">
    <section class="section">
      <div class="wrapper">
        <div class="understand-content">
          <p class="intro-text">
            AI 는 ‘자연어처리기능’과 ‘자체학습기능’ 두 가지의 핵심 기능으로 구성되어 있습니다.
            기업의 기존 시스템에 적용될 수 있도록 두 가지의 핵심 기능이 패키지화된 것을 AI엔진이라
            하며, 이러한 엔진이 효과적으로 적용 및 구동될 때에 진정한 의미의 AI라 할 수 있습니다.
          </p>

          <div class="img-wrapper">
            <img src="/image/sub/sol_01_01_img.png" alt="AI Core Functions" />
          </div>

          <div class="table-container">
            <table class="feature-table">
              <tbody>
                <tr v-for="(item, index) in featureList" :key="index">
                  <th>{{ item.category }}</th>
                  <td>{{ item.desc }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* =========================================
   1. Layout & Content
   ========================================= */
.understand-content {
  max-width: 56rem;
  margin: 0 auto;
}

.intro-text {
  color: #334155;
  line-height: 1.7;
  margin-bottom: 3rem;
  white-space: pre-line;
  font-size: 1.125rem;
}

@media (max-width: 768px) {
  .intro-text {
    font-size: 1rem;
  }
}

/* =========================================
   2. Image
   ========================================= */
.img-wrapper {
  margin: 3rem auto;
  text-align: center;
}

.img-wrapper img {
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  height: auto;
}

/* =========================================
   3. Table Styles
   ========================================= */
.table-container {
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.feature-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  table-layout: fixed;
}

.feature-table th,
.feature-table td {
  padding: 1.25rem; /* p-5 */
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
  border-right: 1px solid #e2e8f0;
  font-size: 1rem;
  vertical-align: middle;
}

/* 마지막 행, 마지막 열 보더 제거 */
.feature-table tr:last-child th,
.feature-table tr:last-child td {
  border-bottom: none;
}
.feature-table tr td:last-child {
  border-right: none;
}

/* 헤더 스타일 */
.feature-table th {
  background-color: #f8fafc; /* slate-50 */
  color: #0f172a; /* slate-900 */
  font-weight: 600;
  width: 30%; /* PC 기준 너비 */
}

.feature-table td {
  color: #334155; /* slate-700 */
  width: 70%;
  line-height: 1.5;
}

/* 반응형 테이블 */
@media (max-width: 768px) {
  .feature-table th {
    width: 35%;
    font-size: 0.875rem;
    padding: 1rem;
    word-break: keep-all;
  }
  .feature-table td {
    width: 65%;
    font-size: 0.875rem;
    padding: 1rem;
  }
}
</style>