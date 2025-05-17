<template>
  <div class="page-wrapper">
    <LoadingScreen v-if="isLoading" />
    <Navbar />
    <h1 id="title">News & Events</h1>
    <div class="news-events-container">
      <NewsSection :newsList="newsList" />
      <EventsSection :events="upcomingEvents" title="Upcoming Events" />
      <EventsSection :events="allEvents" title="All Events" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

import Navbar from "@/components/MainComponents/Navbar.vue"
import NewsSection from "@/components/News&EventsComponents/NewsSection.vue"
import EventsSection from "@/components/News&EventsComponents/EventsSection.vue"
import Footer from "@/components/MainComponents/Footer.vue"
import LoadingScreen from "@/components/MainComponents/LoadingScreen.vue"

// Loading screen
const isLoading = ref(true)
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 2500)
})

// News list
const newsList = ref([
  {
    id: 1,
    title: 'New Dojo Opening',
    description: 'We opened a new dojo in Skopje.',
    date: '2025-04-10',
    src: './../public/assets/GalleryPhotos/2.jpg',
    link: 'https://example.com/news1'
  },
  {
    id: 2,
    title: 'Championship Results',
    description: 'Our team won 3 medals!',
    date: '2025-03-22',
    src: './../public/assets/GalleryPhotos/1.jpg',
    link: 'https://example.com/news2'
  },
  {
    id: 3,
    title: 'Championship finals',
    description: 'Our team won 3 medals!',
    date: '2025-03-22',
    src: './../public/assets/GalleryPhotos/3.jpg',
    link: 'https://example.com/news3'
  }
])

// Events list
const eventsList = ref([
  { id: 1, name: 'Spring Training Camp', date: '2025-05-25' },
  { id: 2, name: 'Local Tournament', date: '2025-06-05' },
  { id: 3, name: 'Karate Seminar', date: '2025-07-10' },
  { id: 4, name: 'National Championship', date: '2025-11-12' },
  { id: 5, name: 'World Cup', date: '2025-06-17' }
])

// Computed: upcoming events for next month
const upcomingEvents = computed(() => {
  const today = new Date()
  const nextMonth = new Date(today)
  nextMonth.setMonth(today.getMonth() + 1)
  return eventsList.value.filter(event => {
    const eventDate = new Date(event.date)
    return (
        eventDate.getMonth() === nextMonth.getMonth() &&
        eventDate.getFullYear() === nextMonth.getFullYear()
    )
  })
})

// Computed: all events sorted by date
const allEvents = computed(() => {
  return [...eventsList.value].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
  )
})
</script>

<style scoped>
.news-events-container {
  display: flex;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
  color: #222;
}
#title {
  text-align: center;
  margin-top: 80px;
  padding-top: 40px;
  margin-bottom: 10px;
  color: white;
}
.page-wrapper {
  background: linear-gradient(to right, #434343, #000000);
  min-height: 74vh;
}
</style>
