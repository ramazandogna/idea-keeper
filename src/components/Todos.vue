<template>
   <div
      class="todo-card"
      :class="{ 'done-todo-card': isDone }"
      @click="toggleCardState"
   >
      <p class="todo-item">{{ todo }}</p>
      <span class="button-container">
         <button>EDIT</button>
         <button
            @click="store.removeTodo"
            class="delete-button"
         >
            DELETE
         </button>
      </span>
   </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
//vuex
import { useStore } from 'vuex';
//vue imports
import { ref } from 'vue';

@Options({
   props: {
      todo: String,
   },
})
export default class HelloWorld extends Vue {
   toggleCardState: any;
   isDone: any;
   todo: any;
   removeTodo: ((payload: MouseEvent) => void) | undefined;
   setup(props: { todo: any }) {
      const store = useStore();

      const removeTodo = () => {
         store.commit('removeFromTodos', this.cardText.value); // Change 'this.todo.value' to 'this.cardText.value'
      };

      const toggleCardState = () => {
         this.isDone.value = !this.isDone.value; // Added 'this.' before 'isDone.value'
         if (this.isDone.value) {
            store.commit('addToDoneTodos', this.cardText.value);
         } else {
            store.commit('removeFromDoneTodos', this.cardText.value);
         }
      };

      const cardText = ref(props.todo);
      const isDone = ref(false);

      return { toggleCardState, isDone, cardText, removeTodo }; // Assign 'removeTodo' to the returned object
   }
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
