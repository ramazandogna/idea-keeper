<template>
   <div class="todo-card">
      <p>Your Todos Will be Here</p>
      <span class="button-container">
         <button>delete</button>
         <button>edit</button>
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
   display: flex;
   justify-content: space-between;
}
</style>
