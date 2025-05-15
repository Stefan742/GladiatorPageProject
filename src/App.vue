<template>
  <div id="app" style="min-height: 100vh; width: 100%;">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
  import Navbar from '@/components/MainComponents/Navbar.vue'
  import Footer from '@/components/MainComponents/Footer.vue'
</script>