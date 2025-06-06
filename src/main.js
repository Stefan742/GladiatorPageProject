import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index.js'
import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import mk from './locales/mk.json'
import './assets/main.css'


const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'mk',
    messages: { en, mk }
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
