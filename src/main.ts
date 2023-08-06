import { createApp } from 'vue';
import App from './App.vue';
//router
import router from './router';
//store
import store from './store';
//global styles
import './assets/main.css';
createApp(App).use(store).use(router).mount('#app');
