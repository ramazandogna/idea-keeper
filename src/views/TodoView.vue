<template>
   <div>
      <h2>Todo APP</h2>
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
export default class HomeView extends Vue {}
</script>
