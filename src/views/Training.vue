<template>
  <LoadingScreen v-if="isLoading"/>
  <div v-else>
    <div className="page-wrapper">
      <Navbar/>
      <h1 className="title">{{ $t('trainingScheduleTitle') }}</h1>

      <div className="schedule-wrapper">
        <div className="grid">
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
import {ref, computed, onMounted} from 'vue';
import {useI18n} from 'vue-i18n';

import Navbar from '../components/MainComponents/Navbar.vue';
import LoadingScreen from '../components/MainComponents/LoadingScreen.vue';
import TrainingCard from '../components/TrainingComponents/TrainingCard.vue';

const isLoading = ref(true);
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2500);
});

// Англиски распоред
const trainingScheduleEN = [
  {
    day: 'Monday',
    belts: [
      { name: 'White', time: 'No training', image: '/assets/BeltsPhotos/white-belt.png' },
      { name: 'Yellow', time: 'No training', image: '/assets/BeltsPhotos/yellow-belt.png' },
      { name: 'Orange', time: 'No training', image: '/assets/BeltsPhotos/orange-belt.png' },
      { name: 'Red', time: '19:30', image: '/assets/BeltsPhotos/red-belt.png' },
      { name: 'Purple', time: '19:30', image: '/assets/BeltsPhotos/purple-belt.png' },
      { name: 'Green', time: '19:30', image: '/assets/BeltsPhotos/green-belt.png' },
      { name: 'Blue', time: '19:30', image: '/assets/BeltsPhotos/blue-belt.png' },
      { name: 'Dark Blue', time: '20:30', image: '/assets/BeltsPhotos/darkBlue-belt.png' },
      { name: 'Brown', time: '20:30', image: '/assets/BeltsPhotos/brown-belt.png' },
      { name: 'Black', time: '20:30', image: '/assets/BeltsPhotos/black-belt.png' },
    ],
  },
  {
    day: 'Tuesday',
    belts: [
      { name: 'White', time: '17:30', image: '/assets/BeltsPhotos/white-belt.png' },
      { name: 'Yellow', time: '17:30', image: '/assets/BeltsPhotos/yellow-belt.png' },
      { name: 'Orange', time: '18:30', image: '/assets/BeltsPhotos/orange-belt.png' },
      { name: 'Red', time: '18:30', image: '/assets/BeltsPhotos/red-belt.png' },
      { name: 'Purple', time: '19:30', image: '/assets/BeltsPhotos/purple-belt.png' },
      { name: 'Green', time: '19:30', image: '/assets/BeltsPhotos/green-belt.png' },
      { name: 'Blue', time: '20:30', image: '/assets/BeltsPhotos/blue-belt.png' },
      { name: 'Dark Blue', time: '20:30', image: '/assets/BeltsPhotos/darkBlue-belt.png' },
      { name: 'Brown', time: '21:30', image: '/assets/BeltsPhotos/brown-belt.png' },
      { name: 'Black', time: '21:30', image: '/assets/BeltsPhotos/black-belt.png' },
    ],
  },
  {
    day: 'Wednesday',
    belts: [
      { name: 'White', time: 'No Training', image: '/assets/BeltsPhotos/white-belt.png' },
      { name: 'Yellow', time: 'No Training', image: '/assets/BeltsPhotos/yellow-belt.png' },
      { name: 'Orange', time: 'No Training', image: '/assets/BeltsPhotos/orange-belt.png' },
      { name: 'Red', time: '19:30', image: '/assets/BeltsPhotos/red-belt.png' },
      { name: 'Purple', time: '19:30', image: '/assets/BeltsPhotos/purple-belt.png' },
      { name: 'Green', time: '19:30', image: '/assets/BeltsPhotos/green-belt.png' },
      { name: 'Blue', time: '19:30', image: '/assets/BeltsPhotos/blue-belt.png' },
      { name: 'Dark Blue', time: '20:30', image: '/assets/BeltsPhotos/darkBlue-belt.png' },
      { name: 'Brown', time: '20:30', image: '/assets/BeltsPhotos/brown-belt.png' },
      { name: 'Black', time: '20:30', image: '/assets/BeltsPhotos/black-belt.png' },
    ],
  },
  {
    day: 'Thursday',
    belts: [
      { name: 'White', time: '17:30', image: '/assets/BeltsPhotos/white-belt.png' },
      { name: 'Yellow', time: '17:30', image: '/assets/BeltsPhotos/yellow-belt.png' },
      { name: 'Orange', time: '18:30', image: '/assets/BeltsPhotos/orange-belt.png' },
      { name: 'Red', time: '18:30', image: '/assets/BeltsPhotos/red-belt.png' },
      { name: 'Purple', time: '19:30', image: '/assets/BeltsPhotos/purple-belt.png' },
      { name: 'Green', time: '19:30', image: '/assets/BeltsPhotos/green-belt.png' },
      { name: 'Blue', time: '20:30', image: '/assets/BeltsPhotos/blue-belt.png' },
      { name: 'Dark Blue', time: '20:30', image: '/assets/BeltsPhotos/darkBlue-belt.png' },
      { name: 'Brown', time: '21:30', image: '/assets/BeltsPhotos/brown-belt.png' },
      { name: 'Black', time: '21:30', image: '/assets/BeltsPhotos/black-belt.png' },
    ],
  },
];

// Македонски распоред
const trainingScheduleMK = [
  {
    day: 'Понеделник',
    belts: [
      { name: 'Бел', time: 'Нема тренинг', image: '/assets/BeltsPhotos/white-belt.png' },
      { name: 'Жолт', time: 'Нема тренинг', image: '/assets/BeltsPhotos/yellow-belt.png' },
      { name: 'Портокалов', time: 'Нема тренинг', image: '/assets/BeltsPhotos/orange-belt.png' },
      { name: 'Црвен', time: '19:30', image: '/assets/BeltsPhotos/red-belt.png' },
      { name: 'Виолетов', time: '19:30', image: '/assets/BeltsPhotos/purple-belt.png' },
      { name: 'Зелен', time: '19:30', image: '/assets/BeltsPhotos/green-belt.png' },
      { name: 'Син', time: '19:30', image: '/assets/BeltsPhotos/blue-belt.png' },
      { name: 'Темно син', time: '20:30', image: '/assets/BeltsPhotos/darkBlue-belt.png' },
      { name: 'Кафеав', time: '20:30', image: '/assets/BeltsPhotos/brown-belt.png' },
      { name: 'Црн', time: '20:30', image: '/assets/BeltsPhotos/black-belt.png' },
    ],
  },
  {
    day: 'Вторник',
    belts: [
      { name: 'Бел', time: '17:30', image: '/assets/BeltsPhotos/white-belt.png' },
      { name: 'Жолт', time: '17:30', image: '/assets/BeltsPhotos/yellow-belt.png' },
      { name: 'Портокалов', time: '18:30', image: '/assets/BeltsPhotos/orange-belt.png' },
      { name: 'Црвен', time: '18:30', image: '/assets/BeltsPhotos/red-belt.png' },
      { name: 'Виолетов', time: '19:30', image: '/assets/BeltsPhotos/purple-belt.png' },
      { name: 'Зелен', time: '19:30', image: '/assets/BeltsPhotos/green-belt.png' },
      { name: 'Син', time: '20:30', image: '/assets/BeltsPhotos/blue-belt.png' },
      { name: 'Темно син', time: '20:30', image: '/assets/BeltsPhotos/darkBlue-belt.png' },
      { name: 'Кафеав', time: '21:30', image: '/assets/BeltsPhotos/brown-belt.png' },
      { name: 'Црн', time: '21:30', image: '/assets/BeltsPhotos/black-belt.png' },
    ],
  },
  {
    day: 'Среда',
    belts: [
      { name: 'Бел', time: 'Нема тренинг', image: '/assets/BeltsPhotos/white-belt.png' },
      { name: 'Жолт', time: 'Нема тренинг', image: '/assets/BeltsPhotos/yellow-belt.png' },
      { name: 'Портокалов', time: 'Нема тренинг', image: '/assets/BeltsPhotos/orange-belt.png' },
      { name: 'Црвен', time: '19:30', image: '/assets/BeltsPhotos/red-belt.png' },
      { name: 'Виолетов', time: '19:30', image: '/assets/BeltsPhotos/purple-belt.png' },
      { name: 'Зелен', time: '19:30', image: '/assets/BeltsPhotos/green-belt.png' },
      { name: 'Син', time: '19:30', image: '/assets/BeltsPhotos/blue-belt.png' },
      { name: 'Темно син', time: '20:30', image: '/assets/BeltsPhotos/darkBlue-belt.png' },
      { name: 'Кафеав', time: '20:30', image: '/assets/BeltsPhotos/brown-belt.png' },
      { name: 'Црн', time: '20:30', image: '/assets/BeltsPhotos/black-belt.png' },
    ],
  },
  {
    day: 'Четврток',
    belts: [
      { name: 'Бел', time: '17:30', image: '/assets/BeltsPhotos/white-belt.png' },
      { name: 'Жолт', time: '17:30', image: '/assets/BeltsPhotos/yellow-belt.png' },
      { name: 'Портокалов', time: '18:30', image: '/assets/BeltsPhotos/orange-belt.png' },
      { name: 'Црвен', time: '18:30', image: '/assets/BeltsPhotos/red-belt.png' },
      { name: 'Виолетов', time: '19:30', image: '/assets/BeltsPhotos/purple-belt.png' },
      { name: 'Зелен', time: '19:30', image: '/assets/BeltsPhotos/green-belt.png' },
      { name: 'Син', time: '20:30', image: '/assets/BeltsPhotos/blue-belt.png' },
      { name: 'Темно син', time: '20:30', image: '/assets/BeltsPhotos/darkBlue-belt.png' },
      { name: 'Кафеав', time: '21:30', image: '/assets/BeltsPhotos/brown-belt.png' },
      { name: 'Црн', time: '21:30', image: '/assets/BeltsPhotos/black-belt.png' },
    ],
  },
];


const {locale} = useI18n();

const trainingSchedule = computed(() => {
  return locale.value === 'mk' ? trainingScheduleMK : trainingScheduleEN;
});
</script>

<style scoped>
.page-wrapper {
  background: linear-gradient(to right, #434343, #000000);
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
