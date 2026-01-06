<template>
  <div class="max-w-4xl mx-auto p-6 md:min-w-3xl">
    <section class="section">
      <div class="p-6 bg-white rounded-lg shadow-md mb-6">
        <h1 class="flex items-center text-xl font-bold text-gray-800">
          <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="4" y="2" width="16" height="18" rx="2" stroke-width="2"/>
            <path d="M8 8 L10 16 L12 8 M12 8 L14 16 L16 8 M8 12 L16 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          경비신청등록
        </h1>
        <p class="text-sm text-gray-600 mt-2">OOO님</p>
      </div>

      <div class="grid gap-6 grid-cols-1 md:grid-cols-2">
        <div class="space-y-6">
          <div class="p-6 bg-white rounded-lg shadow-md">
            <h2 class="flex items-center text-lg font-semibold mb-6 text-gray-800">
              비용정보
            </h2>

            <div class="space-y-4">
              <div class="flex items-center gap-2">
                <label class="w-16 min-w-16 text-sm font-medium text-gray-700">프로젝트</label>
                <div class="relative flex-1">
                  <select class="flex-1 w-full h-10 border border-gray-300 rounded-md shadow-sm py-2 px-3 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 md:text-sm">
                    <option hidden disabled selected>선택</option>
                    <optgroup label="진행중">
                      <option disabled>프로젝트 A</option>
                      <option disabled>프로젝트 B</option>
                      <option>프로젝트 C</option>
                      <option>프로젝트 D</option>
                      <option>프로젝트 E</option>
                      <option>프로젝트 F</option>
                    </optgroup>
                    <optgroup label="종료">
                      <option>프로젝트 G</option>
                      <option>프로젝트 H</option>
                      <option>프로젝트 I</option>
                      <option>프로젝트 J</option>
                      <option>프로젝트 K</option>
                      <option>프로젝트 L</option>
                      <option>프로젝트 M</option>
                      <option>프로젝트 N</option>
                      <option>프로젝트 O</option>
                    </optgroup>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    ▼
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-2">
                <label class="w-16 min-w-16 text-sm font-medium text-gray-700">비용구분</label>
                <div class="relative flex-1">
                  <select class="flex-1 w-full h-10 border border-gray-300 rounded-md shadow-sm py-2 px-3 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-teal-700 focus:border-teal-700 md:text-sm">
                    <option hidden disabled selected>선택</option>
                    <option v-for="value in paymentType" :key="value.commonCd">{{ value.commonNm }}</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    ▼
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-2">
                <label class="w-16 min-w-16 text-sm font-medium text-gray-700">사용일자</label>
                <input type="date" class="flex-1 w-full h-10 min-w-0 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-teal-700 focus:border-teal-700 md:text-sm" />
              </div>

              <div class="flex items-center gap-2">
                <label class="w-16 min-w-16 text-sm font-medium text-gray-700">사용금액</label>
                <input type="number" class="flex-1 w-full h-10 no-icons border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-teal-700 focus:border-teal-700 md:text-sm" maxlength="12"/>
              </div>

              <div class="flex items-center gap-2">
                <label class="w-16 min-w-16 text-sm font-medium text-gray-700">비고</label>
                <input type="text" class="flex-1 w-full h-10 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-teal-700 focus:border-teal-700 md:text-sm" />
              </div>
            </div>
          </div>

          <div class="p-6 bg-white rounded-lg shadow-md">
            <h2 class="flex items-center text-lg font-semibold mb-4 text-gray-800">
              첨부파일
            </h2>
            <div class="flex items-center space-x-2">
              <span class="flex-1 h-10 text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-teal-700 focus:border-teal-700 dragging-disable md:text-sm">
                {{ selectedFiles[0]?.name?.length > 14 ? selectedFiles[0].name.substring(0, 14) + '...' : selectedFiles[0]?.name }}{{ selectedFiles.length > 1 ? ` 외 ${selectedFiles.length - 1}건` : '' }}
              </span>
              <input type="file" ref="fileInput" @change="handleFileChange" class="hidden" multiple />
              <button @click="$refs.fileInput.click()" class="bg-teal-500 text-white h-10 py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                파일 선택
              </button>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="p-6 bg-white rounded-lg shadow-md">
            <div class="space-y-4">
              <h2 class="flex items-center text-lg font-semibold mb-4 text-gray-800">
                카드
              </h2>

              <div class="flex items-center gap-2">
                <label class="w-16 min-w-16 text-sm font-medium text-gray-700">구분</label>
                <div class="flex-1 flex space-x-2">
                  <label class="flex-1 py-2 px-1 text-center text-sm font-medium rounded-md cursor-pointer transition-colors duration-200" :class="selectedPayType === 'personal' ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'">
                    개인카드
                    <input type="radio" name="payTypes" value="personal" v-model="selectedPayType" class="hidden" checked />
                  </label>
                  <label class="flex-1 py-2 px-1 text-center text-sm font-medium rounded-md cursor-pointer transition-colors duration-200" :class="selectedPayType === 'company' ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'">
                    법인카드
                    <input type="radio" name="payTypes" value="company" v-model="selectedPayType" class="hidden" />
                  </label>
                  <label class="flex-1 py-2 px-1 text-center text-sm font-medium rounded-md cursor-pointer transition-colors duration-200" :class="selectedPayType === 'none' ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'">
                    현금
                    <input type="radio" name="payTypes" value="none" v-model="selectedPayType" class="hidden" />
                  </label>
                </div>
              </div>

              <div class="flex items-center gap-2">
                <label class="w-16 min-w-16 text-sm font-medium text-gray-700">카드사</label>
                <div class="relative flex-1">
                  <select class="flex-1 w-full h-10 border border-gray-300 rounded-md shadow-sm py-2 px-3 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 md:text-sm">
                    <option hidden disabled selected>선택</option>
                    <option v-for="value in banks" :key="value.commonCd">{{ value.commonNm }}</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    ▼
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-2">
                <label class="w-16 min-w-16 text-sm font-medium text-gray-700">카드번호</label>
                <input type="text" class="flex-1 w-full h-10 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 md:text-sm" />
              </div>
            </div>
          </div>

          <div class="h-max p-6 bg-white rounded-lg shadow-md">
            <h2 class="flex items-center text-lg font-semibold mb-4 text-gray-800">
              사용용도상세
            </h2>
            <textarea class="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm" rows="4" placeholder="사용 용도를 입력하세요."></textarea>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { banks, paymentType } from './temp_finance.js'
import { ref } from 'vue';

const selectedPayType = ref('personal')
const selectedFiles = ref([])
const fileInput = ref(null)

const handleFileChange = (event) => {
  selectedFiles.value = Array.from(event.target.files)
}
</script>
