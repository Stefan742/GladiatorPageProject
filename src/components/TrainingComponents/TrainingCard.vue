<template>
  <div class="card">
    <div class="header">{{ day.day }}</div>

    <div class="belt-carousel-wrapper">
      <transition name="slide-fade" mode="out-in">
        <div class="belt-carousel" :key="currentIndex">
          <img :src="currentBelt.image" alt="belt" class="belt-img" />
          <p class="belt-name">Belt: {{ currentBelt.name }}</p>
          <p class="belt-time">{{ currentBelt.time }}</p>
        </div>
      </transition>
    </div>


    <div class="nav-buttons">
      <button @click="prev">‹</button>
      <button @click="next">›</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const props = defineProps({ day: Object });

const currentIndex = ref(0);
const currentBelt = computed(() => props.day.belts[currentIndex.value]);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.day.belts.length;
};
const prev = () => {
  currentIndex.value =
      (currentIndex.value - 1 + props.day.belts.length) % props.day.belts.length;
};
</script>

<style scoped>
body{
  background-color: #2c3e50;
}
.card {
  position: relative;
  background: white;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}
.card:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.header {
  background: black;
  color: white;
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
}
.belt-carousel-wrapper {
  position: relative;
  min-height: 140px;
  margin-top: 20px;
}

.belt-carousel {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}

.belt-img {
  width: 100px;
  height: auto;
  margin-bottom: 10px;
}
.belt-name {
  font-weight: bold;
  color: #333;
}
.belt-time {
  font-size: 18px;
  margin-top: 5px;
}
.nav-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
button {
  background: none;
  font-size: 24px;
  border: none;
  cursor: pointer;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
  position: absolute;
  width: 100%;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

</style>