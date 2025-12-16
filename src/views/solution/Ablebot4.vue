<script setup>
import { ref } from 'vue'

const applyItems = ref([
  {
    text: '채팅창에 텍스트 또는 음성으로 ‘신입 공무원이야’, ‘공무원에 합격했어’와 같은 자연어가\n유입될 경우 해당 상품으로 바로 안내할 수 있는 등 ‘자연어’처리를 통해 혁신적인 비대면\n금융마케팅을 제공할 수 있게 됩니다.',
    imgSrc: '/image/sub/sol_06_01_img.png',
    alt: 'Natural Language Processing',
  },
  {
    text: '고객과의 대화를 통해 누적된 데이터와 규격화된 행동패턴 등을 빅데이터 연동을 통해\n적합한 맞춤상품이나 서비스를 안내하는 등 개인화된 마케팅을 제공할 수 있게 됩니다.',
    imgSrc: '/image/sub/sol_06_02_img.png',
    alt: 'Big Data Integration',
  },
])
</script>

<template>
  <div class="apply-page">
    <section class="section">
      <div class="wrapper">
        <div class="description-area">
          <div v-for="(item, index) in applyItems" :key="index" class="desc-block">
            <p class="desc-text">{{ item.text }}</p>
            
            

            <div class="img-wrapper">
              <img :src="item.imgSrc" :alt="item.alt" />
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
.description-area {
  max-width: 64rem; /* max-w-5xl (약 1024px) */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem; /* space-y-16 */
}

.desc-block {
  text-align: center;
}

.desc-text {
  color: #334155; /* slate-700 */
  line-height: 1.625;
  margin-bottom: 2rem;
  white-space: pre-line; /* 줄바꿈(\n) 적용 */
  font-size: 1.125rem; /* text-lg */
}

/* =========================================
   2. Image Styles
   ========================================= */
.img-wrapper img {
  display: block;
  margin: 0 auto;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  height: auto;
}
</style>