import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from '@/api/axios.js';
import { useRouter } from 'vue-router';

export const userStore = defineStore('session', () => {
  const user = ref(null);

  const login = (empNo, empNm) => {
    user.value = { empNo, empNm };
    sessionStorage.setItem("empNo", empNo);
    sessionStorage.setItem("empNm", empNm);
  };

  const logout = async () => {
    try{
      await axios.post("/api/logout");
      user.value = null;
      sessionStorage.removeItem("empNo");
      sessionStorage.removeItem("empNm");
      useRouter().push({path: '/', query: {menuId: 'HOME'}})
    } catch {
      // TO-DO
      console.log("🔒", "로그아웃 실패.");
    }
  }

  const checkState = () => {
    sessionStorage.getItem("empNo");
    return user.value && user.value.empNo;
  }

  return { user, login, logout, checkState };
})
