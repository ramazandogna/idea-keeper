<template>
   <form
      @submit.prevent="handleSubmit"
      class="webflow-style-input"
   >
      <input
         class=""
         type="text"
         v-model="value"
         placeholder="Enter a task."
      />
      <button type="submit"><i class="fa-solid fa-arrow-right"></i></button>
   </form>
</template>

<script setup lang="ts">
//icon imports
import '@fortawesome/fontawesome-free/css/all.min.css';
//vue imports
import { ref } from 'vue';
//store import
import store from '@/store';
//vuex
import { useStore } from 'vuex';

const value = ref<string>('');
const isDone = ref<boolean>(false);

const handleSubmit = () => {
   if (value.value.trim() !== '') {
      //eğer value.vale boşluktan ibaret yada boş değilse
      store.commit('addToTodos', {
         text: value.value,
         isDone: isDone.value,
      });
      value.value = '';
   }
};
</script>

<style scoped>
:root {
   --input-background: rgba(189, 193, 206, 0.8);
   --input-text-inactive: #3a3a3b;
   --input-text-active: #000000;
}

/* Gradient animation */
@keyframes gradient {
   0% {
      background-position: 0 0;
   }
   100% {
      background-position: 100% 0;
   }
}
.webflow-style-input {
   position: relative;
   display: flex;
   flex-direction: row;
   width: 90%;
   max-width: 400px;
   margin: 0 auto;
   margin-bottom: 2rem;

   border-radius: 2px;
   padding: 0.4rem 0.8rem 0.6rem;
   background: linear-gradient(
      to right,
      rgba(178, 148, 255, 0.7),
      /* Başlangıç rengi (opacity 0.5) */ rgba(87, 230, 230, 0.7),
      /* Orta rengi (opacity 0.5) */ rgba(254, 255, 184, 0.7),
      /* Ortadan sağa rengi (opacity 0.5) */ rgba(87, 230, 230, 0.7),
      /* Sağdan ortaya rengi (opacity 0.5) */ rgba(178, 148, 255, 0.7),
      /* Sağdan başlangıç rengi (opacity 0.5) */ rgba(87, 230, 230, 0.7)
         /* Son renk (opacity 0.5) */
   );
   background-size: 500% auto;
   animation: gradient 3s linear infinite;
   border-radius: 0.5rem;
}

/* .webflow-style-input input */
.webflow-style-input input {
   flex-grow: 1;
   color: var(--input-text-active);
   font-size: 1rem;
   line-height: 2.4rem;
   vertical-align: middle;
}

.webflow-style-input input::placeholder {
   color: var(--input-text-inactive);
}

/* .webflow-style-input button */
.webflow-style-input button {
   color: var(--input-text-inactive);
   font-size: 1.5rem;
   line-height: 2.4rem;
   vertical-align: middle;
   transition: color 0.25s;
}

.webflow-style-input button:hover {
   color: var(--input-text-active);
}

/* font style reset */

input {
   border-style: none;
   background: transparent;
   outline: none;
}
button {
   padding: 0;
   background: none;
   border: none;
   outline: none;
   transform: translate(0);
}

button:hover {
   background: initial;
}

/* .webflow-style-input button */
.webflow-style-input button {
   /* ... diğer stiller ... */
   transition: all 0.3s ease-in-out; /* Transform için geçiş eklendi */
}

.webflow-style-input:hover button {
   color: var(--primary);
   transform: translateX(5px); /* Sağa 5px kaydırma efekti */
}
</style>
