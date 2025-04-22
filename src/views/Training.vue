<template>
  <LoadingScreen v-if="isLoading" />
  <div v-else>
    <div class="page-wrapper">
      <Navbar />
      <h1 class="title">Training Schedule</h1>

      <div class="schedule-wrapper">
        <div class="grid">
          <TrainingCard
              v-for="(day, index) in trainingSchedule"
              :key="index"
              :day="day"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';

import Navbar from '../components/Navbar.vue';
import LoadingScreen from '../components/LoadingScreen.vue';
import TrainingCard from '../components/TrainingCard.vue';

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});

const trainingSchedule = [
  {
    day: 'Понеделник',
    belts: [
      { name: 'Бел', time: 'Нема тренинг', image: '/assets/white-belt.png' },
      { name: 'Жолт', time: 'Нема тренинг', image: '/assets/yellow-belt.png' },
      { name: 'Портокалов', time: 'Нема тренинг', image: '/assets/orange-belt.png' },
      { name: 'Црвен', time: '19:30', image: '/assets/red-belt.png' },
      { name: 'Виолетов', time: '19:30', image: '/assets/purple-belt.png' },
      { name: 'Зелен', time: '19:30', image: '/assets/green-belt.png' },
      { name: 'Син', time: '19:30', image: '/assets/blue-belt.png' },
      { name: 'Темно син', time: '20:30', image: '/assets/darkBlue-belt.png' },
      { name: 'Кафеав', time: '20:30', image: '/assets/brown-belt.png' },
      { name: 'Црн', time: '20:30', image: '/assets/black-belt.png' },
    ],
  },
  {
    day: 'Вторник',
    belts: [
      { name: 'Бел', time: '17:30', image: '/assets/white-belt.png' },
      { name: 'Жолт', time: '17:30', image: '/assets/yellow-belt.png' },
      { name: 'Портокалов', time: '18:30', image: '/assets/orange-belt.png' },
      { name: 'Црвен', time: '18:30', image: '/assets/red-belt.png' },
      { name: 'Виолетов', time: '19:30', image: '/assets/purple-belt.png' },
      { name: 'Зелен', time: '19:30', image: '/assets/green-belt.png' },
      { name: 'Син', time: '20:30', image: '/assets/blue-belt.png' },
      { name: 'Темно син', time: '20:30', image: '/assets/darkBlue-belt.png' },
      { name: 'Кафеав', time: '21:30', image: '/assets/brown-belt.png' },
      { name: 'Црн', time: '21:30', image: '/assets/black-belt.png' },
    ],
  },
  {
    day: 'Среда',
    belts: [
      { name: 'Бел', time: 'Нема тренинг', image: '/assets/white-belt.png' },
      { name: 'Жолт', time: 'Нема тренинг', image: '/assets/yellow-belt.png' },
      { name: 'Портокалов', time: 'Нема тренинг', image: '/assets/orange-belt.png' },
      { name: 'Црвен', time: '19:30', image: '/assets/red-belt.png' },
      { name: 'Виолетов', time: '19:30', image: '/assets/purple-belt.png' },
      { name: 'Зелен', time: '19:30', image: '/assets/green-belt.png' },
      { name: 'Син', time: '19:30', image: '/assets/blue-belt.png' },
      { name: 'Темно син', time: '20:30', image: '/assets/darkBlue-belt.png' },
      { name: 'Кафеав', time: '20:30', image: '/assets/brown-belt.png' },
      { name: 'Црн', time: '20:30', image: '/assets/black-belt.png' },
    ],
  },
  {
    day: 'Четрвток',
    belts: [
      { name: 'Бел', time: '17:30', image: '/assets/white-belt.png' },
      { name: 'Жолт', time: '17:30', image: '/assets/yellow-belt.png' },
      { name: 'Портокалов', time: '18:30', image: '/assets/orange-belt.png' },
      { name: 'Црвен', time: '18:30', image: '/assets/red-belt.png' },
      { name: 'Виолетов', time: '19:30', image: '/assets/purple-belt.png' },
      { name: 'Зелен', time: '19:30', image: '/assets/green-belt.png' },
      { name: 'Син', time: '20:30', image: '/assets/blue-belt.png' },
      { name: 'Темно син', time: '20:30', image: '/assets/darkBlue-belt.png' },
      { name: 'Кафеав', time: '21:30', image: '/assets/brown-belt.png' },
      { name: 'Црн', time: '21:30', image: '/assets/black-belt.png' },
    ],
  },
];
</script>


<style scoped>
.page-wrapper {
  background: linear-gradient(to right, #434343, #000000);
  /*background: linear-gradient(to bottom, #2c3e50, #4ca1af);*/
  min-height: 100vh;
  padding-bottom: 40px;
}

.title {
  text-align: center;
  margin-top: 90px;
  padding-top: 40px;
  color: white;
}

.schedule-wrapper {
  padding: 40px 20px;
  margin-top: 20px;
}

.grid {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>

