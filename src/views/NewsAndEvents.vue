<template>
  <LoadingScreen v-if="isLoading" />
  <div v-else>
    <Navbar />
    <div class="page-wrapper">
      <h1 id="title">{{$t('News&EventsTitle')}}</h1>
      <div class="news-events-container">
        <NewsSection :newsList="newsList" />
        <UpcomingEvents :events="upcomingEvents"/>
        <EventsSection :events="allEvents" titleKey="allEventsTitle" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

import Navbar from "@/components/MainComponents/Navbar.vue"
import NewsSection from "@/components/News&EventsComponents/NewsSection.vue"
import EventsSection from "@/components/News&EventsComponents/AllEvents.vue"
import UpcomingEvents from "@/components/News&EventsComponents/UpcomingEvents.vue";
import LoadingScreen from "@/components/MainComponents/LoadingScreen.vue"
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const { t } = useI18n()

// Loading screen
const isLoading = ref(true)
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 2500)
})

const newsData = {
  en: [
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
    }
  ],
  mk: [
    {
      id: 1,
      title: 'Отворено нов Доџо',
      description: 'Отворивме нов доџо во Скопје.',
      date: '2025-04-10',
      src: './../public/assets/GalleryPhotos/2.jpg',
      link: 'https://example.com/news1'
    },
    {
      id: 2,
      title: 'Резултати од Првенството',
      description: 'Нашиот тим освои 3 медали!',
      date: '2025-03-22',
      src: './../public/assets/GalleryPhotos/1.jpg',
      link: 'https://example.com/news2'
    }
  ]
}

const eventsData = {
  en: [
    { id: 1, name: 'Spring Training Camp', date: '2025-05-25' },
    { id: 2, name: 'Local Tournament', date: '2025-5-30' },
    { id: 3, name: 'Karate Seminar', date: '2025-05-29' },
    { id: 4, name: 'Ohrid Open', date: '2025-05-24' },
    { id: 5, name: 'Natioanl Championship', date: '2025-05-25' },
    { id: 6, name: 'Local Tournament', date: '2025-06-05' },
    { id: 7, name: 'Karate Seminar', date: '2025-06-10' },
    { id: 8, name: 'Ohrid Open', date: '2025-11-24' },
    { id: 9, name: 'Spring Training Camp', date: '2025-05-25' },
    { id: 10, name: 'Local Tournament', date: '2025-06-05' },
    { id: 11, name: 'Karate Seminar', date: '2025-06-10' },
    { id: 12, name: 'Sofia Open', date: '2025-05-24' }
  ],
  mk: [
    { id: 1, name: 'Пролетен тренинг камп', date: '2025-05-25' },
    { id: 2, name: 'Локален турнир', date: '2025-06-05' },
    { id: 3, name: 'Карате семинар', date: '2025-06-10' },
    { id: 4, name: 'Охрид Опен', date: '2025-05-24' },
    { id: 5, name: 'Државно првенство', date: '2025-05-25' },
    { id: 6, name: 'Локален турнир', date: '2025-06-05' },
    { id: 7, name: 'Карате семинар', date: '2025-06-10' },
    { id: 8, name: 'Охрид Опен', date: '2025-05-24' },
    { id: 9, name: 'Пролетен тренинг камп', date: '2025-05-25' },
    { id: 10, name: 'Локален турнир', date: '2025-06-05' },
    { id: 11, name: 'Карате семинар', date: '2025-06-10' },
    { id: 12, name: 'Охрид Опен', date: '2025-05-24' },

  ]
}

const newsList = computed(() => newsData[locale.value])
const eventsList = computed(() => eventsData[locale.value])

// Computed: upcoming events for next month
const upcomingEvents = computed(() => {
  const today = new Date()
  return eventsList.value
      .filter(event => new Date(event.date) >= today) // само идни настани
      .sort((a, b) => new Date(a.date) - new Date(b.date)) // сортирај по датум
      .slice(0, 5) // земи првите 5
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
  margin-top: 40px;
  padding-top: 40px;
  margin-bottom: 10px;
  color: white;
}
.page-wrapper {
  background: linear-gradient(to right, #434343, #000000);
  min-height: 74vh;
  padding-top: 40px;
}
</style>
