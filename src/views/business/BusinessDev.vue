<script setup>
import { ref } from 'vue'

// 1. 개발 프로세스 단계 데이터
const processSteps = ref([
  { title: '사용자 요구사항', eng: 'Requirement' },
  { title: '계획 및 분석', eng: 'Planning & Analysis' },
  { title: '설계', eng: 'Architecture' },
  { title: '개발 및 구축', eng: 'Development & Customizing' },
  { title: '시험 및 운영', eng: 'Test & Implement' },
  { title: '유지보수', eng: 'Maintenance' },
])

// 2. 주요 서비스 목록 데이터
const serviceList = ref([
  '컨설팅 및 시스템 분석',
  '소프트웨어 및 하드웨어 장비 판매 및 설치',
  '패키지 / 소프트웨어 기반 시스템 개발',
  '고객 맞춤형 시스템 개발',
  '시스템 운영 및 통합유지보수',
])
</script>

<template>
  <div class="development-page">
    <div class="sub-visual">
      <div class="visual-bg" style="background-image: url('/image/sub/sub_visual_img_bg.png')">
        <div class="overlay">
          <div class="visual-content wrapper">
            <h1 class="visual-title">사업영역</h1>
          </div>
        </div>
      </div>

      <div class="sub-menu-bar">
        <div class="wrapper">
          <ul class="sub-menu-list">
            <li><router-link to="/business" class="sub-menu-link">사업영역</router-link></li>
            <li>
              <router-link to="/business/solution" class="sub-menu-link">솔루션</router-link>
            </li>
            <li>
              <router-link to="/business/dev" class="sub-menu-link active">SI개발</router-link>
            </li>
            <li>
              <router-link to="/business/maintenance" class="sub-menu-link">유지보수</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="wrapper">
        <div class="page-header text-center">
          <h2 class="page-title">SI개발</h2>
          <p class="page-desc">민간, 공공, 금융 등 다양한 사업분야 개발</p>
        </div>

        <div class="intro-box">
          <p class="intro-text">
            민간, 공공, 금융, 유통, 물류 등의 분야를 대상으로 고객이 필요로 하는 정보시스템을
            컨설팅, 계획, 설계, 개발, 구축 더 나아가서 관리 및 유지보수까지 고객의 환경에 가장
            적합한 맞춤형 통합 시스템을 제공합니다.
          </p>
        </div>

        <div class="process-section">
          <h3 class="section-subtitle text-center">DEVELOPMENT</h3>

          <div class="process-layout">
            <div class="step-list">
              <div v-for="(step, index) in processSteps" :key="index" class="step-card">
                <h4 class="step-title">{{ step.title }}</h4>
                <p class="step-eng">{{ step.eng }}</p>
              </div>
            </div>

            <div class="process-image pc-only">
              <img src="/image/sub/business_03_01.gif" alt="Development Process Flow" />
            </div>

            <div class="service-list">
              <div v-for="(service, index) in serviceList" :key="index" class="service-card">
                <p class="service-text">{{ service }}</p>
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
   1. Common & Layout
   ========================================= */
.wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.text-center {
  text-align: center;
}

.section {
  padding: 4rem 0;
  background-color: white;
}

@media (min-width: 768px) {
  .section {
    padding: 6rem 0;
  }
}

.pc-only {
  display: none;
}
@media (min-width: 1024px) {
  .pc-only {
    display: block;
  }
}

/* =========================================
   2. Sub Visual
   ========================================= */
.sub-visual {
  position: relative;
}

.visual-bg {
  position: relative;
  height: 300px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 768px) {
  .visual-bg {
    height: 400px;
  }
}

.overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  position: absolute;
  inset: 0;
  background-color: rgba(15, 23, 42, 0.6); /* slate-900 opacity-60 */
}

.visual-content {
  position: relative;
  z-index: 10;
  width: 100%;
  text-align: center;
}

.visual-title {
  color: white;
  font-size: 1.875rem;
  font-weight: 900;
}

@media (min-width: 768px) {
  .visual-title {
    font-size: 2.25rem;
  }
}

/* Sub Menu Bar */
.sub-menu-bar {
  background-color: white;
  border-bottom: 1px solid #e2e8f0;
}

.sub-menu-list {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.sub-menu-link {
  white-space: nowrap;
  display: block;
  padding: 1rem 2rem;
  font-weight: 600;
  color: #64748b;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
}

.sub-menu-link:hover,
.sub-menu-link.active {
  color: #0d9488;
  border-bottom-color: #0d9488;
}

/* =========================================
   3. Page Content
   ========================================= */
.page-header {
  margin-bottom: 4rem;
}

.page-title {
  font-size: 1.875rem;
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .page-title {
    font-size: 2.25rem;
  }
}

.page-desc {
  font-size: 1.125rem;
  color: #475569;
}

.intro-box {
  background-color: #f1f5f9;
  padding: 3rem;
  border-radius: 0.5rem;
  border-left: 4px solid #0d9488;
  margin-bottom: 4rem;
}

.intro-text {
  font-size: 1.25rem;
  font-weight: 600;
  color: #334155;
  line-height: 1.6;
}

@media (min-width: 768px) {
  .intro-text {
    font-size: 1.5rem;
  }
}

/* Process Section */
.process-section {
  border-top: 1px solid #e2e8f0;
  padding-top: 4rem;
}

.section-subtitle {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 3rem;
}

.process-layout {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}

@media (min-width: 1024px) {
  .process-layout {
    flex-direction: row;
    align-items: flex-start; /* 상단 정렬 */
    gap: 4rem;
  }
}

/* Step Cards (Left Column) */
.step-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
}

.step-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  text-align: center;
  border: 1px solid #f1f5f9;
}

.step-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.25rem;
}

.step-eng {
  font-size: 0.875rem;
  color: #64748b;
}

/* Service Cards (Right Column) */
.service-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
}

.service-card {
  background-color: #e2e8f0; /* slate-200 */
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.service-text {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
}

/* Process Image (Center) */
.process-image {
  flex-shrink: 0;
}

.process-image img {
  max-width: 100%;
  height: auto;
}
</style>
