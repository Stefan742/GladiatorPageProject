<template>
  <LoadingScreen v-if="isLoading" />
  <div v-else>
    <Navbar/>
    <Carousel/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import Navbar from '../components/Navbar.vue';
import LoadingScreen from '../components/LoadingScreen.vue';
import Carousel from "@/components/Carousel.vue";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<style scoped>

</style>