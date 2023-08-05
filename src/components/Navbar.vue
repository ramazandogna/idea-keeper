<template>
   <nav>
      <router-link to="/">Todos</router-link> |
      <router-link to="/about">About</router-link>
   </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
   setup() {
      return {};
   },
});
</script>

<style scoped></style>
