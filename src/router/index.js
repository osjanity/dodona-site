import {createRouter,createWebHistory} from 'vue-router';
import HomePage from '../components/HomePage.vue';
import SoundPage from '../components/SoundPage.vue';
import PerformancesPage from '../components/PerformancesPage.vue';
import DancePage from '../components/DancePage.vue';
import AdminPage from '../components/AdminPage.vue';

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
        },
        {
            path: '/dance',
            name: 'dancepage',
            component: DancePage
        },
        {
            path: '/admin',
            name: 'adminpage',
            component: AdminPage
        }
    ]
});

export default router;
