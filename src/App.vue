

<template>
  <div class="page-wrapper">
    <div class="meta-container">
      <Navbar />
      <RouterView/>
    </div>
  </div>
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
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
body, html {
  background-color: black;
  margin: 0;
  height: 100%;
  overscroll-behavior: none;
}
h1, h2, h3 {
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.page-wrapper {
  display: flex;
  justify-content: center;
}
.meta-container {
  width: 100%;
  max-width: 800px;
  background-color: #181F2A;
  min-height: 100vh;
  border-left: 1px solid rgba(255, 205, 134, 0.12);
  border-right: 1px solid rgba(255, 205, 134, 0.12);
}
</style>
