<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 1. Top 버튼 표시 여부 상태 관리
const showBackToTop = ref(false)

// 2. 스크롤 이벤트 핸들러
const handleScroll = () => {
  // 스크롤이 400px 이상 내려가면 버튼 보이기
  showBackToTop.value = window.scrollY > 400
}

// 3. 최상단 이동 함수
const scrollToTop = (e) => {
  e.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

// 4. 라이프사이클 훅 (컴포넌트가 화면에 붙을 때 이벤트 등록, 사라질 때 해제)
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <footer class="site-footer">
    <div class="wrapper">
      <div class="footer-grid">
        <div class="col-company-info">
          <router-link to="/" class="footer-logo-link">
            <img src="/image/comm/foot_logo.png" alt="4MS Corp Logo" class="footer-logo" />
          </router-link>
          <p class="company-desc">
            (주)포엠에스<br />
            대표이사: 나연채<br />
            본사: 서울특별시 영등포구 경인로 775, 2동 509호
          </p>
        </div>

        <div class="col-links">
          <h4 class="footer-title">Company</h4>
          <ul class="footer-list">
            <li><router-link to="/company/info" class="link">회사소개</router-link></li>
            <li><router-link to="/company/ceo" class="link">CEO 인사말</router-link></li>
            <li><router-link to="/company/map" class="link">오시는 길</router-link></li>
          </ul>
        </div>

        <div class="col-links">
          <h4 class="footer-title">Business</h4>
          <ul class="footer-list">
            <li><router-link to="/business" class="link">SI/SM 사업</router-link></li>
            <li><router-link to="/solution/ai" class="link">AI 솔루션</router-link></li>
            <li><router-link to="/solution/farm" class="link">스마트팜</router-link></li>
          </ul>
        </div>

        <div class="col-links">
          <h4 class="footer-title">Contact</h4>
          <ul class="footer-list">
            <li><a href="mailto:isdkorea1@gmail.com" class="link">개발 문의</a></li>
            <li><a href="mailto:cmkil5150@gmail.com" class="link">운영 문의</a></li>
            <li class="info-text">Tel: 02-6954-1662</li>
            <li class="info-text">Fax: 02-6954-1663</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">ⓒ 2016 4MS . All rights reserved.</p>
        <div class="social-links">
          <a href="#" class="social-icon" aria-label="Facebook">
            <svg class="icon" fill="currentColor" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <a
      href="#"
      class="back-to-top-btn"
      :class="{ show: showBackToTop }"
      @click="scrollToTop"
      aria-label="Back to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon-top"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </a>
  </footer>
</template>

<style scoped>
/* Reset */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}

/* Wrapper & Layout */
.site-footer {
  background-color: #1e293b; /* slate-800 */
  color: #cbd5e1; /* slate-300 */
  padding-top: 4rem;
  font-family: 'NanumGothic', sans-serif;
}

.wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Grid System */
.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding-bottom: 4rem;
}

/* Responsive Grid */
@media (min-width: 640px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
}

/* Column Styles */
.footer-logo-link {
  display: inline-block;
  margin-bottom: 1rem;
}

.footer-logo {
  height: 2rem;
}

.company-desc {
  font-size: 0.875rem;
  color: #94a3b8; /* slate-400 */
  line-height: 1.6;
}

.footer-title {
  color: white;
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.footer-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 0.875rem;
}

.link {
  color: #cbd5e1;
  transition: color 0.3s ease;
}

.link:hover {
  color: white;
}

.info-text {
  padding-top: 0.5rem;
}

/* Bottom Bar */
.footer-bottom {
  border-top: 1px solid #334155; /* slate-700 */
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

@media (min-width: 640px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
  }
}

.copyright {
  font-size: 0.875rem;
  color: #64748b; /* slate-500 */
  order: 2;
}

@media (min-width: 640px) {
  .copyright {
    order: 1;
  }
}

.social-links {
  order: 1;
  display: flex;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .social-links {
    order: 2;
  }
}

.social-icon {
  color: #94a3b8;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: white;
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
  display: block;
}

/* Back to Top Button */
.back-to-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #0d9488; /* teal-600 */
  color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s ease;
  z-index: 50;
}

.back-to-top-btn:hover {
  background-color: #0f766e; /* teal-700 */
  transform: translateY(-4px); /* 살짝 위로 뜸 */
}

/* Show State (Managed by Vue logic) */
.back-to-top-btn.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.icon-top {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
