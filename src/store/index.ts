import { createStore } from 'vuex';

const STORAGE_KEY = 'todos-storage';

const savedTodos = localStorage.getItem(STORAGE_KEY);
const initialTodos = savedTodos ? JSON.parse(savedTodos) : [];

interface State {
   todos: { id: string; text: string; isDone: boolean }[];
}

export default createStore<State>({
   state: {
      todos: initialTodos,
   },
   getters: {},
   mutations: {
      addToTodos(state, { text, isDone }: { text: string; isDone: boolean }) {
         const id = Math.random().toString(36).substr(2, 9); // Rastgele 9 karakterlik bir id oluştur
         state.todos.unshift({ id, text, isDone }); // Oluşturulan id'yi eklemeyi unutma
         localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
      },
      removeFromTodos(state, todoId) {
         state.todos = state.todos.filter((item) => item.id !== todoId);
         localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
      },
      toggleIsDone(state, todo) {
         todo.isDone = !todo.isDone; // todo.isDone'ı tersine çevir
         localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
      },
   },
});
