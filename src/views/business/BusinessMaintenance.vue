<script setup>
// Truck Maintenance 데이터
const truckSystems = [
  {
    title: '본사 시스템',
    desc: '견적, 계약, 출하, Logistics, 생산관리, 무상 부품관리 등 볼보트럭코리아㈜의 전반적인 업무 처리',
  },
  {
    title: '고객관리 시스템',
    desc: '고객정보, 신차구입정보, 고객포인트정보, 판촉물 등의 업무를 처리하고 CRM 기초 정보를 관리하는 시스템',
  },
  { title: '양도증 발급관리', desc: '형식승인등록, 양도증 발급/미발급,\n조회 등의 업무를 처리' },
  { title: 'PDI(LOGISTIC)', desc: 'Order, 선적, 통관, 입고, 재고, 출고 의 업무를 처리' },
]

const truckKeywords = ['계약관리', '영업관리', '보고서관리', '채권관리', '재고관리', '고객관리']

// Pilot Maintenance 데이터
const pilotFeatures = [
  '도선예보 신청의 On-Line화 체계 구축',
  '협회의 e-business를 실현하고 부가수익을 창출 할 수 있는\n프로모션 기능',
  '최신 기술 적용(웹, 모바일, SMS기술)으로 프로세스의 개선 및\n인건비 절감',
  '협회, 선사, 대리점, 관련업체가 공유할 수 있는 정보이용 체계 완성',
  '대리점의 도선예보 신청서에 의한 모든 작업처리를 일원화',
  '항만의 특성 및 도선구간의 특성에 따라 유연한 도선 배정',
]

// FarmPlus 기능 목록
const farmFunctions = [
  { title: '기초자료관리:', desc: '코드등록, 거래처등록, 젖소등록' },
  { title: '번식관리:', desc: '번식관리, 번식사고관리' },
  {
    title: '분석관리:',
    desc: '번식효율지수, 육성우체중분석, 개체급여관리, 육성우 급여관리, TMR 보조 분석',
  },
  { title: '작업지시:', desc: '개체별 착유, 임신감정 질병관리 캘린더' },
  { title: '마감관리:', desc: '손익계산서, 수익성분석, 목장경영정보' },
  { title: '시스템관리:', desc: '시스템정보, 공통정보관리' },
]

const farmFeatures = [
  '사용자가 단독으로 운영할 수 있는 .NET기반의 시스템',
  '공통정보 및 코드, 성분 지료등을 효율적으로 관리',
  '한눈에 파악할 수 있는 각종 분석자료의 그래프 및 도표화',
  'Microsoft.NET Framework 채용',
]
</script>

<template>
  <div class="maintenance-page">
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
              <router-link to="/business/dev" class="sub-menu-link">SI개발</router-link>
            </li>
            <li>
              <router-link to="/business/maintenance" class="sub-menu-link active"
                >유지보수</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="wrapper">
        <div class="page-header text-center">
          <h2 class="page-title">SI운영</h2>
          <p class="page-desc">안정적으로 고객의 시스템을 관리 및 운영</p>
        </div>

        <div class="intro-box">
          <p class="intro-text">
            주식회사 포엠에스는 고객의 시스템 별로 각각 전담 인력을 배정하여 안정적으로 관리 및
            운영을 지원하고 있습니다.
          </p>
        </div>

        <div class="content-body">
          <div class="content-group">
            <h3 class="group-title">TRUCK MAINTENANCE</h3>
            <p class="group-desc">
              본사, 지점, 딜러들이 사용할 수 있도록 계약, 출하, 세금계산서 발행, 채권, 수금, 지로,
              마감 등 자동차(트럭)의 영업 전반에 걸친 업무처리를 C/S(Web)환경에서 통합 운영할 수
              있도록 개발한 시스템입니다.
            </p>

            <div class="grid-4 mb-8">
              <div v-for="sys in truckSystems" :key="sys.title" class="info-card">
                <h4 class="card-title text-center">{{ sys.title }}</h4>
                <p class="card-text text-center">{{ sys.desc }}</p>
              </div>
            </div>

            <div class="image-box center mb-8">
              <img src="/image/sub/business_04_01.png" alt="Truck System Logo" />
            </div>

            <div class="grid-3">
              <div v-for="keyword in truckKeywords" :key="keyword" class="keyword-box">
                {{ keyword }}
              </div>
            </div>
          </div>

          <div class="content-group">
            <h3 class="group-title">PILOT MAINTENANCE</h3>
            <p class="group-desc">
              도선사협회(지회)에서 사용하는 운영·관리시스템으로써 인터넷을 이용한 도선예보관리 및
              도선사배정, 협회와 선사·대리점간의 도선업무를 On-Line화 하여 구축한 시스템입니다.
              특히, 개발 초기단계부터 수행한 도선사 전문컨설팅을 기반으로 단 한번의 정보 등록으로도
              도선예보 처리, 배정처리, 청구, 세금계산서, 회계 처리까지 일원화된 DATA처리를 가능하게
              합니다.
            </p>

            <div class="grid-3 mb-8">
              <div v-for="(feat, index) in pilotFeatures" :key="index" class="info-card">
                <p class="card-text">{{ feat }}</p>
              </div>
            </div>

            <div class="flow-chart-box">
              <img src="/image/sub/business_04_04.png" alt="Arrow Down" class="arrow-img" />
              <img
                src="/image/sub/business_04_03.png"
                alt="Pilot System Flowchart"
                class="flow-img"
              />
            </div>
          </div>

          <div class="content-group">
            <h3 class="group-title">FARMPLUS MAINTENANCE</h3>
            <p class="group-desc">
              FarmPlus는 여러 사양가들의 젖소 개체번식관리, 검정관리, 분석관리 및 경영분석까지 모든
              자료를 데이터베이스로 통합하여 체계적인 관리를 할 수 있는 “종합낙농전산시스템”입니다.
            </p>

            <div class="flex-layout">
              <div class="flex-text">
                <div class="list-box mb-8">
                  <h4 class="list-title">주요기능</h4>
                  <ul class="bullet-list">
                    <li v-for="func in farmFunctions" :key="func.title">
                      <span class="bold">{{ func.title }}</span> {{ func.desc }}
                    </li>
                  </ul>
                </div>

                <div class="list-box">
                  <h4 class="list-title">주요특징</h4>
                  <ul class="bullet-list">
                    <li v-for="feat in farmFeatures" :key="feat">{{ feat }}</li>
                  </ul>
                </div>
              </div>

              <div class="flex-image">
                <img src="/image/sub/business_04_02.png" alt="FarmPlus System" class="farm-img" />
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

/* Intro Box */
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
  white-space: pre-line;
}

@media (min-width: 768px) {
  .intro-text {
    font-size: 1.5rem;
  }
}

/* Content Body */
.content-body {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

.group-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 1rem;
}

.group-desc {
  color: #475569;
  line-height: 1.6;
  margin-bottom: 2rem;
}

/* Cards & Grid */
.grid-4 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 768px) {
  .grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .grid-4 {
    grid-template-columns: repeat(4, 1fr);
  }
}

.grid-3 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 768px) {
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}

.info-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f9;
}

.card-title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 0.875rem;
  color: #475569;
  line-height: 1.5;
  white-space: pre-line;
}

/* Images */
.image-box {
  text-align: center;
}
.image-box img {
  max-width: 100%;
  height: auto;
}
.mb-8 {
  margin-bottom: 2rem;
}

/* Keyword Box */
.keyword-box {
  background-color: #e2e8f0; /* slate-200 */
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
  font-weight: 600;
  color: #1e293b;
}

/* Flow Chart */
.flow-chart-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.arrow-img {
  width: 2rem;
}
.flow-img {
  max-width: 100%;
  height: auto;
}

/* Flex Layout (FarmPlus) */
.flex-layout {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 768px) {
  .flex-layout {
    flex-direction: row;
  }
}

.flex-text {
  flex: 1;
}
.flex-image {
  flex: 1;
}

.farm-img {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Lists */
.list-title {
  font-weight: 700;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.bullet-list {
  list-style: disc;
  padding-left: 1.5rem;
  color: #475569;
  font-size: 0.875rem;
}

.bullet-list li {
  margin-bottom: 0.5rem;
}

.bold {
  font-weight: 600;
  color: #1e293b;
}
</style>
