<template>
   <div class="container">
      <div class="todo-container">
         <h2 class="todo-title">TODO List</h2>

         <AddTodoInput />

         <span v-if="todos.length > 0">
            <span v-for="todo in todos">
               <Todos
                  :key="todo.id"
                  :todo="todo"
                  :text="todo.text"
                  isDone="todo.isDone"
               />
            </span>
         </span>
         <span
            class="have-not-todo"
            v-else
         >
            U haven't any task yet :/
         </span>
      </div>
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

<style>
.todo-container {
   margin: 0 1rem;
}
.todo-title {
   font-size: 2.5rem;
   font-weight: 700;
   margin: 3rem 1rem 3rem 1rem;
   border-bottom: 2px solid var(--primary);
   display: inline-block;
}

.have-not-todo {
   font-size: 2rem;
   font-weight: 700;
   display: flex;
   justify-content: center;
   text-align: center;
   display: inline-block;
   color: var(--warning);
   opacity: 0.4;
}
</style>
