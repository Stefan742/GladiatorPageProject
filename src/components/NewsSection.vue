<template>
  <div class="card">
    <div class="card-header">Latest News</div>
    <div v-for="news in newsList" :key="news.id" class="card-item">
      <h3 class="item-title">{{ news.title }}</h3>
      <p class="item-date">{{ formatDate(news.date) }}</p>
      <p class="item-text">{{ news.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['newsList'],
  methods: {
    formatDate(dateStr) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateStr).toLocaleDateString(undefined, options);
    }
  }
};
</script>

<style scoped>
.card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  padding: 15px;
  min-width: 300px;
  flex: 1;
}
.card-header {
  background-color: #000000;
  color: #ffffff;
  font-size: 1.2em;
  font-weight: bold;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 15px;
  text-align: center;
}
.card-item {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}
.item-title {
  font-size: 1.1em;
  font-weight: bold;
}
.item-date {
  font-size: 0.9em;
  color: #888;
}
.item-text {
  font-size: 0.95em;
  color: #333;
}
</style>
