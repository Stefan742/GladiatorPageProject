<template>
  <h1 id="gallery-title">OUR GALLERY</h1>

<!--  Implementacija na caroseulot-->
  <div class="gallery-container">
    <div class="carousel" @mouseenter="pauseAutoSlide" @mouseleave="resumeAutoSlide">
      <button @click="prevSlideWithDirection" class="nav-button left"></button>

      <div class="carousel-track">
        <transition-group :name="transitionName" tag="div" class="carousel-inner">
          <img
              v-for="(image, index) in images"
              v-show="index === currentIndex"
              :key="image + '-' + transitionKey"
              :src="image"
              alt="Gallery image"
              class="carousel-image"
          />
        </transition-group>
      </div>

      <button @click="nextSlideWithDirection" class="nav-button right"></button>
    </div>
  </div>

<!--  //Implementacija na card-images-->
  <div class="cards">
    <div
        v-for="(image, index) in images"
        :key="index"
        class="card"
        :class="{ selected: currentIndex === index }"
    >
      <img
          :src="image"
          alt="Gallery Image"
          class="card-image"
          @click="goToSlide(index)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

//Slikite koi sto gi pi prikazuvame vo galerijata
const images = [
  '../../public/assets/1.jpg',
  '../../public/assets/2.jpg',
  '../../public/assets/3.jpg',
  '../../public/assets/4.jpg',
  '../../public/assets/5.jpg',
  '../../public/assets/6.jpg',
  '../../public/assets/7.jpg',
  '../../public/assets/8.jpg',
  '../../public/assets/9.jpg',
  '../../public/assets/10.jpg',
  '../../public/assets/11.jpg',
  '../../public/assets/12.jpg',
]

const currentIndex = ref(0)
const transitionName = ref('slide-right')
const transitionKey = ref(0)

//Mehanizmi za promena na slika vo caroseulot
const nextSlideWithDirection = () => {
  transitionName.value = 'slide-right'
  currentIndex.value = (currentIndex.value + 1) % images.length
  transitionKey.value++
}

const prevSlideWithDirection = () => {
  transitionName.value = 'slide-left'
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
  transitionKey.value++
}
const goToSlide = (index) => {
  transitionName.value = index > currentIndex.value ? 'slide-right' : 'slide-left'
  currentIndex.value = index
  transitionKey.value++

  const startPage = document.getElementById('gallery-title')
  if (startPage) {
    startPage.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }

  resumeAutoSlide()
}
//---

let interval = null

const startAutoSlide = () => {
  interval = setInterval(() => {
    nextSlideWithDirection()
  }, 3000)
}

//Mehanizmi za avtomtska promena na slajdot
const pauseAutoSlide = () => {
  clearInterval(interval)
}

const resumeAutoSlide = () => {
  pauseAutoSlide()
  startAutoSlide()
}

onMounted(() => {
  startAutoSlide()
})

onBeforeUnmount(() => {
  pauseAutoSlide()
})
//---

</script>

<style scoped>


.gallery-container {
  max-width: 1000px;
  margin: 0 auto;
}

.carousel {
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0 0 30px #f1c40f;
  /*box-shadow: 0 0 30px white;*/
  text-align: center;
}

.carousel-track {
  position: relative;
  width: 100%;
  height: 450px;
}

.carousel-inner {
  width: 100%;
  height: 100%;
  position: relative;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.8s ease, opacity 0.8s ease;
}

/* Slide Right */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.8s ease;
  position: absolute;
}
.slide-right-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Slide Left */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.8s ease;
  position: absolute;
}
.slide-left-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.4);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  z-index: 1;
}

.nav-button.left::before,
.nav-button.right::before {
  content: '';
  position: absolute;
  border: solid white;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 10px;
}

.nav-button.left {
  left: 15px;
}

.nav-button.left:hover{
  box-shadow: 0 0 5px #f1c40f;
}
.nav-button.right:hover{
  box-shadow: 0 0 5px #f1c40f;
}

.nav-button.left::before {
  left: 18px;
  top: 15px;
  transform: rotate(135deg);
}

.nav-button.right {
  right: 15px;
}

.nav-button.right::before {
  right: 18px;
  top: 15px;
  transform: rotate(-45deg);
}

/* Card gallery styles */
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  width: 200px;
  height: 200px;
  margin: 10px;
  overflow: hidden;
  border-radius: 8px;
  border: 2px solid white;
  transition: border 0.3s ease, box-shadow 0.3s ease;
}

.card.selected {
  border: 4px solid #f1c40f;
  box-shadow: 0 0 10px #f1c40f;
}

.card:hover{
  cursor: pointer;
  filter: brightness(0.5);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease;
}

.card.selected .card-image {
  filter: brightness(0.5);
}

#gallery-title {
  text-align: center;
  color: white;
  font-size: 2.5rem;
  margin: 80px 0 25px 0;
  font-weight: bold;
  letter-spacing: 2px;
}

</style>