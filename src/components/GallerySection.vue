<template>
  <div id="gallery">
    <h1>Our Gallery</h1>
    <div class="gallery-container">
      <div class="gallery-item fade-in-scale" v-for="i in 6" :key="i">
        <img :src="`/assets/${i}.jpg`" :alt="`Image ${i}`" />
      </div>
    </div>
    <div class="view-more-container">
      <div class="gradient-overlay"></div>
      <button class="view-more-btn"><a href="gallery.html">View More</a></button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const elements = document.querySelectorAll(".fade-in-scale");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("active");
    });
  }, { threshold: 0.5 });

  elements.forEach(el => observer.observe(el));
});
</script>

<style scoped>
#gallery {
  width: 100vw;
  text-align: center;
  background-color: #f0f0f0;
  position: relative;
}

#gallery h1 {
  font-size: 32px;
  color: #333;
  margin-bottom: 30px;
  font-family: 'Montserrat', sans-serif;
}

.gallery-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
}

.gallery-item {
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 10px;
  transition: box-shadow 0.3s;
}

.gallery-item img {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.gallery-item img:hover {
  transform: scale(1.1);
}


.view-more-container {
  position: relative;
  margin-top: 40px;
}

.gradient-overlay {
  position: absolute;
  bottom: 91px;
  left: 0;
  width: 100%;
  height: 140px;
  background: linear-gradient(to top, white, transparent);
  z-index: 1;
}

/* "View More" Button */
.view-more-btn {
  background-color: #f1c40f;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  border-radius: 30px;
  text-transform: uppercase;
  transition: 0.3s;
  position: relative;
  z-index: 2;
}

.view-more-btn a {
  text-decoration: none;
  color: black;
}

.view-more-btn:hover {
  background-color: #ffdd57;
  transform: scale(1.05);
}




/* Animacija za fade-in i mrdanje */
.fade-in-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.fade-in-left.active {
  opacity: 1;
  transform: translateX(0);
}

/* Animacija za fade-in i scale */
.fade-in-scale {
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.fade-in-scale.active {
  opacity: 1;
  transform: scale(1);
}</style>
