<template>
   <div class="nav-container">
      <nav>
         <div class="container">
            <router-link to="/">Todos</router-link> |
            <router-link to="/continue">Continue</router-link> |
            <router-link to="/done">Done</router-link>
         </div>
      </nav>
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
   setup() {
      return {};
   },
});
</script>

<style scoped>
.nav-container {
   background: #f1e7db;
   box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1); /* Box shadow ekleyin */
}

nav {
   padding: 30px;
}

nav a {
   font-weight: bold;
   color: #2c3e50;
}

nav a.router-link-exact-active {
   color: #42b983;
}
</style>
