<script setup>
import { ref } from 'vue'

const sallyImages = ref([
  { src: '/image/sub/sol_07_01_img.png', alt: 'Sallyplan Main Screen' },
  { src: '/image/sub/sol_07_02_img.png', alt: 'Sallyplan Consumption Analysis' },
  { src: '/image/sub/sol_07_03_img.png', alt: 'Sallyplan Goal Setting' },
])
</script>

<template>
  <div class="sally-plan-page">
    <section class="section">
      <div class="wrapper">
        <div class="page-header text-center">
          <h2 class="page-title">샐리플랜</h2>
          <p class="page-desc">더 잘 낭비하기 위한 초간편 소비 플래너</p>
        </div>

        <div class="sally-content">
          <p class="intro-text">
            샐리플랜은 (주)셉템과 (주)포엠에스가 함께 개발한 첫번째 마이데이터 서비스입니다. 향후
            AI기반 금융상품 개발 등 다양한 시도를 통해 차별화된 서비스를 제공하겠습니다.
          </p>
          
          

          <div class="image-list">
            <div v-for="(img, index) in sallyImages" :key="index" class="img-item">
              <img :src="img.src" :alt="img.alt" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* =========================================
   1. Content Layout
   ========================================= */
.sally-content {
  max-width: 56rem; /* max-w-4xl (약 896px) */
  margin: 0 auto;
  text-align: center;
}

.intro-text {
  color: #334155; /* slate-700 */
  line-height: 1.6;
  margin-bottom: 3rem;
  font-size: 1.125rem; /* text-lg */
  word-break: keep-all; /* 단어 단위 줄바꿈 */
}

/* =========================================
   2. Image List
   ========================================= */
.image-list {
  display: flex;
  flex-direction: column;
  gap: 3rem; /* space-y-12 */
}

.img-item {
  width: 100%;
}

.img-item img {
  display: block;
  margin: 0 auto;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .intro-text {
    margin-bottom: 2rem;
    font-size: 1rem;
  }

  .image-list {
    gap: 2rem;
  }
}
</style>