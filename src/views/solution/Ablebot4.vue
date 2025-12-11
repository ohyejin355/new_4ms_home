<template>
  <div class="page-wrapper">
    <main>
      <section class="content-section">
        <div class="container">
          <div class="description-area">
            <div class="desc-block">
              <p class="desc-text">
                채팅창에 텍스트 또는 음성으로 ‘신입 공무원이야’, ‘공무원에 합격했어’와 같은 자연어가
                유입될 경우 해당 상품으로 바로 안내할 수 있는 등 ‘자연어’처리를 통해 혁신적인 비대면
                금융마케팅을 제공할 수 있게 됩니다.
              </p>
              <div class="img-wrapper">
                <img src="/image/sub/sol_06_01_img.png" alt="Natural Language Processing" />
              </div>
            </div>

            <div class="desc-block">
              <p class="desc-text">
                고객과의 대화를 통해 누적된 데이터와 규격화된 행동패턴 등을 빅데이터 연동을 통해
                적합한 맞춤상품이나 서비스를 안내하는 등 개인화된 마케팅을 제공할 수 있게 됩니다.
              </p>
              <div class="img-wrapper">
                <img src="/image/sub/sol_06_02_img.png" alt="Big Data Integration" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
// 필요한 컴포넌트가 있다면 여기서 import 합니다.
// import Header from '@/components/Header.vue';
// import Footer from '@/components/Footer.vue';

export default {
  name: 'SolutionAbleBotApply',
  components: {
    // Header,
    // Footer
  },
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
  font-family: 'Pretendard', sans-serif; /* 폰트는 프로젝트에 맞게 설정 */
}

/* 헤더/푸터 플레이스홀더 (실제 컴포넌트 사용 시 삭제 가능) */
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
  max-width: 1280px; /* max-w-7xl */
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
}

.visual-content h1 {
  font-size: 36px; /* text-4xl */
  font-weight: 900; /* font-black */
  color: #ffffff;
  margin: 0;
}

/* 콘텐츠 섹션 공통 */
.content-section {
  padding: 96px 0; /* py-24 */
}

.container {
  max-width: 1280px; /* max-w-7xl */
  margin: 0 auto;
  padding: 0 24px;
}

/* 타이틀 영역 */
.title-area {
  text-align: center;
  margin-bottom: 64px; /* mb-16 */
}

.title-area h2 {
  font-size: 36px; /* text-4xl */
  font-weight: 900; /* font-black */
  color: #0f172a; /* text-slate-900 */
  margin: 0;
}

.title-area p {
  margin-top: 16px;
  font-size: 18px; /* text-lg */
  color: #334155; /* text-slate-700 */
}

/* 탭 메뉴 */
.tab-menu {
  display: flex;
  justify-content: center;
  gap: 8px; /* gap-2 */
  margin-bottom: 32px; /* mb-8 */
  flex-wrap: wrap;
}

.tab-btn {
  padding: 12px 24px; /* px-6 py-3 */
  border-radius: 8px; /* rounded-lg */
  text-decoration: none;
  font-size: 16px;
  transition: background-color 0.2s;

  /* 기본 상태 (비활성) */
  background-color: #e2e8f0; /* bg-slate-200 */
  color: #334155; /* text-slate-700 */
}

.tab-btn:hover {
  background-color: #cbd5e1; /* hover:bg-slate-300 */
}

/* 활성화 상태 (Active) */
.tab-btn.active {
  background-color: #2563eb; /* bg-primary (임의의 파란색 지정) */
  color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); /* shadow-md */
}

/* 설명 영역 */
.description-area {
  max-width: 1024px; /* max-w-5xl */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 64px; /* space-y-16 */
}

.desc-block {
  text-align: center;
}

.desc-text {
  color: #334155; /* text-slate-700 */
  line-height: 1.625; /* leading-relaxed */
  margin-bottom: 32px; /* mb-8 */
  white-space: pre-line;
}

.img-wrapper img {
  display: block;
  margin: 0 auto;
  border-radius: 8px; /* rounded-lg */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); /* shadow-md */
  max-width: 100%;
  height: auto;
}

/* 반응형 미디어 쿼리 (Tailwind의 md: 등 대응) */
@media (max-width: 768px) {
  .visual-header {
    padding-top: 64px; /* pt-16 */
  }

  .visual-bg {
    padding: 96px 0; /* py-24 */
  }

  .visual-content h1 {
    font-size: 30px; /* text-3xl */
  }

  .content-section {
    padding: 64px 0; /* py-16 */
  }

  .title-area h2 {
    font-size: 30px; /* text-3xl */
  }
}
</style>
