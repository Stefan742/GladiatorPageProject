<template>
  <div class="loading-container" v-if="visible">
    <video autoplay muted loop playsinline class="background-video">
      <source src="/assets/LogoLoading.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 9999;
  background-color: white;
}

.background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 80%;
  transform: translate(-50%, -50%);
  object-fit: cover;
}


</style>
<!--<template>-->
<!--  <div class="loading-container" v-if="visible">-->
<!--    <div class="logo-wrapper">-->
<!--      <img src="/assets/gladiator.png" alt="Logo" class="logo" />-->
<!--      <div class="shine"></div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  props: {-->
<!--    visible: {-->
<!--      type: Boolean,-->
<!--      default: true-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.loading-container {-->
<!--  position: fixed;-->
<!--  top: 0;-->
<!--  left: 0;-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--  background-color: white;-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  z-index: 9999;-->
<!--}-->

<!--.logo-wrapper {-->
<!--  position: relative;-->
<!--  width: 200px;-->
<!--}-->

<!--.logo {-->
<!--  width: 100%;-->
<!--  height: auto;-->
<!--  display: block;-->
<!--  border-radius: 12px;-->
<!--}-->

<!--.shine {-->
<!--  position: absolute;-->
<!--  top: 0;-->
<!--  left: -75%;-->
<!--  width: 50%;-->
<!--  height: 100%;-->
<!--  background: linear-gradient(-->
<!--      120deg,-->
<!--      rgba(255, 255, 255, 0) 0%,-->
<!--      rgba(255, 255, 255, 0.5) 50%,-->
<!--      rgba(255, 255, 255, 0) 100%-->
<!--  );-->
<!--  transform: skewX(-20deg);-->
<!--  animation: shine 2s infinite;-->
<!--  pointer-events: none;-->
<!--  border-radius: 12px;-->
<!--}-->

<!--@keyframes shine {-->
<!--  0% {-->
<!--    left: -75%;-->
<!--  }-->
<!--  100% {-->
<!--    left: 125%;-->
<!--  }-->
<!--}-->
<!--</style>-->