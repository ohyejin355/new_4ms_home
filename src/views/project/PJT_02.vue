<template>
  <div class="">
    <section class="section">
      <div class="wrapper">
        <div class="text-center mb-16">
          <h2
            class="text-[1.875rem]/[36px] font-black text-slate-900 mb-4 md:text-[2.25rem]/[36px] font-mont"
          >
            주요협력사
          </h2>
          <p class="text-[1.125rem]/[18px] text-slate-600">
            다양한 기업들과 협력하여 시스템 개발에 힘쓰고 있습니다.
          </p>
        </div>

        <div
          class="parter-grid grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8 max-w-262.5 mx-auto"
        >
          <div
            class="partner-item flex shadow-md p-8 bg-white rounded-lg justify-center items-center h-32 border border-gray-200"
            v-for="(partner, index) in partnerLogo"
            :key="index"
          >
            <img :src="partner.logoUrl" :alt="partner.name" class="max-h-16" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

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
