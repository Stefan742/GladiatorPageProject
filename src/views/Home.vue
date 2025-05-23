<template>
  <LoadingScreen v-if="isLoading" />
  <div v-else class="main-container">
    <Navbar />
    <HeroSection />
    <AboutUs />
    <TrainingSchedule />
    <GallerySection />


    <button v-if="showScrollButton" @click="scrollToTop" class="scroll-to-top">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

import Navbar from "@/components/MainComponents/Navbar.vue";
import HeroSection from "@/components/MainComponents/HeroSection.vue";
import AboutUs from "@/components/MainComponents/AboutUs.vue";
import TrainingSchedule from '@/components/TrainingComponents/TrainingSchedule.vue';
import GallerySection from '@/components/GalleryComponents/GallerySection.vue';
import LoadingScreen from '@/components/MainComponents/LoadingScreen.vue';
import Footer from "@/components/MainComponents/Footer.vue";

const isLoading = ref(true);
const showScrollButton = ref(false);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleScroll = () => {
  showScrollButton.value = window.scrollY > 200;
};

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2500);

  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  overflow-x: hidden;
  font-family: 'Montserrat', sans-serif;
  background-color: white;
}

.main-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #f1c40f;
  color: black;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.4s ease, transform 0.3s ease;
  opacity: 0.8;
}
.scroll-to-top:hover {
  opacity: 1;
  transform: scale(1.1);
}
</style>