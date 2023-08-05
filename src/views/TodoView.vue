<template>
   <div class="todo-container">
      <h2>Todo APP</h2>

      <AddTodoInput />

      <Todos />
      <Todos />
      <Todos />
      <Todos />
   </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
//component import
import Todos from '../components/Todos.vue';
import AddTodoInput from '../components/AddTodoInput.vue';

@Options({
   components: { Todos, AddTodoInput },
})
export default class TodoView extends Vue {}
</script>

<style scoped>
h2 {
   font-size: 2.5rem;
   font-weight: 700;
   margin: 1rem 1rem 2rem 1rem;
   border-bottom: 2px solid var(--primary);
   display: inline-block;
}
</style>
