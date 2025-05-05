<template>
  <div class="page-wrapper">
    <LoadingScreen v-if="isLoading"/>
    <navbar/>
    <h1 id="title">News & Events</h1>
      <div class="news-events-container">
        <NewsSection :newsList="newsList"/>
        <EventsSection :events="upcomingEvents" title="Upcoming Events"/>
        <EventsSection :events="allEvents" title="All Events"/>
      </div>
  </div>
  <Footer/>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import NewsSection from "@/components/NewsSection.vue";
import EventsSection from "@/components/EventsSection.vue";
import Footer from "@/components/Footer.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";

export default {
  components: {
    LoadingScreen,
    Footer,
    Navbar,
    NewsSection,
    EventsSection
  },
  data() {
    return {
      isLoading: true,
      newsList: [
        {id: 1, title: 'New Dojo Opening', description: 'We opened a new dojo in Skopje.', date: '2025-04-10'},
        {id: 2, title: 'Championship Results', description: 'Our team won 3 medals!', date: '2025-03-22'}
      ],
      eventsList: [
        {id: 1, type: 'event', name: 'Spring Training Camp', bio: 'Training camp for all levels.', date: '2025-05-25'},
        {id: 2, type: 'tournament', name: 'Local Tournament', date: '2025-06-05'},
        {id: 3, type: 'event', name: 'Karate Seminar', bio: 'Advanced techniques workshop.', date: '2025-07-10'},
        {id: 4, type: 'tournament', name: 'National Championship', date: '2025-11-12'}
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2500);
  },
  computed: {
    upcomingEvents() {
      const today = new Date();
      const nextMonth = new Date(today);
      nextMonth.setMonth(today.getMonth() + 1);
      return this.eventsList.filter(event => {
        const eventDate = new Date(event.date);
        return (
            eventDate.getMonth() === nextMonth.getMonth() &&
            eventDate.getFullYear() === nextMonth.getFullYear()
        );
      });
    },
    allEvents() {
      return [...this.eventsList].sort((a, b) => new Date(a.date) - new Date(b.date));
    }
  }
};
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
  /*background: linear-gradient(to bottom, #2c3e50, #4ca1af);*/
  min-height: 74vh;
}

</style>
