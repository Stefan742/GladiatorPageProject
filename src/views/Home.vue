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

import Navbar from "@/components/MainComponents/Navbar.vue";
import HeroSection from "@/components/MainComponents/HeroSection.vue";
import AboutUs from "@/components/MainComponents/AboutUs.vue";
import TrainingSchedule from '@/components/TrainingComponents/TrainingSchedule.vue';
import GallerySection from '@/components/GalleryComponents/GallerySection.vue';
import LoadingScreen from '@/components/MainComponents/LoadingScreen.vue';
import Footer from "@/components/MainComponents/Footer.vue";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2500);
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
