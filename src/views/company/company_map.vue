<template>
  <main>
    <section class="py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="bg-white p-6 md:p-12 rounded-lg shadow-lg">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-black text-slate-900">오시는길</h2>
            <p class="mt-4 text-lg text-slate-600">여기는 주식회사 포엠에스입니다.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mb-16">
            <div class="bg-slate-100 p-8 rounded-lg">
              <h3 class="text-xl font-bold text-slate-800 mb-4">개발문의</h3>
              <p class="text-slate-600 mb-4">
                시스템 개발 문의는 다음 메일로 연락주시면<br />빠른 시일 내 답변 드리겠습니다.
              </p>
              <a
                href="mailto:isdkorea1@gmail.com"
                class="font-semibold text-primary hover:underline"
                >isdkorea1@gmail.com</a
              >
            </div>
            <div class="bg-slate-100 p-8 rounded-lg">
              <h3 class="text-xl font-bold text-slate-800 mb-4">운영문의</h3>
              <p class="text-slate-600 mb-4">
                시스템 운영 문의는 다음 메일로 연락주시면<br />빠른 시일 내 답변 드리겠습니다.
              </p>
              <a
                href="mailto:cmkil5150@gmail.com"
                class="font-semibold text-primary hover:underline"
                >cmkil5150@gmail.com</a
              >
            </div>
          </div>

          <div>
            <!-- * Daum 지도 - 지도퍼가기 -->
            <div
              class="daum-roughmap-container"
              id="map-container"
              ref="mapContainer"
              :style="{ width: mapWidth + 'px', height: mapHeight + 'px' }"
            ></div>

            <div class="text-center mt-16">
              <p class="text-xl font-semibold text-slate-800">
                서울특별시 영등포구 경인로 775 (문래동3가), 에이스하이테크시티 2동 509호 , 우편번호
                07299
              </p>
              <p class="text-lg text-slate-600 mt-4">
                지하철 : 1호선 영등포역 하차 후 6번 출구 나와서 도보 10분<br />
                지하철 : 2호선 문래역 하차 후 6번 출구 나와서 도보 6분
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'

// props 정의
const props = defineProps({
  mapWidth: {
    type: [String, Number],
    default: 1125,
  },
  mapHeight: {
    type: [String, Number],
    default: 500,
  },
})

const initKakaoMap = () => {
  // window.kakao가 로드되었는지 확인
  if (window.kakao && window.kakao.maps) {
    const container = document.getElementById('map-container') // DOM 요소 선택

    // 지도의 중심 좌표
    const mapOption = {
      center: new window.kakao.maps.LatLng(37.5147464245043, 126.897536835727),
      level: 3, // 지도 확대 레벨
    }

    // 지도 객체 생성
    const map = new window.kakao.maps.Map(container, mapOption)

    // 마커 추가 (선택 사항)
    new window.kakao.maps.Marker({
      map: map,
      position: mapOption.center,
    })

    console.log('Kakao Map 렌더링 완료')
  } else {
    // API 스크립트가 아직 로드되지 않은 경우
    console.error('Kakao Map API가 정의되지 않았습니다. index.html을 확인하세요.')
  }
}

onMounted(() => {
  // 컴포넌트가 마운트된 후 맵 초기화 함수 실행
  // Kakao API 스크립트는 index.html에서 로드되므로, 별도의 동적 로딩이 필요 없습니다.
  initKakaoMap()
})
</script>

<style scoped>
/* 컨테이너 스타일 (필요하다면 추가) */
.daum-roughmap-container {
  /* 스타일을 추가하여 지도가 잘 보이도록 설정할 수 있습니다. */
  margin: 0 auto; /* 중앙 정렬 예시 */
  border: 1px solid #ccc;
  max-width: 100%;
}
</style>
