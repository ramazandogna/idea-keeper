<template>
   <div class="container">
      <div class="todo-container">
         <div><h2 class="todo-title">DONE TODOS</h2></div>

         <span v-if="filteredTodos.length > 0">
            <span v-for="todo in filteredTodos">
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
            I believe you, you can finish a task^^
         </span>
      </div>
   </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
//component import
import Todos from '../components/Todos.vue';
import AddTodoInput from '../components/AddTodoInput.vue';
//vuex
import { mapState } from 'vuex';

@Options({
   components: { Todos },
   computed: {
      ...mapState(['todos']),
      filteredTodos() {
         return this.todos.filter((todo) => todo.isDone === true);
      },
   },
})
export default class TodoView extends Vue {}
</script>
