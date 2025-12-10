<script setup>
import { ref } from 'vue'

// 서비스 카드 데이터 (SVG 경로 포함)
const serviceItems = ref([
  {
    title: '신규 개발 컨설팅',
    desc: '고객의 비즈니스 요구에 맞는 새로운 시스템을 기획하고 개발합니다.',
    // SVG path가 복잡하므로 배열로 관리
    paths: [
      'M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z',
    ],
  },
  {
    title: 'ISP 컨설팅',
    desc: '정보화 전략 계획(ISP)을 수립하여 최적의 정보 시스템 구축을 지원합니다.',
    paths: [
      'M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 17.25a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75Zm2.25-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-5.25Z',
      'M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z',
    ],
  },
  {
    title: 'SI 컨설팅',
    desc: '다양한 시스템을 통합하여 비즈니스 효율성을 극대화합니다.',
    paths: [
      'M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z',
    ],
  },
  {
    title: '프로젝트 컨설팅',
    desc: '프로젝트의 계획부터 관리·감리까지 지원합니다.',
    paths: [
      'M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z',
      'M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z',
    ],
  },
  {
    title: '관리/운영 컨설팅',
    desc: '안정적인 시스템 운영과 효율적 유지보수를 지원합니다.',
    paths: [
      'M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z',
    ],
  },
])
</script>

<template>
  <div class="consulting-page">
    <div class="sub-visual">
      <div class="sub-menu-bar">
        <div class="wrapper">
          <ul class="sub-menu-list">
            <li><router-link to="/business" class="sub-menu-link">사업영역</router-link></li>
            <li>
              <router-link to="/business/solution" class="sub-menu-link active">솔루션</router-link>
            </li>
            <li><router-link to="/business/dev" class="sub-menu-link">SI개발</router-link></li>
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
          <h2 class="page-title">SI컨설팅</h2>
          <p class="page-desc">경험을 바탕으로 한 맞춤형 시스템 제공</p>
        </div>

        <div class="intro-box">
          <p class="intro-text">
            컨설팅 사업은 고객이 필요한 주요 시스템을 안정적으로 개발 및 운영할 수 있도록 현실적인
            해결방안을 제시하고 맞춤형 시스템을 제공하는 전문서비스입니다.
          </p>
        </div>

        <div class="content-group">
          <h3 class="group-title">CONSULTING</h3>

          <div class="service-grid">
            <div v-for="item in serviceItems" :key="item.title" class="service-card">
              <div class="icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="icon"
                >
                  <path
                    v-for="(path, index) in item.paths"
                    :key="index"
                    :d="path"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h4 class="card-title">{{ item.title }}</h4>
              <p class="card-desc">{{ item.desc }}</p>
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
   2. Sub Visual (Header Image)
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
  color: #0d9488; /* teal */
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
  color: #0f172a; /* slate-900 */
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .page-title {
    font-size: 2.25rem;
  }
}

.page-desc {
  font-size: 1.125rem;
  color: #475569; /* slate-600 */
}

/* Intro Box (Green Border Left) */
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
  color: #334155; /* slate-700 */
  line-height: 1.6;
  white-space: pre-line;
}

@media (min-width: 768px) {
  .intro-text {
    font-size: 1.5rem;
  }
}

/* Service Group */
.group-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 2rem;
}

/* Grid System */
.service-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .service-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Service Card */
.service-card {
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

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.icon-box {
  margin-bottom: 1rem;
  color: #0d9488; /* teal-600 */
  display: flex;
  justify-content: center;
}

.icon {
  width: 3rem;
  height: 3rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.card-desc {
  color: #475569;
  line-height: 1.5;
}
</style>
