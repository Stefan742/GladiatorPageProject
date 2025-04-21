<template>
  <LoadingScreen v-if="isLoading" />
  <div v-else>
      <Navbar/>
    <h1 style="text-align: center; margin-top: 90px">OUR GALLERY</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import Navbar from '../components/Navbar.vue';
import LoadingScreen from '../components/LoadingScreen.vue';


const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<style scoped>

</style>