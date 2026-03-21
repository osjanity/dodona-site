

<template>
  <center>
<div class="meta-container">
   <Navbar />
</div>
</center>
  <RouterView/>
</template>

<script>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import '@fontsource/inter-tight';

export default {
  name: 'App',
  components: {
    RouterView,
    Navbar,
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
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

.meta-container{ 
    width: 100%;
    max-width: 800px;
    background-color: #181F2A;
    flex-wrap: wrap;
}
</style>
