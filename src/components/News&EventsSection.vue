<template>
  <div class="news-events-container">
    <!-- Картичка 1: News -->
    <div class="card">
      <h2>Latest News</h2>
      <div v-for="news in newsList" :key="news.id" class="item">
        <h3>{{ news.title }}</h3>
        <p class="date">{{ formatDate(news.date) }}</p>
        <p>{{ news.description }}</p>
      </div>
    </div>

    <!-- Картичка 2: Upcoming Events (Next Month) -->
    <div class="card">
      <h2>Upcoming Events (Next Month)</h2>
      <div v-for="event in upcomingEvents" :key="event.id" class="item">
        <h3>{{ event.name }}</h3>
        <p v-if="event.type === 'event'">{{ event.bio }}</p>
        <p v-if="event.type === 'tournament'" class="date">{{ formatDate(event.date) }}</p>
      </div>
    </div>

    <!-- Картичка 3: All Events -->
    <div class="card">
      <h2>All Events (This Year)</h2>
      <div v-for="event in allEvents" :key="event.id" class="item">
        <h3>{{ event.name }}</h3>
        <p v-if="event.type === 'event'">{{ event.bio }}</p>
        <p v-if="event.type === 'tournament'" class="date">{{ formatDate(event.date) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [
        {
          id: 1,
          title: 'New Dojo Opening',
          description: 'We opened a new dojo in Skopje.',
          date: '2025-04-10',
        },
        {
          id: 2,
          title: 'Championship Results',
          description: 'Our team won 3 medals!',
          date: '2025-03-22',
        },
      ],
      eventsList: [
        {
          id: 1,
          type: 'event',
          name: 'Spring Training Camp',
          bio: 'Training camp for all levels.',
          date: '2025-05-25',
        },
        {
          id: 2,
          type: 'tournament',
          name: 'Local Tournament',
          date: '2025-06-05',
        },
        {
          id: 3,
          type: 'event',
          name: 'Karate Seminar',
          bio: 'Advanced techniques workshop.',
          date: '2025-07-10',
        },
        {
          id: 4,
          type: 'tournament',
          name: 'National Championship',
          date: '2025-11-12',
        },
      ],
    };
  },
  computed: {
    upcomingEvents() {
      const today = new Date();
      const nextMonth = new Date(today);
      nextMonth.setMonth(today.getMonth() + 1);
      return this.eventsList.filter((event) => {
        const eventDate = new Date(event.date);
        return (
            eventDate.getMonth() === nextMonth.getMonth() &&
            eventDate.getFullYear() === nextMonth.getFullYear()
        );
      });
    },
    allEvents() {
      return [...this.eventsList].sort(
          (a, b) => new Date(a.date) - new Date(b.date)
      );
    },
  },
  methods: {
    formatDate(dateStr) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateStr).toLocaleDateString(undefined, options);
    },
  },
};
</script>

<style scoped>
.news-events-container {
  margin-top: 200px;
  display: flex;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
  color: #222;
}

.card {
  flex: 1 1 30%;
  background-color: #f8f8f8;
  color: #222;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-width: 280px;
}

.card h2 {
  background-color: #000;
  color: #fff;
  padding: 8px 12px;
  border-radius: 6px;
  margin-bottom: 10px;
}

.item {
  margin-top: 15px;
  padding-bottom: 10px;
  border-bottom: 1px dashed #ccc;
}

.item:last-child {
  border-bottom: none;
}

h3 {
  margin: 0;
}

.date {
  font-size: 0.9em;
  color: #666;
}
</style>
