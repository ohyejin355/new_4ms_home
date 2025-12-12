<template>
  <div class="project-page">
    <section class="section">
      <div class="wrapper">
        <div class="page-header text-center">
          <h2 class="page-title">주요프로젝트</h2>
          <p class="page-desc">주식회사 포엠에스는 다양한 업무를 수행하고 있습니다.</p>
        </div>

        <div class="project-years">
          <a
            class="year-button dragging-disable"
            v-for="year in uniqueYears"
            :key="year"
            :selected="selectedYear === year"
            @click="onSelectYear(year)">{{ year }}년</a>
        </div>

        <div class="project-content">
          <div class="selected-year layout-pc">
            {{ selectedYear }}
          </div>
          <div class="project-list">
            <div
              v-for="project in projectsByYear"
              :key="project.year + project.month + project.partner + project.name"
              class="project-item"
            >
              <p class="project-date">{{ project.year }}.{{ project.month }}</p>
              <p class="project-partner">{{ project.partner }}</p>
              <h3 class="project-name">{{ project.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import Projects from './temp_projects.js';

  const years = Projects.value.map(project => project.year);
  const uniqueYears = [...new Set(years)].sort((a, b) => b - a);
  const selectedYear = ref(uniqueYears[0]);
  const projectsByYear = ref(Projects.value.filter(project => project.year === selectedYear.value));

  const onSelectYear = (year) => {
    selectedYear.value = year;
    projectsByYear.value = Projects.value.filter(project => project.year === year);
  }
</script>

<style scoped>
  .page-header {
    margin-bottom: 4rem;
  }

  .page-title {
    font-size: 1.875rem;
    font-weight: 900;
    color: #0f172a;
    margin-bottom: 1rem;
  }

  .page-desc {
    font-size: 1.125rem;
    color: #475569;
  }

  .project-years {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    justify-content: center;
  }

  .year-button {
    color: rgb(51 65 85 / 1);
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    background-color: rgb(226 232 240 / 1);
    border-radius: 0.375rem;
    cursor: pointer;
    font-size: 12px;
    line-height: 18px;
  }

  .year-button:hover,
  .year-button[selected="true"] {
    color: rgb(255 255 255 / 1);
    background-color: #0f766e;
    box-shadow:
      0 0 #0000,
      0 0 #0000,
      0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  .project-content {
    display: flex;
  }

  .selected-year {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
    width: 16.666667%;
    unicode-bidi: isolate;
    color: rgb(30 41 59 / 1);
  }

  .project-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
  }

  .project-item {
    --tw-border-opacity: 1;
    border-color: rgb(226 232 240 / 1);
    gap: 1rem;
    align-items: center;
    border-bottom-width: 1px;
    padding-bottom: 1rem;
    box-sizing: border-box;
    border-style: solid;
  }

  .project-date {
    color: rgb(100 116 139 / 1);
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .project-partner {
    color: rgb(30 41 59 / 1);
    line-height: 1.75rem;
    font-weight: 600;
  }

  .project-name {
    line-height: 1.125rem;
    font-size: 12px;
    color: rgb(51 65 85 / 1);
  }

  @media (min-width: 768px) {
    .page-title {
      font-size: 2.25rem;
    }

    .project-list {
      padding-left: 2rem;
      --tw-border-opacity: 1;
      border-color: rgb(226 232 240 / var(--tw-border-opacity, 1));
      border-left-width: 2px;
      box-sizing: border-box;
      border-style: solid;
      width: 83.333333%;
    }

    .project-item {
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }

    .project-date {
      grid-column: span 2 / span 2;
      color: rgb(100 116 139 / 1);
    }

    .project-partner {
      font-size: 1rem;
      line-height: 1.5rem;
      grid-column: span 4 / span 4;
    }

    .project-name {
      grid-column: span 6 / span 6;
    }
  }
</style>
