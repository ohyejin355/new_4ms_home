import { defineStore } from 'pinia';
import { ref } from 'vue';

export const userStore = defineStore('session', () => {
  const user = ref(null);

  const login = (email, password, name) => {
    // TO-DO: 로그인 성공여부 및 인증처리 로직 추가 필요
    user.value = { email, password, name };
  };

  const checkState = () => {
    // TO-DO: 자동로그인 및 세션유지 처리 로직 추가 필요
    return user.value && user.value.email;
  }

  return { user, login, checkState };
})
