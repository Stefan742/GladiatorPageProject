import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import Training from "@/views/Training.vue";

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/gallery', name: 'Gallery', component: Gallery },
    {path: '/training', name: 'Training',component: Training}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router