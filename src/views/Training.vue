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
  }, 2500);
});

const trainingSchedule = [
  {
    day: 'Monday',
    belts: [
      { name: 'White', time: 'No training', image: '/assets/white-belt.png' },
      { name: 'Yellow', time: 'No training', image: '/assets/yellow-belt.png' },
      { name: 'Orange', time: 'No training', image: '/assets/orange-belt.png' },
      { name: 'Red', time: '19:30', image: '/assets/red-belt.png' },
      { name: 'Purple', time: '19:30', image: '/assets/purple-belt.png' },
      { name: 'Green', time: '19:30', image: '/assets/green-belt.png' },
      { name: 'Blue', time: '19:30', image: '/assets/blue-belt.png' },
      { name: 'Dark Blue', time: '20:30', image: '/assets/darkBlue-belt.png' },
      { name: 'Brown', time: '20:30', image: '/assets/brown-belt.png' },
      { name: 'Black', time: '20:30', image: '/assets/black-belt.png' },
    ],
  },
  {
    day: 'Tuesday',
    belts: [
      { name: 'White', time: '17:30', image: '/assets/white-belt.png' },
      { name: 'Yellow', time: '17:30', image: '/assets/yellow-belt.png' },
      { name: 'Orange', time: '18:30', image: '/assets/orange-belt.png' },
      { name: 'Red', time: '18:30', image: '/assets/red-belt.png' },
      { name: 'Purple', time: '19:30', image: '/assets/purple-belt.png' },
      { name: 'Green', time: '19:30', image: '/assets/green-belt.png' },
      { name: 'Blue', time: '20:30', image: '/assets/blue-belt.png' },
      { name: 'Dark Blue', time: '20:30', image: '/assets/darkBlue-belt.png' },
      { name: 'Brown', time: '21:30', image: '/assets/brown-belt.png' },
      { name: 'Black', time: '21:30', image: '/assets/black-belt.png' },
    ],
  },
  {
    day: 'Wednesday',
    belts: [
      { name: 'White', time: 'No Training', image: '/assets/white-belt.png' },
      { name: 'Yellow', time: 'No Training', image: '/assets/yellow-belt.png' },
      { name: 'Orange', time: 'No Training', image: '/assets/orange-belt.png' },
      { name: 'Red', time: '19:30', image: '/assets/red-belt.png' },
      { name: 'Purple', time: '19:30', image: '/assets/purple-belt.png' },
      { name: 'Green', time: '19:30', image: '/assets/green-belt.png' },
      { name: 'Blue', time: '19:30', image: '/assets/blue-belt.png' },
      { name: 'Dark Blue', time: '20:30', image: '/assets/darkBlue-belt.png' },
      { name: 'Brown', time: '20:30', image: '/assets/brown-belt.png' },
      { name: 'Black', time: '20:30', image: '/assets/black-belt.png' },
    ],
  },
  {
    day: 'Thursday',
    belts: [
      { name: 'White', time: '17:30', image: '/assets/white-belt.png' },
      { name: 'Yellow', time: '17:30', image: '/assets/yellow-belt.png' },
      { name: 'Orange', time: '18:30', image: '/assets/orange-belt.png' },
      { name: 'Red', time: '18:30', image: '/assets/red-belt.png' },
      { name: 'Purple', time: '19:30', image: '/assets/purple-belt.png' },
      { name: 'Green', time: '19:30', image: '/assets/green-belt.png' },
      { name: 'Blue', time: '20:30', image: '/assets/blue-belt.png' },
      { name: 'Dark Blue', time: '20:30', image: '/assets/darkBlue-belt.png' },
      { name: 'Brown', time: '21:30', image: '/assets/brown-belt.png' },
      { name: 'Black', time: '21:30', image: '/assets/black-belt.png' },
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

