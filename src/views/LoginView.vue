<template>
  <section class="flex h-screen pt-16 justify-center items-center">
    <div class="flex justify-center bg-white/80 backdrop-blur-sm w-full h-full p-8 md:w-96 md:h-auto md:shadow-xl md:rounded-xl md:border md:border-gray-200">
      <div class="w-full">
        <div class="text-center mb-8">
          <img class="mx-auto mb-4 dragging-disable" src="/image/comm/logo2.png" alt="Logo" />
        </div>
        <form @submit.prevent="loginSubmit" class="space-y-6">
          <div class="input-container mb-6 relative">
            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
            </svg>
            <input
              name="empNo"
              type="text"
              class="mt-1 block w-full pl-10 pr-3 py-2 border-0 rounded-none shadow-none placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
              placeholder="아이디"
              v-model="loginInfo.empNo"
            />
          </div>
          <div class="input-container mb-6 relative">
            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            <input
              name="password"
              type="password"
              class="mt-1 block w-full pl-10 pr-3 py-2 border-0 rounded-none shadow-none placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
              placeholder="비밀번호"
              v-model="loginInfo.password"
            />
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-3 px-4 mb-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 dragging-disable"
            >
              <span>로그인</span>
            </button>
          </div>

          <div class="flex mb-2 items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-3 w-3 accent-teal-600 border-gray-300 rounded dragging-disable"
                v-model="loginInfo.remember"
              />
              <label for="remember-me" class="ml-2 block text-xs text-gray-900 dragging-disable">
                아이디 저장
              </label>
            </div>
            <div class="flex items-center text-sky-500 cursor-pointer dragging-disable">
              <span class="text-xs">비밀번호 초기화</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from '@/api/axios.js';
import { userStore } from '@/store/pinia.store.js';

const router = useRouter();
const session = userStore();

const loginInfo = ref({
  empNo: 'admin',
  password: '4ms1001',
  remember: false,
});

const loginSubmit = async () => {
  // TO-DO: 서버 구축 후 사용
  axios.post('api/login', {empNo: loginInfo.value.empNo, passwd: loginInfo.value.password})
    .then((response) => {

      console.log("🗝️", response.data);

      switch(response.data.result){
        case "OK":
          session.login(response.data.empNo, response.data.empNm);
          router.push({path: '/', query: {menuId: 'HOME'}});
          break;
        case "ID_ERROR":
        case "PASS_ERROR":
          alert("등록되지 않은 이메일이거나 틀린 비밀번호입니다.");
          break;
      }
    });
};
</script>

<style scoped>
.input-container {
  position: relative;
}

.input-container::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 1px;
  background-color: var(--color-slate-600);
}

.input-container::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1.88px;
  background-color: #6366f1;
  transition: width 0.3s ease;
}

.input-container:focus-within::after {
  width: 100%;
}

.input-container:focus-within svg {
  stroke: #6366f1;
}
</style>
