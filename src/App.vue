<template>
  <div>
    <Navbar />
    <HeroSection />
    <AboutUs />
    <TrainingSchedule />
    <GallerySection />
  </div>
</template>
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

<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutUs from './components/AboutUs.vue'
import TrainingSchedule from './components/TrainingSchedule.vue'
import GallerySection from './components/GallerySection.vue'
</script>
