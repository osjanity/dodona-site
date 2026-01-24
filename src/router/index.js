import {createRouter,createWebHistory} from 'vue-router';
import HomePage from '../components/HomePage.vue';
import SoundPage from '../components/SoundPage.vue';
import PerformancesPage from '../components/PerformancesPage.vue'

const router=createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/sound',
            name: 'soundpage',
            component: SoundPage
        },
        {
            path: '/performances',
            name: 'performancespage',
            component: PerformancesPage
        }
    ]
});

export default router;