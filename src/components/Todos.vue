<template>
   <div class="todo-card">
      <p class="todo-item">Your Todos Will be Here</p>
      <span class="button-container">
         <button>EDIT</button>
         <button class="delete-button">DELETE</button>
      </span>
   </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
   props: {
      // msg: String
   },
})
export default class HelloWorld extends Vue {
   // msg!: string
}
</script>

<style scoped>
.todo-card {
   margin: 1rem 0;
   padding: 1rem 4rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background: #f1e7db;
   border-radius: 0.5rem;
   border-left: 10px solid var(--primary);
   transition: all 0.3s ease-in-out;
}

.todo-card:hover {
   border-left: 20px solid var(--primary);
   transition: all 0.3s ease-in-out;
}

.todo-item {
   font-size: 18px;
   cursor: pointer;
}

.delete-button {
   background: rgb(194, 65, 67);
}

.delete-button:hover {
   background: var(--warning);
}
</style>
