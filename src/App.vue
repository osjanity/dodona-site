

<template>
  <!-- Renders the right component when router links are triggered-->
  <RouterView/>
</template>

<script>
import { RouterView } from 'vue-router'
import '@fontsource/inter-tight';

export default {
  name: 'App',
  components: {
    RouterView,
  }
}
</script>

<style>
#app {
  font-family: 'Inter Variable', 'Inter Placeholder', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
body, html {
  background-color: black;
  margin: 0; 
  height: 100%; 
}
</style>
