<template>
   <div class="todo-container">
      <h2>Todo APP</h2>

      <AddTodoInput />

      <Todos
         v-for="(todo, index) in todos"
         :key="index"
         :todo="todo"
      />
   </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
//component import
import Todos from '../components/Todos.vue';
import AddTodoInput from '../components/AddTodoInput.vue';
//vuex
import { mapState } from 'vuex';

@Options({
   components: { Todos, AddTodoInput },
   computed: mapState(['todos']),
})
export default class TodoView extends Vue {
   todos: any;
}
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
