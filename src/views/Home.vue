<template>
  <LoadingScreen v-if="isLoading" />
  <div v-else>
    <Navbar />
    <HeroSection />
    <AboutUs />
    <TrainingSchedule />
    <GallerySection />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import Navbar from "@/components/Navbar.vue";
import HeroSection from "@/components/HeroSection.vue";
import AboutUs from "@/components/AboutUs.vue";
import TrainingSchedule from '@/components/TrainingSchedule.vue';
import GallerySection from '@/components/GallerySection.vue';
import LoadingScreen from '@/components/LoadingScreen.vue';

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<style>
* {
  padding: 0;
  box-sizing: border-box;
}

html, body {
  padding: 0;
  width: 100%;
  overflow-x: hidden;
  font-family: 'Montserrat', sans-serif;
}
</style>
