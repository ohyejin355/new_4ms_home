<script setup>
import { ref } from 'vue'

const processSteps = ref([
  { title: '사용자 요구사항', eng: 'Requirement' },
  { title: '계획 및 분석', eng: 'Planning & Analysis' },
  { title: '설계', eng: 'Architecture' },
  { title: '개발 및 구축', eng: 'Development & Customizing' },
  { title: '시험 및 운영', eng: 'Test & Implement' },
  { title: '유지보수', eng: 'Maintenance' },
])

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
            
            <div class="center-line"></div>

            <div class="step-list">
              <div v-for="(step, index) in processSteps" :key="index" class="step-card">
                <h4 class="step-title">{{ step.title }}</h4>
                <p class="step-eng">{{ step.eng }}</p>
                
                <div class="connector connector-left">
                  <div class="line"></div>
                  <div class="dot"></div>
                </div>
              </div>
            </div>

            <div class="service-list">
              <div v-for="(service, index) in serviceList" :key="index" class="service-card">
                <p class="service-text">{{ service }}</p>
                
                <div class="connector connector-right">
                  <div class="line"></div>
                  <div class="dot"></div>
                </div>
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
.wrapper { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
.text-center { text-align: center; }
.section { padding: 4rem 0; }
@media (min-width: 768px) { .section { padding: 6rem 0; } }

/* =========================================
   2. Page Content
   ========================================= */
.page-header { margin-bottom: 4rem; }
.page-title { 
  font-size: 1.875rem;
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 1rem;
}
@media (min-width: 768px) { .page-title { font-size: 2.25rem; } }
.page-desc { font-size: 1.125rem; color: #475569; }

.intro-box {
  background-color: #f1f5f9;
  padding: 3rem;
  border-radius: 0.5rem;
  border-left: 4px solid #0d9488;
  margin-bottom: 4rem;
}
.intro-text { font-size: 1.25rem; font-weight: 600; color: #334155; line-height: 1.6; }
@media (min-width: 768px) { .intro-text { font-size: 1.5rem; } }

/* =========================================
   3. Process Section (반응형 적용)
   ========================================= */
.process-section {
  border-top: 1px solid #e2e8f0;
  padding-top: 4rem;
}

.section-subtitle {
  font-size: 1.5rem; font-weight: 700; color: #0f172a; margin-bottom: 3rem;
}

/* --- [Mobile Layout] 기본값 (1024px 미만) --- */
.process-layout {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-left: 2.5rem; /* 왼쪽에 선이 들어갈 공간 확보 */
}

/* 수직선: 모바일에서는 왼쪽에 위치 */
.center-line {
  position: absolute;
  left: 0; 
  top: 1rem;
  bottom: 1rem;
  width: 1px;
  background-color: #cbd5e1;
  z-index: 0;
}

/* 컬럼 공통 스타일 */
.step-list, .service-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* 카드 공통 스타일 */
.step-card, .service-card {
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: relative; /* 커넥터 기준점 */
  z-index: 1;
}

.step-card {
  background-color: white;
  border: 1px solid #f1f5f9;
}
.service-card {
  background-color: #e2e8f0;
  min-height: auto; /* 모바일에서는 자동 높이 */
}

/* 텍스트 스타일 */
.step-title { font-size: 1.125rem; font-weight: 700; color: #1e293b; margin-bottom: 0.25rem; }
.step-eng { font-size: 0.875rem; color: #64748b; }
.service-text { font-size: 1.125rem; font-weight: 600; color: #1e293b; margin: 0; }

/* --- [Connectors] 선과 점 (모바일 기본값: 왼쪽 연결) --- */
.connector {
  position: absolute;
  top: 50%;
  left: -2.5rem; /* 컨테이너 padding-left 값만큼 뻗음 */
  width: 2.5rem;
  height: 1px;
  z-index: -1;
}

.connector .line { width: 100%; height: 1px; background-color: #cbd5e1; }
.connector .dot {
  position: absolute;
  left: -6px; /* 선 시작점 */
  top: 50%;
  transform: translateY(-50%);
  width: 12px; height: 12px;
  background-color: #cbd5e1;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #ffffff;
}

/* =========================================
   4. [Desktop Layout] PC 화면 (1024px 이상)
   ========================================= */
@media (min-width: 1024px) {
  /* 2열 그리드 레이아웃 */
  .process-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    align-items: start;
    padding-left: 0;
  }

  /* 수직선: 중앙 배치 */
  .center-line {
    left: 50%;
    transform: translateX(-50%);
    top: 1.5rem;
    bottom: 1.5rem;
  }

  /* 오른쪽 리스트 엇박자 (Padding) */
  .service-list {
    padding-top: 5rem;
  }

  /* 카드 높이 고정 (중앙 정렬용) */
  .service-card {
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* --- 커넥터 위치 재정의 (PC) --- */
  
  /* 왼쪽 카드 커넥터: 오른쪽으로 뻗음 */
  .connector-left {
    left: auto; /* 모바일 설정 초기화 */
    right: -40px;
    width: 40px;
  }
  .connector-left .dot {
    left: auto; /* 모바일 설정 초기화 */
    right: -6px;
  }

  /* 오른쪽 카드 커넥터: 왼쪽으로 뻗음 */
  .connector-right {
    left: -40px;
    width: 40px;
  }
  .connector-right .dot {
    left: -6px;
  }
}
</style>