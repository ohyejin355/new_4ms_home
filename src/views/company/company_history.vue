<template>
  <main>
    <section class="comp_section">
      <div class="comp_wrapper">
        <div class="comp_content">
          <div class="comp_text">
            <h2 class="comp_h2">회사연혁</h2>
            <p class="comp_description">다양한 업무 경험자로 구성된 주식회사 포엠에스</p>
          </div>

          <div class="relative_div">
            <div class="absolute_div"></div>

            <div class="relative_div">
              <div class="item">
                <div class="right_text">
                  <h3 class="year">2023 ~ 2024</h3>
                </div>
                <div class="w-1/2 pl-8">
                  <ul class="list-disc list-inside text-slate-600 space-y-2">
                    <li>경제통합 차세대 시스템 구축(채권/채무, 회계, 세무, 자금)</li>
                    <li>농협은행 2022년 NH농협은행 디지털도급 운영</li>
                    <li>농협상호금융 2023년 IT상호금융부 도급인력 운영</li>
                  </ul>
                </div>
              </div>

              <div class="item">
                <div class="right_text">
                  <h3 class="year">2022</h3>
                </div>
                <div class="w-1/2 pl-8">
                  <ul class="list-disc list-inside text-slate-600 space-y-2">
                    <li>농협은행 2022년 NH농협은행 디지털도급 운영</li>
                    <li>신한DS 협력사 등록</li>
                    <li>인사회계_ERP(전사적자원관리) 시스템 저작권 등록</li>
                  </ul>
                </div>
              </div>

              <div class="item">
                <div class="right_text">
                  <h3 class="year">2021</h3>
                </div>
                <div class="w-1/2 pl-8">
                  <ul class="list-disc list-inside text-slate-600 space-y-2">
                    <li>SK C&C 협력사 등록</li>
                    <li>농협은행 2021년 NH농협은행 디지털도급 운영</li>
                    <li>농협 경제 스마트워크 시스템 고도화 구축</li>
                    <li>금융지주 연결결산시스템 분리 구축</li>
                  </ul>
                </div>
              </div>

              <div class="item">
                <div class="right_text">
                  <h3 class="year">2020</h3>
                </div>
                <div class="w-1/2 pl-8">
                  <ul class="list-disc list-inside text-slate-600 space-y-2">
                    <li>AI ABLEbot 챗봇 솔루션 저작권 등록</li>
                    <li>LG CNS 협력사 등록</li>
                    <li>농협은행 (공통)2020년 디지털금융 도급인력 운용</li>
                    <li>경제지주 전속 및 공통관리비 정산전산화 구축</li>
                  </ul>
                </div>
              </div>

              <div class="item">
                <div class="right_text">
                  <h3 class="year">2018 ~ 2019</h3>
                </div>
                <div class="w-1/2 pl-8">
                  <ul class="list-disc list-inside text-slate-600 space-y-2">
                    <li>NICE 디엔비 우수기술기업 인증서 흭득</li>
                    <li>한국아이비엠㈜ 협력사 등록</li>
                    <li>㈜신세계아이엔씨 협력사 등록</li>
                    <li>농협은행 (공통)2018년/2019년 디지털금융 도급인력 운영</li>
                    <li>팜매니저 저작권 등록 / 벤쳐기업 인증서 흭득</li>
                  </ul>
                </div>
              </div>

              <div class="item">
                <div class="right_text">
                  <h3 class="year">2016 ~ 2017</h3>
                </div>
                <div class="w-1/2 pl-8">
                  <ul class="list-disc list-inside text-slate-600 space-y-2">
                    <li>기업부설연구소 인증서 흭득</li>
                    <li>'이동비콘의 위치 추정 시스템 및 그 방법' 특허 등록</li>
                    <li>㈜엔디에스 협력사 등록</li>
                    <li>㈜농협정보시스템 협력사 등록</li>
                    <li>㈜포엠에스(4MS Co., Ltd.) 설립</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
.relative_div {
  position: relative;
}

.absolute_div {
  position: absolute;
  left: 50%;
  margin-left: -0.125rem;
  width: 0.25rem;
  height: 100%;
  background-color: var(--color-slate-200);
}

.item {
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
}

.right_text {
  padding-right: 2rem;
  width: 50%;
  text-align: right;
}

.year {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
}
</style>
