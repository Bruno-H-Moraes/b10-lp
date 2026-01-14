import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Gallery from '../views/Gallery.vue';
import News from '../views/News.vue';

const router = createRouter({
    // Adicionamos import.meta.env.BASE_URL para o router saber que está em /b10-lp/
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: Home },
        { path: '/galeria', component: Gallery },
        { path: '/noticias', name: 'News', component: News }
    ]
});

export default router;