<template>
   <div
      class="todo-card"
      :class="{ 'done-todo-card': todo.isDone }"
   >
      <p
         class="todo-item"
         @click="toggleComplete"
      >
         {{ text }}
      </p>
      <span class="button-container">
         <button>EDIT</button>
         <button
            @click="removeTodo"
            class="delete-button"
         >
            DELETE
         </button>
      </span>
   </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';

const props = defineProps<{
   todo: String;
   text: String;
}>();

const store = useStore();

const removeTodo = () => {
   store.commit('removeFromTodos', props.todo.id);
   console.log('çalıştı');
};

const toggleComplete = () => {
   store.commit('toggleIsDone', props.todo);
};
</script>

<style scoped>
.todo-card {
   margin: 1rem 0;
   padding: 1rem 1rem;
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
   padding: 0.5rem;
}

.delete-button {
   background: rgb(194, 65, 67);
}

.delete-button:hover {
   background: var(--warning);
}

.done-todo-card {
   border-left: 40px solid var(--warning);
   text-decoration: line-through;
}

.done-todo-card:hover {
   border-left: 40px solid var(--warning);
}
</style>
