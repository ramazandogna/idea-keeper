import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import TodoView from '../views/TodoView.vue';
const routes: Array<RouteRecordRaw> = [
   {
      path: '/',
      name: 'home',
      component: TodoView,
   },
   {
      path: '/donetodos',
      name: 'donetodos',
      component: () => import('../views/DoneTodes.vue'),
   },
   {
      path: '/continuetodos',
      name: 'continuetodos',
      component: () => import('../views/ContinueTodos.vue'),
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
