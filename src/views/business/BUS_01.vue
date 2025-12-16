<script setup>
import { ref } from 'vue'

// 1. Consulting 데이터
const consultingItems = ref([
  {
    title: '유통/물류 부문',
    desc: '고객의 비즈니스 환경에 최적화된 유통/물류 시스템 구축을\n위한 전문 컨설팅을 제공합니다.',
    imgSrc: '/image/sub/sol_01_01_img.png',
  },
  {
    title: '자동차(트럭) 부문',
    desc: '상용차 및 특장차 분야의 특화된 노하우를 바탕으로 프로세스 개선 및 시스템 설계를 지원합니다.',
    imgSrc: '/image/sub/sol_02_01_img.png',
  },
  {
    title: '축산낙농 부문',
    desc: '생산부터 유통까지, 축산낙농 분야의 복잡한 데이터를 통합\n관리하는 효율적인 방안을 제시합니다.',
    imgSrc: '/image/sub/sol_04_01_img.png',
  },
])

// 2. System Development 데이터
const systemItems = ref([
  {
    title: '경영 부문',
    desc: '기업의 핵심 자원(ERP) 및 고객 관계(CRM) 관리를 위한 맞춤형 시스템을\n개발합니다.',
    imgSrc: '/image/sub/pro_logo_01.png',
  },
  {
    title: '공공 부문',
    desc: '투명하고 효율적인 대국민 서비스를 위한 공공 정보 시스템을 구축합니다.',
    imgSrc: '/image/sub/pro_logo_02.png',
  },
  {
    title: '제조 부문',
    desc: '생산관리시스템(MES) 및 품질 관리 시스템을 제공하여 생산 공정의 효율을 극대화합니다.',
    imgSrc: '/image/sub/pro_logo_03.png',
  },
  {
    title: '유통 부문',
    desc: '재고·주문·배송을 실시간으로 관리하는 통합 유통 플랫폼을 개발합니다.',
    imgSrc: '/image/sub/pro_logo_04.png',
  },
  {
    title: '축산 부문',
    desc: '농가별 사육 환경, 출하 정보 등을 체계적으로 관리하는 스마트 축산 시스템을 구현합니다.',
    imgSrc: '/image/sub/pro_logo_05.png',
  },
])

// 3. Web Service 데이터
const webItems = ref([
  {
    title: '응용 소프트웨어 개발',
    desc: '다양한 산업 분야에 필요한 특정 목적의 데스크톱 및 웹 기반\n응용 프로그램을 개발합니다.',
    imgSrc: '/image/sub/sol_06_01_img.png',
  },
  {
    title: 'WebSite',
    desc: '기업의 정체성을 담은 반응형 웹사이트를 구축하여 효과적인\n온라인 홍보를 지원합니다.',
    imgSrc: '/image/sub/sol_06_02_img.png',
  },
  {
    title: 'B2B/B2C',
    desc: '안정적이고 확장 가능한 B2B 및 B2C E-커머스 플랫폼을\n제공합니다.',
    imgSrc: '/image/sub/sol_07_01_img.png',
  },
])

// 4. Maintenance 데이터
const maintenanceItems = ref([
  {
    title: '소프트웨어 운영지원',
    desc: '개발된 시스템이 최적의 성능을 유지하도록\n지속적인 모니터링과 업데이트를 지원합니다.',
    imgSrc: '/image/sub/sol_07_02_img.png',
  },
  {
    title: '시스템 운영',
    desc: 'IT 인프라 전반에 대한 24/7 운영 및 관리로 비즈니스의\n연속성을 보장합니다.',
    imgSrc: '/image/sub/sol_07_03_img.png',
  },
  {
    title: '고객지원',
    desc: '시스템 사용 중 발생하는 모든 기술적 문의와 문제에 대해\n신속하고 정확하게 지원합니다.',
    imgSrc: '/image/sub/pro_logo_09.png',
  },
])
</script>

<template>
  <div class="business-page">
    <section class="section">
      <div class="wrapper">
        <div class="page-header text-center">
          <h2 class="page-title">사업영역</h2>
          <p class="page-desc">현장 경험을 바탕으로 고객 비즈니스에 최적화된 IT 솔루션 제공</p>
        </div>

        <div class="intro-box">
          <p class="intro-text">
            주식회사 포엠에스는 급변하는 IT기술 및 인프라 환경에 안정적인 서비스를 제공합니다.
          </p>
        </div>

        <div class="business-list">
          <div class="biz-group">
            <h3 class="biz-group-title">CONSULTING (컨설팅)</h3>
            <div class="biz-grid grid-3">
              <div v-for="item in consultingItems" :key="item.title" class="biz-card">
                <div class="card-icon">
                  <img :src="item.imgSrc" :alt="item.title" />
                </div>
                <h4 class="card-title">{{ item.title }}</h4>
                <p class="card-desc">{{ item.desc }}</p>
              </div>
            </div>
          </div>

          <div class="biz-group">
            <h3 class="biz-group-title">SYSTEM DEVELOPMENT (시스템 개발)</h3>
            <div class="biz-grid grid-5">
              <div v-for="item in systemItems" :key="item.title" class="biz-card">
                <div class="card-icon small-icon">
                  <img :src="item.imgSrc" :alt="item.title" />
                </div>
                <h4 class="card-title">{{ item.title }}</h4>
                <p class="card-desc">{{ item.desc }}</p>
              </div>
            </div>
          </div>

          <div class="biz-group">
            <h3 class="biz-group-title">WEB SERVICE (웹서비스)</h3>
            <div class="biz-grid grid-3">
              <div v-for="item in webItems" :key="item.title" class="biz-card">
                <div class="card-icon">
                  <img :src="item.imgSrc" :alt="item.title" />
                </div>
                <h4 class="card-title">{{ item.title }}</h4>
                <p class="card-desc">{{ item.desc }}</p>
              </div>
            </div>
          </div>

          <div class="biz-group">
            <h3 class="biz-group-title">MAINTENANCE (유지보수)</h3>
            <div class="biz-grid grid-3">
              <div v-for="item in maintenanceItems" :key="item.title" class="biz-card">
                <div class="card-icon">
                  <img :src="item.imgSrc" :alt="item.title" />
                </div>
                <h4 class="card-title">{{ item.title }}</h4>
                <p class="card-desc">{{ item.desc }}</p>
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
   Page Specific Content
   (공통에 없는 이 페이지 전용 스타일)
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
  background-color: #f1f5f9; /* slate-100 */
  padding: 3rem;
  border-radius: 0.5rem;
  border-left: 4px solid #0d9488; /* teal-600 */
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

/* =========================================
   Business Lists & Grid (이 페이지 전용)
   ========================================= */
.business-list {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.biz-group-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 2rem;
}

.biz-grid {
  display: grid;
  gap: 2rem;
}

/* Grid Layouts */
.grid-3 {
  grid-template-columns: 1fr;
}
@media (min-width: 768px) {
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}

.grid-5 {
  grid-template-columns: 1fr;
}
@media (min-width: 640px) {
  .grid-5 {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .grid-5 {
    grid-template-columns: repeat(5, 1fr);
  }
}

/* Card Styles */
.biz-card {
  background-color: white;
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s;
  height: 100%;
}

.biz-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.card-icon {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
}

.card-icon img {
  height: 5rem;
}
.card-icon.small-icon img {
  height: 4rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.75rem;
}

.card-desc {
  color: #475569;
  line-height: 1.6;
  white-space: pre-line;
  font-size: 1rem;
}

.grid-5 .card-desc {
  font-size: 0.875rem;
}
</style>
