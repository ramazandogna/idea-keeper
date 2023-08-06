import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
const routes: Array<RouteRecordRaw> = [
   {
      path: '/',
      name: 'home',
      component: HomeView,
   },
   {
      path: '/done',
      name: 'done',
      component: () => import('../views/DoneView.vue'),
   },
   {
      path: '/continue',
      name: 'continue',
      component: () => import('../views/ContinueView.vue'),
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
