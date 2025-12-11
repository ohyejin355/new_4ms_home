<template>
  <div class="page-wrapper">
    <main>
      <section class="content-section">
        <div class="container">
          <div class="understand-content">
            <p class="intro-text">
              AI 는 ‘자연어처리기능’과 ‘자체학습기능’ 두 가지의 핵심 기능으로 구성되어 있습니다.
              기업의 기존 시스템에 적용될 수 있도록 두 가지의 핵심 기능이 패키지화된 것을 AI엔진이라
              하며,이러한 엔진이 효과적으로 적용 및 구동될 때에 진정한 의미의 AI라 할 수 있습니다.
            </p>

            <div class="img-wrapper">
              <img src="/image/sub/sol_01_01_img.png" alt="AI Core Functions" />
            </div>

            <div class="table-container">
              <table class="feature-table">
                <tbody>
                  <tr>
                    <th>시각 이해 Vision</th>
                    <td>이미지와 비디오를 분석-이해하고, 사람처럼 해석할 수 있습니다.</td>
                  </tr>
                  <tr>
                    <th>음성 이해 Speech</th>
                    <td>
                      고객의 음성, 단어, 문장을 식별하고, 의도를 이해함으로써 고객의 의견을 듣고
                      대화할 수 있습니다.
                    </td>
                  </tr>
                  <tr>
                    <th>텍스트 이해 Language</th>
                    <td>
                      텍스트를 처리하고 고객이 원하는 것을, 인식하는 방법을 스스로 학습합니다.
                    </td>
                  </tr>
                  <tr>
                    <th>빅데이터 연동 Knowledge</th>
                    <td>이미지와 비디오를 분석-이해하고, 사람처럼 해석할 수 있습니다.</td>
                  </tr>
                  <tr>
                    <th>시각 이해 Vision</th>
                    <td>
                      Web, 학계, 고객 및 자신의 데이터에서 축적된 빅데이터를 연동하여 활용합니다.
                    </td>
                  </tr>
                  <tr>
                    <th>인터넷 검색 Search</th>
                    <td>
                      검색엔진 API의 강력한 기능을 통해 수십억 개의 웹 페이지, 이미지, 비디오 및
                      뉴스를 연동할 수 있습니다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'SolutionAbleBotUnderstand',
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
  background-color: #2563eb; /* bg-primary */
  color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* 이해 콘텐츠 영역 */
.understand-content {
  max-width: 896px; /* max-w-4xl */
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

/* 테이블 스타일 */
.table-container {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.feature-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  table-layout: fixed; /* 고정 레이아웃 */
}

.feature-table th,
.feature-table td {
  padding: 16px; /* p-4 */
  text-align: left;
  border-bottom: 1px solid #e5e7eb; /* divide-y */
  border-right: 1px solid #e5e7eb; /* divide-x */
  font-size: 16px;
}

.feature-table tr:last-child th,
.feature-table tr:last-child td {
  border-bottom: none;
}

.feature-table tr td:last-child {
  border-right: none;
}

.feature-table th {
  background-color: #f1f5f9; /* bg-slate-100 */
  color: #0f172a;
  font-weight: 600; /* font-semibold */
  width: 25%; /* w-1/4 */
}

.feature-table td {
  color: #334155;
  width: 75%;
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

  /* 모바일에서 테이블 스타일 변경 (필요시) */
  .feature-table th {
    width: 35%;
    font-size: 14px;
  }
  .feature-table td {
    width: 65%;
    font-size: 14px;
  }
}
</style>
