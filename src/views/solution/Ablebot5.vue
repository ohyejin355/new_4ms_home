<template>
  <div class="page-wrapper">
    <main>
      <section class="content-section">
        <div class="container">
          <div class="effect-content">
            <p class="intro-text">
              대부분의 선도기업들이 AI도입을 서두르는 이유는 ‘새로운 디지털환경에서의 적극적인
              대응과 경쟁업종보다 빠른 비즈니스의 변화 방향성과 기회 발굴’에 그 목적이 있으며,
              실제로 이러한 노력들은 기업의 경쟁력에서 차이를 만들어내고 있습니다.
            </p>

            <div class="card-grid">
              <div class="card">
                <div class="card-header">
                  <h3>새로운 디지털환경 대응과<br />서비스 개선</h3>
                </div>
                <div class="card-body">
                  <p class="card-subtitle">고객의 행동변화로 인한 Digital Traffic의 증가와 대응</p>
                  <ul class="card-list">
                    <li>비대면채널에서의 고객만족도 향상</li>
                    <li>맞춤 금융상품 추천을 통한 매출증진 기여</li>
                    <li>새로운 채널에서의 고객 상호작용을 통한 신뢰 확보</li>
                  </ul>
                </div>
              </div>

              <div class="card">
                <div class="card-header">
                  <h3>새로운 업무효율성과<br />수익성 향상</h3>
                </div>
                <div class="card-body">
                  <p class="card-subtitle">방대한 Content/빅데이터에 대한 지식화 및 손쉬운 확장</p>
                  <ul class="card-list">
                    <li>내부 및 외부지식에 대한 손쉬운 접근을 통해 업무효율성 향상</li>
                    <li>인력의 세대교체 = 지적자산의 효율적 관리</li>
                    <li>운영업무 Risk 감소 및 관리</li>
                  </ul>
                </div>
              </div>

              <div class="card">
                <div class="card-header">
                  <h3>프로세스의 자동화와<br />업무연속성 향상</h3>
                </div>
                <div class="card-body">
                  <p class="card-subtitle">IT–Human 프로세스의 업무분절을 최소화</p>
                  <ul class="card-list">
                    <li>단순반복적인 일상업무를 최소화, 업무의 생산성 제고</li>
                    <li>24시간 고객응대율을 향상</li>
                    <li>Risk 관리</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'SolutionAbleBotEffect',
  data() {
    return {
      // 필요한 데이터가 있다면 여기에 정의
    }
  },
}
</script>

<style scoped>
/* 기본 리셋 및 배경 */
.page-wrapper {
  background-color: #f9fafb; /* bg-gray-50 */
  min-height: 100vh;
  font-family: 'Pretendard', sans-serif;
  box-sizing: border-box;
}

/* 헤더/푸터 플레이스홀더 */
.placeholder-header,
.placeholder-footer,
.sub-menu-placeholder {
  background-color: #e2e8f0;
  padding: 20px;
  text-align: center;
  border: 1px dashed #94a3b8;
  color: #64748b;
}

/* 비주얼 헤더 영역 */
.visual-header {
  position: relative;
  padding-top: 80px; /* pt-20 */
}

.visual-bg {
  position: relative;
  padding: 128px 0; /* py-32 */
  background-size: cover;
  background-position: center;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: #0f172a; /* bg-slate-900 */
  opacity: 0.6;
}

.visual-content {
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
}

.visual-content h1 {
  font-size: 36px;
  font-weight: 900;
  color: #ffffff;
  margin: 0;
}

/* 메인 콘텐츠 섹션 */
.content-section {
  padding: 96px 0; /* py-24 */
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

/* 타이틀 영역 */
.title-area {
  text-align: center;
  margin-bottom: 64px; /* mb-16 */
}

.title-area h2 {
  font-size: 36px;
  font-weight: 900;
  color: #0f172a;
  margin: 0;
}

.title-area p {
  margin-top: 16px;
  font-size: 18px;
  color: #334155;
}

/* 탭 메뉴 */
.tab-menu {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 16px;
  transition: background-color 0.2s;
  background-color: #e2e8f0;
  color: #334155;
}

.tab-btn:hover {
  background-color: #cbd5e1;
}

.tab-btn.active {
  background-color: #2563eb; /* bg-primary */
  color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* 기대효과 콘텐츠 영역 */
.effect-content {
  max-width: 1024px; /* max-w-5xl */
  margin: 0 auto;
}

.intro-text {
  color: #334155; /* text-slate-700 */
  line-height: 1.625;
  margin-bottom: 48px; /* mb-12 */
  text-align: center;
  white-space: pre-line;
}

/* 카드 그리드 */
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* md:grid-cols-3 */
  gap: 32px; /* gap-8 */
}

/* 카드 스타일 */
.card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.06); /* shadow */
  background-color: #ffffff;
  overflow: hidden;
}

.card-header {
  padding: 16px; /* p-4 */
  background-color: #f1f5f9; /* bg-slate-100 */
  text-align: center;
  border-bottom: 1px solid #e2e8f0;
}

.card-header h3 {
  font-weight: 700; /* font-bold */
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
  color: #0f172a;
}

.card-body {
  padding: 24px; /* p-6 */
}

.card-subtitle {
  font-weight: 600; /* font-semibold */
  margin-bottom: 8px; /* mb-2 */
  color: #0f172a;
}

.card-list {
  list-style-type: disc; /* list-disc */
  list-style-position: inside; /* list-inside */
  padding: 0;
  margin: 0;
  font-size: 14px; /* text-sm */
  color: #334155; /* text-slate-700 */
  line-height: 1.5;
}

.card-list li + li {
  margin-top: 4px; /* space-y-1 */
}

/* 반응형 스타일 */
@media (max-width: 768px) {
  .visual-header {
    padding-top: 64px;
  }
  .visual-bg {
    padding: 96px 0;
  }
  .visual-content h1 {
    font-size: 30px;
  }
  .content-section {
    padding: 64px 0;
  }
  .title-area h2 {
    font-size: 30px;
  }

  /* 모바일에서 그리드 1열로 변경 */
  .card-grid {
    grid-template-columns: 1fr; /* grid-cols-1 */
  }
}
</style>
