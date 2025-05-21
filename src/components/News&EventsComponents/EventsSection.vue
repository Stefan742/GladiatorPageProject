<template>
  <div class="card">
    <div class="card-header">{{ translatedTitle }}</div>
    <div v-for="event in events" :key="event.id" class="card-item">
      <h3 class="item-title">{{ event.name }}</h3>
      <p class="item-date">{{ formatDate(event.date) }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  events: Array,
  titleKey: String
})

const { t } = useI18n()

const translatedTitle = computed(() => t(props.titleKey))

function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  return new Date(dateStr).toLocaleDateString(undefined, options)
}
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
