<template>
  <div class="max-w-4xl mx-auto p-6 md:min-w-3xl">
    <section class="section">
      <div class="p-6 bg-white rounded-lg shadow-md mb-6">
        <h1 class="flex items-center text-xl font-bold text-gray-800">
          <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          내 정보
        </h1>
      </div>

      <div class="grid gap-6 grid-cols-1 md:grid-cols-2">
        <div class="space-y-6">
          <div class="p-6 bg-white rounded-lg shadow-md">
            <h2 class="flex items-center text-lg font-semibold mb-6 text-gray-800">
              내 정보
            </h2>

            <div class="space-y-4">
              <div class="flex items-center gap-2">
                <label class="w-16 min-w-16 text-sm font-medium text-gray-700">이름</label>
                <span class="flex-1 text-sm text-gray-900">{{ userInfo.name }}</span>
              </div>

              <div class="flex items-center gap-2">
                <label class="w-16 min-w-16 text-sm font-medium text-gray-700">직급</label>
                <span class="flex-1 text-sm text-gray-900">{{ userInfo.position }}</span>
              </div>

              <div class="flex items-center gap-2">
                <label class="w-16 min-w-16 text-sm font-medium text-gray-700">사번</label>
                <span class="flex-1 text-sm text-gray-900">{{ userInfo.employeeId }}</span>
              </div>

              <div class="flex items-center gap-2">
                <label class="w-16 min-w-16 text-sm font-medium text-gray-700">비밀번호</label>
                <span class="flex-1 text-sm text-gray-500">••••••••</span>
                <button class="ml-2 px-3 py-1 bg-teal-500 text-white text-sm rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                  변경
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="p-6 bg-white rounded-lg shadow-md">
            <h2 class="flex items-center justify-between text-lg font-semibold mb-6 text-gray-800">
              <span>내 카드관리</span>
              <div class="flex items-center space-x-2">
                <button
                  v-if="!isEditMode"
                  @click="toggleEditMode"
                  class="px-3 py-1 text-sm text-gray-500 cursor-pointer hover:text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  수정
                </button>
                <div v-else class="flex items-center space-x-2">
                  <button
                    @click="toggleEditMode"
                    class="px-3 py-1 text-sm text-green-500 cursor-pointer hover:text-green-700 border border-green-300 rounded-md hover:bg-green-50"
                  >
                    저장
                  </button>
                  <button
                    @click="cancelEdit"
                    class="px-3 py-1 text-sm text-gray-500 cursor-pointer hover:text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    취소
                  </button>
                </div>
              </div>
            </h2>

            <div class="space-y-2">
              <div
                v-for="(card, index) in cardList"
                :key="index"
                class="border border-gray-200 rounded-md"
                :class="{ 'opacity-50 bg-gray-100': card.status === 'deleting' }"
                :draggable="isEditMode"
                @dragstart="onDragStart($event, index)"
                @dragover.prevent
                @drop="onDrop($event, index)"
              >
                <div class="flex items-center p-4" @click="toggleAccordion(index)">
                  <svg
                    v-if="isEditMode"
                    class="w-4 h-4 text-gray-500 cursor-move mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 11h16M4 16h16" />
                  </svg>
                  <div class="flex-1">
                    <input
                      v-if="card.status === 'new'"
                      v-model="card.name"
                      class="text-sm font-medium text-gray-900 bg-transparent border-none outline-none w-full"
                      placeholder="카드 이름 입력"
                    />
                    <span v-else class="text-sm font-medium text-gray-900">{{ card.name }}</span>
                  </div>
                  <div class="flex items-center space-x-2 ml-2">
                    <svg
                      v-if="!isEditMode"
                      class="p-1 w-6 h-6 text-gray-400 transform transition-transform duration-200"
                      :class="{ 'rotate-180': activeAccordion.includes(index) || card.status === 'new' || isEditMode }"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    <button
                      v-if="isEditMode"
                      @click="removeCard(index)"
                      class="text-red-500 hover:text-red-700 p-1"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                  <div v-if="activeAccordion.includes(index) || card.status === 'new' || isEditMode" class="px-4 pb-4 space-y-2">
                    <div class="flex items-center gap-2">
                      <label class="w-16 min-w-16 text-sm font-medium text-gray-700">카드번호</label>
                      <input
                        v-if="card.status === 'new'"
                        v-model="card.cardNumber"
                        class="flex-1 text-sm text-gray-900 bg-transparent border-none outline-none"
                        placeholder="카드번호 입력"
                      />
                      <span v-else class="flex-1 text-sm text-gray-900">{{ card.cardNumber }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <label class="w-16 min-w-16 text-sm font-medium text-gray-700">카드사</label>
                      <input
                        v-if="card.status === 'new'"
                        v-model="card.cardCompany"
                        class="flex-1 text-sm text-gray-900 bg-transparent border-none outline-none"
                        placeholder="카드사 입력"
                      />
                      <span v-else class="flex-1 text-sm text-gray-900">{{ card.cardCompany }}</span>
                    </div>
                  </div>
              </div>

              <button
                v-if="isEditMode"
                @click="addCard"
                class="w-full flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-md text-gray-500 hover:text-gray-700 hover:border-gray-400 transition-colors"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
                카드 추가
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 사용자 정보 데이터
const userInfo = ref({
  name: '홍길동',
  position: '대리',
  employeeId: 'EMP001'
})

// 카드 리스트 데이터
const cardList = ref([
  {
    name: '개인카드',
    cardNumber: '****-****-****-1234',
    cardCompany: '신한카드',
    status: 'normal'
  },
  {
    name: '법인카드',
    cardNumber: '****-****-****-5678',
    cardCompany: '삼성카드',
    status: 'normal'
  },
  {
    name: '체크카드',
    cardNumber: '****-****-****-9012',
    cardCompany: '국민카드',
    status: 'normal'
  }
])

// 아코디언 상태 관리
const activeAccordion = ref([])
const isEditMode = ref(false)
const draggedIndex = ref(null)

const toggleAccordion = (index) => {
  if (!isEditMode.value) {
    const idx = activeAccordion.value.indexOf(index)
    if (idx > -1) {
      activeAccordion.value.splice(idx, 1)
    } else {
      activeAccordion.value.push(index)
    }
  }
}

const toggleEditMode = () => {
  if (isEditMode.value) {
    // 편집 모드 종료 시 실제 삭제 처리 및 상태 초기화
    cardList.value = cardList.value.filter(card => card.status !== 'deleting')
    cardList.value.forEach(card => {
      if (card.status === 'new') {
        card.status = 'normal'
      }
    })
  }
  isEditMode.value = !isEditMode.value
  if (isEditMode.value) {
    // 편집 모드 시작 시 모든 카드 확장
    activeAccordion.value = cardList.value.map((_, index) => index)
  } else {
    activeAccordion.value = [] // 편집 모드 종료 시 아코디언 닫기
  }
}

const addCard = () => {
  const newCard = {
    name: '',
    cardNumber: '',
    cardCompany: '',
    status: 'new'
  }
  cardList.value.push(newCard)
  if (isEditMode.value) {
    activeAccordion.value.push(cardList.value.length - 1) // 새 카드 확장
  }
}

const removeCard = (index) => {
  if (cardList.value[index].status === 'new') {
    cardList.value.splice(index, 1)
    // activeAccordion에서 제거된 인덱스 이후의 인덱스 조정
    activeAccordion.value = activeAccordion.value.filter(accIndex => accIndex !== index).map(accIndex => accIndex > index ? accIndex - 1 : accIndex)
  } else if (cardList.value[index].status === 'deleting') {
    cardList.value[index].status = 'normal'
  } else {
    cardList.value[index].status = 'deleting'
  }
}

const cancelEdit = () => {
  // 새로 추가된 카드 제거
  cardList.value = cardList.value.filter(card => card.status !== 'new')
  // 삭제 예정 카드 복원
  cardList.value.forEach(card => {
    if (card.status === 'deleting') {
      card.status = 'normal'
    }
  })
  isEditMode.value = false
  activeAccordion.value = []
}

const onDragStart = (event, index) => {
  draggedIndex.value = index
  event.dataTransfer.effectAllowed = 'move'
}

const onDrop = (event, dropIndex) => {
  const dragIndex = draggedIndex.value
  if (dragIndex !== null && dragIndex !== dropIndex) {
    const draggedItem = cardList.value.splice(dragIndex, 1)[0]
    cardList.value.splice(dropIndex, 0, draggedItem)
    // 드래그 앤 드롭 후 activeAccordion 재설정 (수정 모드에서는 모든 카드 확장 유지)
    if (!isEditMode.value) {
      activeAccordion.value = []
    }
  }
  draggedIndex.value = null
}
</script>
