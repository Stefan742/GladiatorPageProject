<template>
  <div class="card">
    <div class="card-header">{{ t('upcomingEventsTitle') }}</div>
    <div v-if="events.length === 0" class="empty-msg">{{ t('noEvents') }}</div>
    <div v-else>
      <div v-for="event in events" :key="event.id" class="card-item">
        <h3 class="item-title">{{ event.name }}</h3>
        <p class="item-date">{{ formatDate(event.date) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  events: Array
})
const { t, locale } = useI18n()

function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  return new Date(dateStr).toLocaleDateString(locale.value, options)
}
</script>

<style scoped>
.card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
  max-width: 400px;
  width: 100%;
  height: auto;
  flex: 1;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Спречува излегување */
  box-sizing: border-box;
}

.card-header {
  background-color: #000000;
  color: #ffffff;
  font-size: 1.2em;
  font-weight: bold;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 5px;
  text-align: center;
}

.card-item {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.item-title {
  font-size: 1.1em;
  font-weight: bold;
}

.item-date {
  font-size: 0.9em;
  color: #888;
}

.empty-msg {
  text-align: center;
  color: #999;
  font-style: italic;
}
</style>
