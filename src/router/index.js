import {createRouter,createWebHashHistory} from 'vue-router';
import HomePage from '../components/HomePage.vue';

const router=createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        }
    ]
});

export default router;