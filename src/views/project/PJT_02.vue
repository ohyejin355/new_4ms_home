<template>
  <div class="project-page">
    <section class="section">
      <div class="wrapper">
        <div class="page-header text-center">
          <h2 class="page-title">주요협력사</h2>
          <p class="page-desc">다양한 기업들과 협력하여 시스템 개발에 힘쓰고 있습니다.</p>
        </div>

        <div class="parter-grid">
          <div class="partner-item" v-for="(partner, index) in partnerLogo" :key="index">
            <img :src="partner.logoUrl" :alt="partner.name" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const partnerLogo = ref([
    { logoUrl: '/image/sub/pro_logo_01.png', name: 'Partner 1' },
    { logoUrl: '/image/sub/pro_logo_02.png', name: 'Partner 2' },
    { logoUrl: '/image/sub/pro_logo_03.png', name: 'Partner 3' },
    { logoUrl: '/image/sub/pro_logo_04.png', name: 'Partner 4' },
    { logoUrl: '/image/sub/pro_logo_05.png', name: 'Partner 5' },
    { logoUrl: '/image/sub/pro_logo_06.png', name: 'Partner 6' },
    { logoUrl: '/image/sub/pro_logo_07.png', name: 'Partner 7' },
    { logoUrl: '/image/sub/pro_logo_08.png', name: 'Partner 8' },
    { logoUrl: '/image/sub/pro_logo_09.png', name: 'Partner 9' },
    { logoUrl: '/image/sub/pro_logo_10.png', name: 'Partner 10' },
    { logoUrl: '/image/sub/pro_logo_11.png', name: 'Partner 11' },
    { logoUrl: '/image/sub/pro_logo_12.png', name: 'Partner 12' },
  ])
</script>

<style scoped>
  .page-header {
    margin-bottom: 4rem;
  }

  .page-title {
    font-size: 1.875rem;
    font-weight: 900;
    color: #0f172a;
    margin-bottom: 1rem;
  }

  .page-desc {
    font-size: 1.125rem;
    color: #475569;
  }

  .parter-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
    max-width: 1050px;
    margin: 0 auto;
  }

  .partner-item {
    display: flex;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 2rem;
    background-color: rgb(255 255 255 / 1);
    border-radius: 0.5rem;
    justify-content: center;
    align-items: center;
    height: 8rem;
    box-sizing: border-box;
    border-style: solid;
    border-color: #e5e7eb;
  }

  .partner-item img {
    max-height: 4rem;
  }

  @media (min-width: 768px) {
    .page-title {
      font-size: 2.25rem;
    }
  }
</style>
