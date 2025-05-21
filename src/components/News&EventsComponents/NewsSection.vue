<template>
  <div class="card">
    <div class="card-header">{{$t('newsTitle')}}</div>
    <div class="news-carousel-wrapper">
      <div class="carousel-container" @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide">
        <transition name="carousel" mode="out-in">
          <div class="carousel-slide" :key="currentItem.src">
            <img
                :src="currentItem.src"
                alt="News Image"
                class="carousel-image"
                @click="goToLink"
            />
            <div class="carousel-overlay">
              <h2 class="carousel-title">{{ currentItem.title }}</h2>
            </div>
          </div>
        </transition>

        <!-- Индикатори -->
        <div class="carousel-indicators">
          <span
              v-for="(item, index) in newsList"
              :key="index"
              :class="{ active: index === currentIndex }"
              class="indicator-dot"
              @click="setCurrentIndex(index)"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  newsList: Array
})

const { locale } = useI18n()

const currentIndex = ref(0)
const intervalId = ref(null)

const currentItem = computed(() => props.newsList[currentIndex.value])

function nextItem() {
  currentIndex.value = (currentIndex.value + 1) % props.newsList.length
}

function prevItem() {
  currentIndex.value = (currentIndex.value - 1 + props.newsList.length) % props.newsList.length
}

function setCurrentIndex(index) {
  currentIndex.value = index
}

function goToLink() {
  if (currentItem.value.link) {
    window.open(currentItem.value.link, '_blank')
  }
}

function startAutoSlide() {
  intervalId.value = setInterval(nextItem, 3000)
}

function stopAutoSlide() {
  clearInterval(intervalId.value)
}

onMounted(() => {
  startAutoSlide()
})

onBeforeUnmount(() => {
  stopAutoSlide()
})
</script>


<style scoped>
.card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 650px;
  margin: 0 auto;
  padding: 15px;
  box-sizing: border-box;
}

.card-header {
  background-color: #000000;
  color: #ffffff;
  font-size: 1.5em;
  font-weight: bold;
  padding: 12px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 20px;
}

.news-carousel-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.carousel-container {
  position: relative;
  background-color: black;
  width: 100%;
  max-width: 660px;
  height: 360px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}


.carousel-slide {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(40%);
  cursor: pointer;
}

.carousel-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.carousel-title {
  color: white;
  font-size: 3em;
  font-weight: bold;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  text-align: center;
  padding: 0 20px;
}

/* Индикатори */
.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.indicator-dot {
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicator-dot.active {
  background-color: orange;
  width: 12px;
  height: 12px;
}

/* Slide transition fix */
.carousel-enter-active,
.carousel-leave-active {
  transition: transform 0.4s ease;
  position: absolute;
  width: 100%;
  height: 100%;
}

.carousel-enter-from {
  transform: translateX(100%);
}
.carousel-enter-to {
  transform: translateX(0%);
}

.carousel-leave-from {
  transform: translateX(0%);
}
.carousel-leave-to {
  transform: translateX(-100%);
}
</style>
