import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import Training from "@/views/Training.vue";
import Contact from "@/components/Contact.vue";
import NewsAndEvents from "@/views/NewsAndEvents.vue"

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/gallery', name: 'Gallery', component: Gallery },
    {path: '/training', name: 'Training',component: Training},
    {path: '/contact', name: 'Contact', component: Contact},
    {path: '/news&events', name: 'NewsAndEvents', component: NewsAndEvents}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router