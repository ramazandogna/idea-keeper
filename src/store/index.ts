import { createStore } from 'vuex';

const STORAGE_KEY = 'todos-storage';

const savedTodos = localStorage.getItem(STORAGE_KEY);
const initialTodos = savedTodos ? JSON.parse(savedTodos) : [];

interface State {
   todos: string[];
   doneTodos: string[];
   cardColor: string;
}

export default createStore<State>({
   state: {
      todos: initialTodos, // Verilerin sayfa yenilendiğinde de saklanabilmesi için initialTodos'u todos'a atıyoruz
      doneTodos: [],
      cardColor: 'var(--primary)',
   },
   getters: {},
   mutations: {
      addToTodos(state, todo: string) {
         state.todos.push(todo);
         localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
      },
      removeFromTodos(state, todo: string) {
         state.todos = state.todos.filter((item) => item !== todo);
         localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
      },
      addToDoneTodes(state, todo: string) {
         state.doneTodos.push(todo);
         state.cardColor = 'var(--secondary)';
         localStorage.setItem(STORAGE_KEY, JSON.stringify(state.doneTodos)); // doneTodos dizisini localStorage'a kaydediyoruz
      },
      removeFromDoneTodos(state, todo: string) {
         state.doneTodos = state.doneTodos.filter((item) => item !== todo);
         state.cardColor = 'var(--primary)';
         localStorage.setItem(STORAGE_KEY, JSON.stringify(state.doneTodos)); // doneTodos dizisini localStorage'a kaydediyoruz
      },
   },
   actions: {},
   modules: {},
});
