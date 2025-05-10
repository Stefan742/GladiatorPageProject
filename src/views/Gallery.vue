<template>
  <LoadingScreen v-if="isLoading" />
  <div v-else>
    <div class="page-wrapper">
      <Navbar/>
      <Carousel/>
    </div>
    <Footer/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import Navbar from '../components/MainComponents/Navbar.vue';
import LoadingScreen from '../components/MainComponents/LoadingScreen.vue';
import Carousel from "@/components/GalleryComponents/Carousel.vue";
import Footer from "@/components/MainComponents/Footer.vue";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 4000);
});
</script>

<style scoped>
.page-wrapper {
  background: linear-gradient(to right, #434343, #000000);
  /*background: linear-gradient(to bottom, #2c3e50, #4ca1af);*/
  min-height: 100vh;
  padding-bottom: 40px;
  padding-top: 40px;
}
</style>