<template>
  <div class="page-wrapper">
    <main>
      <section class="content-section">
        <div class="container">
          <div class="title-area">
            <h2>샐리플랜</h2>
            <p>더 잘 낭비하기 위한 초간편 소비 플래너</p>
          </div>

          <div class="sally-content">
            <p class="intro-text">
              샐리플랜은 (주)셉템과 (주)포엠에스가 함께 개발한 첫번째 마이데이터 서비스입니다. 향후
              AI기반 금융상품 개발 등 다양한 시도를 통해 차별화된 서비스를 제공하겠습니다.
            </p>

            <div class="image-list">
              <div class="img-item">
                <img src="/image/sub/sol_07_01_img.png" alt="Sallyplan screen 1" />
              </div>
              <div class="img-item">
                <img src="/image/sub/sol_07_02_img.png" alt="Sallyplan screen 2" />
              </div>
              <div class="img-item">
                <img src="/image/sub/sol_07_03_img.png" alt="Sallyplan screen 3" />
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
  name: 'SolutionSallyPlan',
  data() {
    return {}
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

/* 샐리플랜 콘텐츠 영역 */
.sally-content {
  max-width: 896px; /* max-w-4xl */
  margin: 0 auto;
  text-align: center;
}

.intro-text {
  color: #334155;
  line-height: 1.625;
  margin-bottom: 48px; /* mb-12 */
  font-size: 16px;
}

/* 이미지 리스트 */
.image-list {
  display: flex;
  flex-direction: column;
  gap: 48px; /* space-y-12 */
}

.img-item {
  width: 100%;
}

.img-item img {
  display: block;
  margin: 0 auto;
  border-radius: 8px; /* rounded-lg */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); /* shadow-md */
  max-width: 100%;
  height: auto;
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

  .intro-text {
    margin-bottom: 32px;
  }

  .image-list {
    gap: 32px;
  }
}
</style>
