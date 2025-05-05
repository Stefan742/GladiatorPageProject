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
      <router-link to="/gallery">
        <button class="view-more-btn">View More</button>
      </router-link>
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
  padding-bottom: 20px;
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
}
@media (max-width: 768px) {
  #gallery h1 {
    font-size: 26px;
    margin-bottom: 20px;
  }

  .gallery-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 0 10px;
  }

  .gallery-item {
    width: 100%;
  }

  .view-more-btn {
    padding: 12px 24px;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .gallery-container {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .view-more-btn {
    width: 80%;
    font-size: 14px;
  }
}

</style>
