<template>
  <div class="page-wrapper">
    <main>
      <section class="content-section">
        <div class="container">
          <div class="function-content">
            <p class="intro-text">
              AI에서 제공되는 인지서비스(Cognitive Service)를 통해 고객과의 다양한 인터페이스 및
              상호작용이 가능합니다.
            </p>

            <div class="service-grid">
              <div class="service-card">
                <div class="card-header">
                  <h3>Vision (비젼 서비스)</h3>
                </div>
                <ul class="card-list">
                  <li>Computer Vision</li>
                  <li>Content Moderator</li>
                  <li>Emotion</li>
                  <li>Face</li>
                  <li>Video</li>
                </ul>
              </div>

              <div class="service-card">
                <div class="card-header">
                  <h3>Speech (스피치 서비스)</h3>
                </div>
                <ul class="card-list">
                  <li>Bing Speech</li>
                  <li>Custom Speech Service</li>
                  <li>Speaker Recognition</li>
                </ul>
              </div>

              <div class="service-card">
                <div class="card-header">
                  <h3>Language (언어 서비스)</h3>
                </div>
                <ul class="card-list">
                  <li>Bing Spell Check</li>
                  <li>Language Understanding</li>
                  <li>Linguistic Analysis</li>
                  <li>Text Analysis</li>
                  <li>Translator</li>
                  <li>WebLM</li>
                </ul>
              </div>

              <div class="service-card">
                <div class="card-header">
                  <h3>Knowledge (지식 서비스)</h3>
                </div>
                <ul class="card-list">
                  <li>Academic</li>
                  <li>Entity Linking</li>
                  <li>Knowledge Exploration</li>
                  <li>QnA Maker</li>
                  <li>Recommendations</li>
                </ul>
              </div>

              <div class="service-card">
                <div class="card-header">
                  <h3>Search (검색 서비스)</h3>
                </div>
                <ul class="card-list">
                  <li>Bing Autosuggest</li>
                  <li>Bing Image Search</li>
                  <li>Bing News Search</li>
                  <li>Bing Video Search</li>
                  <li>Bing Web Search</li>
                </ul>
              </div>
            </div>

            <p class="note-text">※ 서비스 제공(Platfrom as a Service)을 위한 API 집합</p>

            <div class="feature-grid-wrapper">
              <div class="feature-grid">
                <div class="feature-item">REST API를 사용한 손쉬운 자산화</div>
                <div class="feature-item">사용자가 선택한 플랫폼과<br />언어에 손쉽게 통합됨</div>
                <div class="feature-item">
                  MS Research의 최고 전문가들에 의해<br />만들어지고 검증됨
                </div>
                <div class="feature-item">
                  추가하기 쉬움: 몇 줄의 코드만으로<br />서비스 추가 가능
                </div>
                <div class="feature-item">
                  광범위한 API 제공이 사용자 App에<br />알맞는 기능을 제공
                </div>
                <div class="feature-item">
                  완전한 설명, 예제 및 커뮤니티 로부터<br />지원 받을 수 있음
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="placeholder-footer">Footer Include Area</footer>
  </div>
</template>

<script>
export default {
  name: 'SolutionAbleBotFunction',
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

/* 기능 콘텐츠 영역 */
.function-content {
  max-width: 1152px; /* max-w-6xl */
  margin: 0 auto;
}

.intro-text {
  color: #334155;
  line-height: 1.625;
  margin-bottom: 32px;
  text-align: center;
  white-space: pre-line;
}

/* 5단 서비스 그리드 */
.service-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* md:grid-cols-5 */
  gap: 16px; /* gap-4 */
  margin-bottom: 32px;
}

.service-card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  background-color: #ffffff;
}

.card-header {
  padding: 16px;
  background-color: #f1f5f9; /* bg-slate-100 */
  text-align: center;
  border-bottom: 1px solid #e2e8f0;
}

.card-header h3 {
  font-weight: 700;
  margin: 0;
  font-size: 16px; /* 모바일 대응을 위해 폰트 사이즈 조정 */
  color: #0f172a;
}

.card-list {
  padding: 16px;
  margin: 0;
  list-style: none;
  font-size: 14px;
  color: #334155;
}

.card-list li {
  margin-bottom: 4px;
}

/* 참고 텍스트 */
.note-text {
  font-size: 14px;
  color: #64748b; /* text-slate-500 */
  text-align: center;
  margin-bottom: 32px;
}

/* 특징 3단 그리드 */
.feature-grid-wrapper {
  border: 1px solid #cbd5e1; /* border-slate-300 느낌 */
  border-radius: 8px;
  overflow: hidden;
  background-color: #cbd5e1; /* 그리드 갭 색상용 */
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* md:grid-cols-3 */
  gap: 1px; /* gap-px 역할 */
}

.feature-item {
  background-color: #ffffff;
  padding: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #334155;
  line-height: 1.5;
  font-size: 16px;
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
  .service-grid {
    grid-template-columns: 1fr;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>
