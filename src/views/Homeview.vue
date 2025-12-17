<script setup>
import { ref } from 'vue'

// Business Items
const businessItems = ref([
  {
    title: 'IT Consulting',
    desc: '다양한 경험으로 축적된 노하우를 바탕으로 유통, 물류, 금융 분야에 최적화된 컨설팅을 제공합니다.',
    tags: ['금융', '유통/물류', '회계/세무'],
    iconPath:
      'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
    type: 'light',
  },
  {
    title: 'Maintenance',
    desc: '시스템의 안정적 운영을 위한 기술 지원 및 신속한 장애 처리 서비스를 제공합니다.',
    tags: ['기술지원', '응용SW', 'B2B/B2C'],
    iconPath:
      'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.945 3.31.83 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.945 1.543-.83 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.945-3.31-.83-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.945-1.543.83-3.31 2.37-2.37.526.323 1.15.546 1.8.694V7.5a1 1 0 112 0v2.012a2.983 2.983 0 00.694 1.8z',
    type: 'light',
  },
])

// Solutions Items
const solutions = ref([
  {
    title: 'ABLEBOT',
    label: 'AI Chatbot',
    theme: 'theme-teal',
    desc: '상황 인지 기반의 **AI 챗봇 솔루션**입니다. 사용자의 의도를 유연하게 판단하는 딥러닝 엔진을 통해 24시간 끊김 없는 고객 응대를 실현합니다.',
    features: ['자연어 처리 기반 의도 파악', '지속적 학습을 통한 품질 향상'],
  },
  {
    title: 'SenseHub',
    label: 'Smart Farm',
    theme: 'theme-orange',
    desc: '한우/낙농의 생산성을 극대화하는 **발정탐지기**입니다.\n가축의 행동데이터를 24시간 분석하여 건강 관리와 번식 효율을 획기적으로 개선합니다.',
    features: ['24시간 실시간 정밀 모니터링', '질병 징후 조기 알림'],
  },
])
</script>

<template>
  <div class="container-wrapper">
    <section id="home" class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content wrapper">
        <div class="hero-text-box">
          <span class="badge badge-outline">EST. 2016 IT Specialist</span>
          <h1 class="hero-title">
            We Create <br class="pc-only" />
            <span class="gradient-text">Future Value</span><br class="mobile-only" />
            with <br />IT Technology
          </h1>
          <p class="hero-desc">
            포엠에스는 사람 중심의 철학으로 AI, 빅데이터, 스마트팜 등<br class="pc-only" />
            첨단 기술을 통해 고객의 비즈니스 혁신을 이끕니다.
          </p>
          <div class="hero-buttons">
            <router-link to="/business" class="btn btn-primary">사업영역 보기</router-link>
            <router-link to="/solution" class="btn btn-outline">솔루션 확인</router-link>
          </div>
        </div>
      </div>
      <div class="scroll-down pc-only">
        <svg class="icon bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>

    <section id="about" class="section about-section">
      <div class="wrapper">
        <div class="about-grid">
          <div class="about-image-col">
            <div class="blob blob-teal pc-only"></div>
            <div class="blob blob-gray pc-only"></div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Team working"
              class="about-img"
            />

            <div class="stat-card">
              <p class="stat-label">Since 2016</p>
              <p class="stat-number">45명+</p>
              <p class="stat-desc">전문 인력 보유</p>
            </div>
          </div>

          <div class="about-text-col">
            <h2 class="section-subtitle text-primary">Who We Are</h2>
            <h3 class="section-title">미래를 창조하는<br />주식회사 포엠에스</h3>
            <p class="text-block">
              포엠에스는 <strong>'사람 중심'</strong>의 기업 철학을 바탕으로 설립되었습니다.
              급변하는 IT 인프라 환경 속에서 고객에게 안정적이고 최적화된 서비스를 제공하기 위해
              끊임없이 연구합니다.
            </p>
            <p class="text-block">
              우리는 인재와 기술을 바탕으로 공동의 발전과 번영을 추구하며, 고객이 가장 신뢰할 수
              있는 파트너가 되기 위해 전 임직원이 역량을 집중하고 있습니다.
            </p>

            <div class="features-grid">
              <div
                v-for="item in ['전문가 중심', '고객 중심', '기술 혁신', '도전과 열정']"
                :key="item"
                class="feature-item"
              >
                <div class="feature-icon text-primary">
                  <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      v-if="item === '전문가 중심'"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                    <path
                      v-else-if="item === '고객 중심'"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                    <path
                      v-else-if="item === '기술 혁신'"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    ></path>
                    <path
                      v-else
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <span class="feature-text">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="business" class="section business-section">
      <div class="wrapper">
        <div class="text-center">
          <h2 class="section-subtitle text-primary">Our Business</h2>
          <h3 class="section-title">통합 IT 서비스를 제공합니다</h3>
          <p class="section-desc">
            컨설팅부터 개발, 유지보수까지 고객의 비즈니스 성공을 위한 A to Z를 책임집니다.
          </p>
        </div>

        <div class="business-grid">
          <router-link class="biz-card card-light wide-card group" :to="{path: '/business', query: {menuId: 'BUS_02'}}">
            <div class="card-content">
              <div class="card-icon-box group-hover-bg-primary">
                <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    :d="businessItems[0].iconPath"
                  ></path>
                </svg>
              </div>
              <h4 class="card-title">{{ businessItems[0].title }}</h4>
              <p class="card-desc">{{ businessItems[0].desc }}</p>
            </div>
            <div class="tags">
              <span v-for="tag in businessItems[0].tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </router-link>

          <router-link class="biz-card card-dark" :to="{path: '/business', query: {menuId: 'BUS_03'}}">
            <div class="card-content">
              <div class="card-icon-box">
                <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </div>
              <h4 class="card-title">System Dev.</h4>
              <p class="card-desc">
                정보시스템 진단, 설계 및 최적의 시스템 구축을 통한 경쟁력 강화
              </p>
            </div>
          </router-link>

          <router-link class="biz-card card-primary" :to="{path: '/solution', query: {menuId: 'SOL_01'}}">
            <div class="card-content">
              <div class="card-icon-box">
                <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  ></path>
                </svg>
              </div>
              <h4 class="card-title">AI Solution</h4>
              <p class="card-desc text-light">ABLEBOT 및 스마트팜 등 특화된 자체 솔루션 제공</p>
            </div>
          </router-link>

          <router-link class="biz-card card-light wide-card group" :to="{path: '/business', query: {menuId: 'BUS_04'}}">
            <div class="card-content">
              <div class="card-icon-box group-hover-bg-primary">
                <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    :d="businessItems[1].iconPath"
                  ></path>
                </svg>
              </div>
              <h4 class="card-title">{{ businessItems[1].title }}</h4>
              <p class="card-desc">{{ businessItems[1].desc }}</p>
            </div>
            <div class="tags">
              <span v-for="tag in businessItems[1].tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <section id="solutions" class="section solutions-section">
      <div class="bg-blob blob-top-right"></div>
      <div class="bg-blob blob-bottom-left"></div>

      <div class="wrapper relative">
        <div class="text-center">
          <h2 class="section-subtitle text-primary">Our Solutions</h2>
          <h3 class="section-title">혁신 기술 솔루션</h3>
          <p class="section-desc">
            AI와 빅데이터 기술이 집약된 포엠에스만의 솔루션으로 비즈니스의 새로운 가능성을 엽니다.
          </p>
        </div>

        <div class="solutions-grid">
          <div
            v-for="sol in solutions"
            :key="sol.title"
            class="sol-card-wrapper"
            :class="sol.theme"
          >
            <div class="sol-card-inner">
              <div class="sol-header">
                <h4 class="sol-title">{{ sol.title }}</h4>
                <span class="sol-badge">{{ sol.label }}</span>
              </div>
              <p
                class="sol-desc"
                v-html="sol.desc.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')"
              ></p>
              <ul class="sol-features">
                <li v-for="feature in sol.features" :key="feature" class="sol-feature-item">
                  <span class="dot"></span>
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* =========================================
   1. Reset & Common Styles
   ========================================= */
/* 폰트 설정 (Open Sans, Montserrat) - CDN 등을 통해 불러와야 함 */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Open Sans:wght@400;600;700&display=swap');

* {
  box-sizing: border-box;
}

.container-wrapper {
  background-color: #f9fafb; /* bg-gray-50 */
  min-height: 100vh;
  font-family: 'Open Sans', sans-serif;
  color: #334155; /* Slate-700 */
}

h1,
h2,
h3,
h4 {
  font-family: 'Montserrat', sans-serif;
}

.wrapper {
  max-width: 1280px; /* max-w-7xl */
  margin: 0 auto;
  padding: 0 1.5rem; /* px-6 */
  width: 100%;
}

@media (min-width: 1024px) {
  .wrapper {
    padding: 0 2rem; /* lg:px-8 */
  }
}

.section {
  padding: 4rem 0; /* py-16 */
}

@media (min-width: 768px) {
  .section {
    padding: 6rem 0; /* md:py-24 */
  }
}

.text-center {
  text-align: center;
}

/* Colors */
.text-primary {
  color: #115e59;
} /* Teal-800 */
.bg-primary {
  background-color: #0f766e;
} /* Teal-700 */

/* SVG Icons */
.icon {
  width: 24px;
  height: 24px;
  display: block;
}

/* Visibility Utilities */
.pc-only {
  display: none;
}
.mobile-only {
  display: block;
}

@media (min-width: 768px) {
  .pc-only {
    display: block;
  }
  .mobile-only {
    display: none;
  }
}

/* =========================================
   2. Typography
   ========================================= */
.section-subtitle {
  font-size: 0.75rem; /* text-xs */
  font-weight: 700; /* font-bold */
  text-transform: uppercase;
  letter-spacing: 0.1em; /* tracking-widest */
  margin-bottom: 0.5rem; /* mb-2 */
}

@media (min-width: 768px) {
  .section-subtitle {
    font-size: 0.875rem; /* md:text-sm */
  }
}

.section-title {
  font-size: 1.875rem; /* text-3xl */
  font-weight: 900; /* font-black */
  color: #0f172a; /* text-slate-900 */
  margin-bottom: 1.5rem; /* mb-6 */
  line-height: 1.2;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 2.25rem; /* md:text-4xl */
  }
}

.section-desc {
  color: #475569; /* text-slate-600 */
  font-size: 0.875rem; /* text-sm */
  max-width: 42rem;
  margin: 1rem auto 0;
  line-height: 1.6;
}

@media (min-width: 768px) {
  .section-desc {
    font-size: 1rem; /* md:text-base */
  }
}

/* =========================================
   3. Hero Section
   ========================================= */
.hero-section {
  position: relative;
  height: 100vh; /* h-screen */
  display: flex;
  align-items: center;
  background-color: #1a202c;
  overflow: hidden;

  /* Background Image Setting */
  background-image: url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1170&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
}

/* PC Parallax Effect */
@media (min-width: 768px) {
  .hero-section {
    background-attachment: fixed;
  }
}

/* Hero Background Gradient Overlay */
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.4));
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 10;
  padding-top: 4rem; /* pt-16 */
}

@media (min-width: 768px) {
  .hero-content {
    padding-top: 0;
  }
}

.hero-text-box {
  max-width: 48rem; /* max-w-3xl */
}

.badge-outline {
  display: inline-block;
  padding: 0.25rem 0.75rem; /* py-1 px-3 */
  border-radius: 9999px; /* rounded-full */
  background-color: rgba(20, 184, 166, 0.2); /* bg-teal-500/20 */
  color: #5eead4; /* text-teal-300 */
  font-size: 0.625rem; /* text-[10px] */
  font-weight: 700; /* font-bold */
  letter-spacing: 0.1em; /* tracking-widest */
  text-transform: uppercase;
  margin-bottom: 1rem; /* mb-4 */
  border: 1px solid rgba(20, 184, 166, 0.3); /* border-teal-500/30 */
}

@media (min-width: 768px) {
  .badge-outline {
    font-size: 0.75rem; /* md:text-xs */
  }
}

.hero-title {
  font-size: 2.25rem; /* text-4xl */
  font-weight: 900; /* font-black */
  color: white;
  line-height: 1.25; /* leading-tight */
  margin-bottom: 1.5rem; /* mb-6 */
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 4.5rem; /* md:text-7xl */
  }
}

.gradient-text {
  background: linear-gradient(to right, #2dd4bf, #67e8f9); /* from-teal-400 to-cyan-300 */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 900;
}

.hero-desc {
  color: #cbd5e1; /* text-slate-300 */
  font-size: 1rem; /* text-base */
  margin-bottom: 2.5rem; /* mb-10 */
  max-width: 36rem; /* max-w-xl */
  line-height: 2; /* leading-loose */
}

@media (min-width: 768px) {
  .hero-desc {
    font-size: 1.125rem; /* md:text-lg */
  }
}

.hero-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem; /* gap-4 */
}

@media (min-width: 768px) {
  .hero-buttons {
    flex-direction: row;
  }
}

.btn {
  padding: 1rem 2rem; /* px-8 py-4 */
  font-weight: 700; /* font-bold */
  border-radius: 0.5rem; /* rounded-lg */
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background-color: #0f766e; /* bg-primary (Teal-700) */
  color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); /* shadow-lg */
}

.btn-primary:hover {
  background-color: #0f766e; /* hover:bg-teal-700 (기존과 동일하지만 transform 효과) */
  transform: translateY(-4px); /* hover:-translate-y-1 (약간 더 줌) */
}

.btn-outline {
  border: 1px solid white;
  color: white;
}

.btn-outline:hover {
  background-color: white;
  color: #0f172a; /* hover:text-slate-900 */
}

.scroll-down {
  position: absolute;
  bottom: 2.5rem; /* bottom-10 */
  left: 50%;
  transform: translateX(-50%);
  color: white;
  opacity: 0.5;
  animation: bounce 1s infinite;
  z-index: 10;
}

@keyframes bounce {
  0%,
  100% {
    transform: translate(-50%, -25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translate(-50%, 0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

/* =========================================
   4. About Section
   ========================================= */
.about-section {
  background-color: white;
  overflow: hidden;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem; /* gap-12 */
  align-items: center;
}

@media (min-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr 1fr; /* lg:grid-cols-2 */
    gap: 4rem; /* lg:gap-16 */
  }
}

.about-image-col {
  position: relative;
  order: 1; /* order-1 */
}

.about-text-col {
  order: 2; /* order-2 */
  margin-top: 2rem; /* mt-8 */
}
@media (min-width: 1024px) {
  .about-text-col {
    margin-top: 0; /* lg:mt-0 */
  }
}

.about-img {
  position: relative;
  z-index: 10;
  border-radius: 1rem; /* rounded-2xl */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* shadow-2xl */
  width: 100%;
  height: 300px;
  object-fit: cover;
}

@media (min-width: 768px) {
  .about-img {
    height: 500px;
  }
}

/* Blobs behind image */
.blob {
  position: absolute;
  border-radius: 9999px; /* rounded-full */
  z-index: 0;
}
.blob-teal {
  top: -1rem; /* -top-4 */
  left: -1rem; /* -left-4 */
  width: 6rem; /* w-24 */
  height: 6rem; /* h-24 */
  background-color: #ccfbf1; /* bg-teal-100 */
}
.blob-gray {
  bottom: -1rem; /* -bottom-4 */
  right: -1rem; /* -right-4 */
  width: 10rem; /* w-40 */
  height: 10rem; /* h-40 */
  background-color: #f1f5f9; /* bg-slate-100 */
}

.stat-card {
  position: absolute;
  bottom: -1.5rem; /* -bottom-6 */
  right: 1rem; /* right-4 */
  z-index: 20;
  background-color: white;
  padding: 1.5rem; /* p-6 */
  border-radius: 0.75rem; /* rounded-xl */
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); /* shadow-xl */
  border-left: 4px solid #14b8a6; /* border-teal-500 */
}

@media (min-width: 768px) {
  .stat-card {
    right: auto; /* md:right-auto */
    left: -2.5rem; /* md:-left-10 */
    bottom: 2.5rem; /* md:bottom-10 */
  }
}

.stat-label {
  font-size: 0.75rem; /* text-xs */
  color: #64748b; /* text-slate-500 */
  font-weight: 700; /* font-bold */
  text-transform: uppercase;
  margin: 0;
}

@media (min-width: 768px) {
  .stat-label {
    font-size: 0.875rem; /* md:text-sm */
  }
}

.stat-number {
  font-size: 1.5rem; /* text-2xl */
  font-weight: 900; /* font-black */
  color: #1e293b; /* text-slate-800 */
  margin: 0;
}
@media (min-width: 768px) {
  .stat-number {
    font-size: 1.875rem; /* md:text-3xl */
  }
}

.stat-desc {
  font-size: 0.75rem; /* text-xs */
  color: #475569; /* text-slate-600 */
  margin: 0;
}
@media (min-width: 768px) {
  .stat-desc {
    font-size: 0.875rem; /* md:text-sm */
  }
}

.text-block {
  color: #475569; /* text-slate-600 */
  margin-bottom: 1.5rem; /* mb-6 */
  line-height: 1.625; /* leading-relaxed */
  font-size: 0.875rem; /* text-sm */
  white-space: pre-line;
}
@media (min-width: 768px) {
  .text-block {
    font-size: 1rem; /* md:text-base */
    margin-bottom: 2rem; /* mb-8 */
  }
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem; /* gap-4 */
  margin-top: 2rem;
}

@media (min-width: 768px) {
  .features-grid {
    gap: 1.5rem; /* md:gap-6 */
  }
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem; /* space-x-3 */
  padding: 0.75rem; /* p-3 */
  background-color: rgba(240, 253, 250, 0.5); /* bg-teal-50/50 */
  border-radius: 0.5rem; /* rounded-lg */
}

.feature-text {
  font-weight: 700; /* font-bold */
  color: #1e293b; /* text-slate-800 */
  font-size: 0.875rem; /* text-sm */
}
@media (min-width: 768px) {
  .feature-text {
    font-size: 1rem; /* md:text-base */
  }
}

/* =========================================
   5. Business Section
   ========================================= */
.business-section {
  background-color: #f8fafc; /* bg-slate-50 */
}

.business-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem; /* gap-6 */
  margin-top: 3rem;
}

@media (min-width: 768px) {
  .business-grid {
    grid-template-columns: repeat(3, 1fr); /* md:grid-cols-3 */
  }
}

/* Card Common Styles */
.biz-card {
  padding: 2rem; /* p-8 */
  border-radius: 1rem; /* rounded-2xl */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
  min-height: 320px;
}

.biz-card:hover {
  transform: translateY(-0.5rem); /* hover:-translate-y-2 (수정) */
}

.wide-card {
  grid-column: span 1;
}
@media (min-width: 768px) {
  .wide-card {
    grid-column: span 2; /* md:col-span-2 */
  }
}

/* Light Card (Consulting, Maintenance) */
.card-light {
  background-color: white; /* bg-white */
  border: 1px solid #f1f5f9; /* border-slate-100 */
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
}

.card-light:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); /* hover:shadow-xl */
}

.card-light .card-icon-box {
  background-color: #f1f5f9; /* bg-slate-100 */
  color: #334155; /* text-slate-700 */
}

/* Group hover effect for icon box */
.group:hover .group-hover-bg-primary {
  background-color: #0f766e; /* hover:bg-primary (Teal-700) */
  color: white; /* hover:text-white */
}

.card-light .card-title {
  color: #1e293b; /* text-slate-800 */
}
.card-light .card-desc {
  color: #475569; /* text-slate-600 */
}

/* Dark Card (System Dev.) */
.card-dark {
  background-color: #1e293b; /* bg-slate-800 */
  color: white; /* text-white */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); /* shadow-lg */
}

.card-dark .card-icon-box {
  background-color: #334155; /* bg-slate-700 */
  color: #2dd4bf; /* text-teal-400 */
}
.card-dark .card-title {
  color: white;
}
.card-dark .card-desc {
  color: #cbd5e1; /* text-slate-300 */
  white-space: pre-line;
}

/* Primary (Teal) Card (AI Solution) */
.card-primary {
  background-color: #0d9488; /* bg-teal-600 */
  color: white; /* text-white */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); /* shadow-lg */
}

.card-primary .card-icon-box {
  background-color: #14b8a6; /* bg-teal-500 */
  color: white; /* text-white */
}
.card-primary .card-title {
  color: white;
}
.card-primary .card-desc {
  color: #ccfbf1; /* text-teal-100 */
}

/* Card Internals */
.card-icon-box {
  width: 3rem; /* w-12 */
  height: 3rem; /* h-12 */
  border-radius: 0.5rem; /* rounded-lg */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem; /* mb-6 */
  transition: all 0.3s ease;
}

.card-title {
  font-size: 1.25rem; /* text-xl */
  font-weight: 700; /* font-bold */
  margin-bottom: 0.75rem; /* mb-3 */
}
@media (min-width: 768px) {
  .card-title {
    font-size: 1.5rem; /* md:text-2xl */
  }
}

.card-desc {
  font-size: 0.875rem; /* text-sm */
  margin: 0;
  line-height: 1.5;
}
@media (min-width: 768px) {
  .card-desc {
    font-size: 1rem; /* md:text-base */
  }
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem; /* gap-2 */
  margin-top: 2rem; /* mt-8 */
}
.tag {
  font-size: 0.75rem; /* text-xs */
  font-weight: 600; /* font-semibold */
  background-color: #f1f5f9; /* bg-slate-100 */
  padding: 0.25rem 0.75rem; /* px-3 py-1 */
  border-radius: 9999px; /* rounded-full */
  color: #475569; /* text-slate-600 */
}

/* =========================================
   6. Solutions Section
   ========================================= */
.solutions-section {
  background-color: white; /* bg-white */
  position: relative;
  overflow: hidden;
}

/* Background Blobs */
.bg-blob {
  position: absolute;
  border-radius: 9999px; /* rounded-full */
  opacity: 0.1; /* opacity-10 */
  filter: blur(64px); /* blur-3xl */
}
.blob-top-right {
  top: -5rem; /* -mt-20 */
  right: -5rem; /* -mr-20 */
  width: 15rem; /* w-60 */
  height: 15rem; /* h-60 */
  background-color: #14b8a6; /* bg-teal-500 */
}
@media (min-width: 768px) {
  .blob-top-right {
    width: 24rem; /* md:w-96 */
    height: 24rem; /* md:h-96 */
  }
}

.blob-bottom-left {
  bottom: -5rem; /* -mb-20 */
  left: -5rem; /* -ml-20 */
  width: 15rem; /* w-60 */
  height: 15rem; /* h-60 */
  background-color: #06b6d4; /* bg-cyan-500 */
}
@media (min-width: 768px) {
  .blob-bottom-left {
    width: 20rem; /* md:w-80 */
    height: 20rem; /* md:h-80 */
  }
}

.solutions-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem; /* gap-8 */
  margin-top: 3rem;
}

@media (min-width: 768px) {
  .solutions-grid {
    grid-template-columns: 1fr 1fr; /* md:grid-cols-2 */
    gap: 2.5rem; /* md:gap-10 */
  }
}

.sol-card-wrapper {
  padding: 4px; /* p-1 */
  border-radius: 1.5rem; /* rounded-3xl */
  background-color: #e2e8f0; /* bg-slate-200 */
  transition: background 0.5s ease;
  overflow: hidden;
  position: relative;
}

/* Theme Hover Effects */
.theme-teal:hover {
  background: linear-gradient(to bottom right, #14b8a6, #06b6d4); /* from-teal-500 to-cyan-500 */
}
.theme-orange:hover {
  background: linear-gradient(to bottom right, #fb923c, #ef4444); /* from-orange-400 to-red-500 */
}

.sol-card-inner {
  background-color: white; /* bg-white */
  height: 100%;
  border-radius: 1.25rem; /* rounded-[20px] */
  padding: 2rem; /* p-8 */
  position: relative;
  z-index: 10;
}

@media (min-width: 768px) {
  .sol-card-inner {
    padding: 2.5rem; /* md:p-10 */
  }
}

.sol-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem; /* mb-8 */
}

.sol-title {
  font-size: 1.5rem; /* text-2xl */
  font-weight: 700; /* font-bold */
  color: #0f172a; /* text-slate-900 */
  margin: 0;
}
@media (min-width: 768px) {
  .sol-title {
    font-size: 1.875rem; /* md:text-3xl */
  }
}

.sol-badge {
  font-size: 0.75rem; /* text-xs */
  font-weight: 700; /* font-bold */
  text-transform: uppercase;
  padding: 0.25rem 0.75rem; /* px-3 py-1 */
  border-radius: 9999px; /* rounded-full */
  letter-spacing: 0.05em; /* tracking-wider */
}

/* Badge Colors based on parent class */
.theme-teal .sol-badge {
  color: #0f766e; /* text-teal-700 */
  background-color: #ccfbf1; /* bg-teal-100 */
}
.theme-orange .sol-badge {
  color: #c2410c; /* text-orange-700 */
  background-color: #ffedd5; /* bg-orange-100 */
}

.sol-desc {
  color: #475569; /* text-slate-600 */
  margin-bottom: 2rem; /* mb-8 */
  line-height: 1.625; /* leading-relaxed */
  font-size: 0.875rem; /* text-sm */
  white-space: pre-line;
}
@media (min-width: 768px) {
  .sol-desc {
    font-size: 1rem; /* md:text-base */
  }
}

.sol-features {
  border-top: 1px solid #e2e8f0; /* border-slate-200 */
  padding-top: 1.5rem; /* pt-6 */
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* space-y-3 */
  color: #64748b; /* text-slate-500 */
  font-size: 0.875rem; /* text-sm */
}
@media (min-width: 768px) {
  .sol-features {
    font-size: 1rem; /* md:text-base */
  }
}

.sol-feature-item {
  display: flex;
  align-items: center;
}

.dot {
  width: 0.5rem; /* w-2 */
  height: 0.5rem; /* h-2 */
  border-radius: 50%; /* rounded-full */
  margin-right: 0.75rem; /* mr-3 */
}
.theme-teal .dot {
  background-color: #14b8a6; /* bg-teal-500 */
}
.theme-orange .dot {
  background-color: #f97316; /* bg-orange-500 */
}
</style>
