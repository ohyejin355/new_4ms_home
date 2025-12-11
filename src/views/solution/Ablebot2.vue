<template>
  <div class="page-wrapper">
    <main>
      <section class="content-section">
        <div class="container">
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
              <div class="comparison-box">
                <h3 class="box-title">자연어 처리 기반</h3>

                <div class="section-block">
                  <h4 class="section-label">장점</h4>
                  <ul class="list-dots">
                    <li>사용자의 의도(Intent)를 유연하게 판단</li>
                    <li>데이터 축적에 따른 지속적 품질 향상</li>
                    <li>유지보수/관리 노력의 점진적 감소</li>
                    <li>새로운 질문에도 딥러닝에 따른 답변이 가능</li>
                  </ul>
                </div>

                <div class="section-block">
                  <h4 class="section-label">단점</h4>
                  <ul class="list-dots">
                    <li>엔진에 따른 품질 편차</li>
                    <li>초기 학습 및 구축 비용, 학습기간의 오류 확률</li>
                    <li>초기 안정화 기간의 오류 발생</li>
                    <li>딥러닝의 물리적시간이 필요함</li>
                  </ul>
                </div>
              </div>

              <div class="comparison-box">
                <h3 class="box-title">룰 기반</h3>

                <div class="section-block">
                  <h4 class="section-label">장점</h4>
                  <ul class="list-dots">
                    <li>비교적 단순한 구축 형태</li>
                    <li>모델에 대한 직관적 이해 가능</li>
                    <li>사용자 의도(Intent)가 소수일 경우 정확도 향상</li>
                    <li>오류의 원인을 정확히 알수있음</li>
                  </ul>
                </div>

                <div class="section-block">
                  <h4 class="section-label">단점</h4>
                  <ul class="list-dots">
                    <li>새로운 사용자 의도(Intent) 인지 능력의 한계</li>
                    <li>메시지가 정확하게 일치하지 않으면 오류 발생</li>
                    <li>표현이 다양한 언어에서, 기하급수적인 예문 증가</li>
                    <li>오류 수정을 위한 지속적인 유지보수 필요</li>
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
  name: 'SolutionAbleBotType',
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
  padding-top: 80px;
}

.visual-bg {
  position: relative;
  padding: 128px 0;
  background-size: cover;
  background-position: center;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: #0f172a;
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
  padding: 96px 0;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

/* 타이틀 영역 */
.title-area {
  text-align: center;
  margin-bottom: 64px;
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
  background-color: #2563eb;
  color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* 유형 콘텐츠 영역 */
.type-content {
  max-width: 1024px; /* max-w-5xl */
  margin: 0 auto;
}

.intro-text {
  color: #334155;
  line-height: 1.625;
  margin-bottom: 32px;
  white-space: pre-line;
}

.img-wrapper {
  margin: 32px auto;
  text-align: center;
}

.img-wrapper img {
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  height: auto;
}

/* 비교 그리드 */
.comparison-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* md:grid-cols-2 */
  gap: 32px; /* gap-8 */
}

.comparison-box {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 24px; /* p-6 */
  background-color: #ffffff;
}

.box-title {
  font-size: 20px; /* text-xl */
  font-weight: 700;
  text-align: center;
  margin-top: 0;
  margin-bottom: 16px; /* mb-4 */
  color: #0f172a;
}

.section-block {
  margin-bottom: 16px; /* mb-4 */
}

.section-label {
  background-color: #f1f5f9; /* bg-slate-100 */
  padding: 8px; /* p-2 */
  border-radius: 4px; /* rounded */
  font-weight: 700;
  margin: 0 0 8px 0;
  font-size: 16px;
  color: #0f172a;
}

.list-dots {
  list-style-type: disc;
  list-style-position: inside;
  padding: 16px; /* p-4 */
  margin: 0;
  font-size: 14px;
  color: #334155; /* text-slate-700 */
  line-height: 1.5;
}

.list-dots li + li {
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
  .comparison-grid {
    grid-template-columns: 1fr;
  }
}
</style>
