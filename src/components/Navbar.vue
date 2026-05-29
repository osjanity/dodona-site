<template>
  <nav class="navbar">
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/performances">Performances</router-link></li>
      <li><router-link to="/dance">Dance</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar',
}
</script>

<style scoped>
.navbar {
  padding: 1.4rem 1.5rem 1.1rem;
  border-bottom: 1px solid rgba(255, 205, 134, 0.3);
}

.nav-links {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 2.8rem;
}

.nav-links li a {
  color: #FFCD86;
  text-decoration: none;
  font-family: 'Lato', sans-serif;
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  transition: color 0.25s ease;
}

.nav-links li a:hover {
  color: #F6A45E;
}

.nav-links li a.router-link-exact-active {
  color: #F6A45E;
  border-bottom: 1px solid rgba(246, 164, 94, 0.6);
  padding-bottom: 3px;
}
</style>