<template>
  <main>
    <section class="comp_section">
      <div class="comp_wrapper">
        <div class="comp_content">
          <div class="comp_text">
            <h2 class="comp_h2">오시는길</h2>
            <p class="comp_description">여기는 주식회사 포엠에스입니다.</p>
          </div>

          <div class="grid_style">
            <div class="bg-slate-100 p-8 rounded-lg">
              <h3 class="text_inq text-slate-800">개발문의</h3>
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
              <h3 class="text_inq text-slate-800">운영문의</h3>
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
              ref="kakao_map"
              :style="{ width: '100%', height: '80vh' }"
            ></div>
            <!-- <KakaoMap :lat="coordinate.lat" :lng="coordinate.lng" :draggable="true">
              <KakaoMapMarker :lat="coordinate.lat" :lng="coordinate.lng"></KakaoMapMarker>
            </KakaoMap> -->

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
<script>
import { onMounted, ref } from 'vue'
const { VITE_APP_KAKAO_MAP_KEY } = import.meta.env

export default {
  name: 'App',
  setup() {
    let map_data = ref({
      appKey: VITE_APP_KAKAO_MAP_KEY, // API 키 값
      map: null,
      lat: 37.5147464245043, // 위도
      lng: 126.897536835727, // 경도
      level: 3, // 맵 레벨
    })
    let kakao_map = ref(null)

    // 카카오 API 설정 함수 + 카카오 맵 생성
    const set_kakao_api = () => {
      // 카카오 맵 API 불러오기
      if (window.kakao && window.kakao.maps) {
        set_kakao_map()
      } else {
        const script = document.createElement('script')
        script.onload = () => window.kakao.maps.load(set_kakao_map)
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${map_data.value.appKey}`
        document.head.appendChild(script)
      }
    }

    // 카카오 맵 생성 함수
    const set_kakao_map = () => {
      console.log('카카오 맵 생성')
      const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(37.5147464245043, 126.897536835727), //지도의 중심 좌표.
        level: 3,
      }
      map_data.value.map = new window.kakao.maps.Map(kakao_map.value, options) // 지도 생성 및 객체 리턴
    }

    onMounted(() => {
      // 컴포넌트가 마운트된 후 맵 초기화 함수 실행
      // Kakao API 스크립트는 index.html에서 로드되므로, 별도의 동적 로딩이 필요 없습니다.
      set_kakao_api()
    })

    return {
      kakao_map, // DOM ref 때문에 꼭 있어야함
      map_data,
      set_kakao_api,
      set_kakao_map,
    }
  },
}
</script>

<style scoped>
/* 컨테이너 스타일 (필요하다면 추가) */
.daum-roughmap-container {
  /* 스타일을 추가하여 지도가 잘 보이도록 설정할 수 있습니다. */
  margin: 0 auto; /* 중앙 정렬 예시 */
  border: 1px solid #ccc;
  max-width: 100%;
}

.grid_style {
  display: grid;
  margin-bottom: 4rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;
  text-align: center;
}

@media (min-width: 768px) {
  .grid_style {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.text_inq {
  margin-bottom: 1rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
}
</style>
