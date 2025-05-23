<template>
  <div class="card">
    <div class="card-header">{{ translatedTitle }}</div>
    <div class="scroll-content">
      <div v-if="events.length === 0" class="empty-msg">
        {{ $t('noEventsAvailable') }}
      </div>
      <div v-for="event in events" :key="event.id" class="card-item">
        <h3 class="item-title">{{ event.name }}</h3>
        <p class="item-date">{{ formatDate(event.date) }}</p>
      </div>
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
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
  max-width: 400px;
  width: 100%;
  max-height: 430px;
  min-height: 250px;
  height: 100%;
  flex: none;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
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

.scroll-content {
  overflow-y: auto;
  padding-right: 5px;
  flex: 1;
}

.scroll-content::-webkit-scrollbar {
  width: 10px;
}
.scroll-content::-webkit-scrollbar-thumb {
  background-color: orange;
  border-radius: 3px;
}
.scroll-content::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

.scroll-content:hover{
  cursor: pointer;
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

.empty-msg {
  text-align: center;
  color: #888;
  padding: 10px;
}
</style>
