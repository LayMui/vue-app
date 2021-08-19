import Vue from 'vue'
import Router from 'vue-router';

import HomePage from '../components/HomePage.vue';
import FoodDetail from '../components/FoodDetailPage.vue';

Vue.use(Router);

export default new Router({
    routes: [
        { 
            name: 'Home',
            path: '/',
            component: HomePage,
        },
        {
            name: 'FoodDetail',
            path: '/food-details',
            component: FoodDetail
        }
    ]
});