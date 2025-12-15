<template>
  <main>
    <section class="comp_section">
      <div class="comp_wrapper">
        <div class="comp_content">
          <div class="comp_text">
            <h2 class="comp_h2">CEO 인사말</h2>
            <p class="comp_description">미래를 창조하는 주식회사 포엠에스</p>
          </div>

          <div class="slate_box">
            <p class="slate_text">
              인정받는 기업, 성장하는 기업, 직원이 우선시 되는 기업을 만들기 위해 고객과 함께
              하겠습니다.
            </p>
          </div>

          <div class="comp_text">
            <h3 class="ceo_text">
              안녕하세요?<br />
              저희 포엠에스 웹사이트를 방문해 주신 모든 분들께 감사의 말씀을 드립니다.
            </h3>
          </div>

          <div class="space">
            <div class="comp_grid">
              <img src="/image/sub/company_02_01.jpg" alt="콘텐츠 이미지" class="img" />
              <p class="slate_text_2">
                21세기 IT 기술은 급변하는 사회.경제 환경에 맞추어 얼마만큼의 고객 및 사용자들에게
                가능한 서비스를 제공하고 기업의 목표 달성 여부에 따라 성공여부가 결정되는 만큼
                서비스의 가치 중요성이 증대되고 있는 상황입니다. 이에 시스템 개발 경험 및 눈높이
                맞는 개발 관리가 더욱 중요해 지고 있다고 판단됩니다.
              </p>
            </div>

            <div
              class="comp_grid"
              style="
                margin-top: calc(4rem * calc(1 - var(--tw-space-y-reverse)));
                margin-bottom: calc(4rem * var(--tw-space-y-reverse));
              "
            >
              <p class="slate_text_3">
                포엠에스는 “사람 중심”의 경영철학으로 항상 고객의 요구에 만족한 IT 기술 및 시스템을
                구축하여 IT 운영 환경이 최적으로 유지될 수 있고 최고의 서비스 및 만족을 제공하여
                고객의 신뢰를 바탕으로 상호 Win-Win 할 수 있는 기업이 될 것입니다.
              </p>
              <img src="/image/sub/company_02_02.jpg" alt="콘텐츠 이미지" class="img" />
            </div>

            <div
              class="comp_grid"
              style="
                margin-top: calc(4rem * calc(1 - var(--tw-space-y-reverse)));
                margin-bottom: calc(4rem * var(--tw-space-y-reverse));
              "
            >
              <img src="/image/sub/company_02_03.jpg" alt="콘텐츠 이미지" class="img" />
              <p class="slate_text_2">
                포엠에스는 앞으로도 고객과의 약속을 최우선으로 하며, 고객의 최고의 가치 창출 및 고객
                만족의 극대화를 더욱더 추고하여 항상 찾고 싶고 지속적인 관계를 유지하고 싶은 최고의
                파트너가 될 수 있도록 저와 모든 직원들은 역량을 집중하여 노력하겠습니다.
              </p>
            </div>
          </div>

          <div class="from_div">
            <p class="from_p">㈜포엠에스 대표이사 나연채</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
.slate_box {
  padding: 3rem;
  margin-bottom: 4rem;
  border-radius: 0.5rem;
  border-left-width: 4px;
  text-align: left;
  background-color: var(--color-slate-100);
  border-color: var(--color-teal-600);
}

.slate_text {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  line-height: 1.625;
  color: var(--color-slate-700);
}

@media (min-width: 768px) {
  .slate_text {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}

.ceo_text {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: var(--color-slate-800);
}

@media (min-width: 768px) {
  .ceo_text {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
}

.space {
  margin-top: 4rem;
}

.img {
  border-radius: 0.5rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.slate_text_2 {
  font-size: 1.125rem;
  line-height: 1.75rem;
  line-height: 1.625;
  white-space: pre-line;
  color: var(--color-slate-600);
}

.slate_text_3 {
  font-size: 1.125rem;
  line-height: 1.75rem;
  line-height: 1.625;
  white-space: pre-line;
  color: var(--color-slate-600);
}

@media (min-width: 768px) {
  .slate_text_3 {
    order: 9999;
  }
}

.from_div {
  margin-top: 6rem;
  text-align: right;
}

.from_p {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
}
</style>
