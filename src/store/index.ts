import { createStore } from 'vuex';

interface State {
   todos: string[];
   doneTodos: string[];
   cardColor: string;
}

export default createStore({
   state: {
      todos: [],
      doneTodos: [],
      cardColor: 'var(--primary)',
   },
   getters: {},
   mutations: {
      addToTodos(state: State, todo: string) {
         state.todos.push(todo);
      },
      removeFromTodos(state: State, todo: string) {
         state.todos = state.todos.filter((item) => item !== todo);
      },
      addToDoneTodes(state: State, todo: string) {
         state.doneTodos.push(todo);
         state.cardColor = 'var(--secondary)';
      },
      removeFromDoneTodos(state: State, todo: string) {
         state.doneTodos = state.todos.filter((item) => item !== todo);
         state.cardColor = 'var(--primarry)';
      },
   },
   actions: {},
   modules: {},
});
