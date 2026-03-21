<template>
  <nav class="navbar">
    <div class="container">
      <div class="menu-icon" @click="toggleMenu">
        <i :class="isOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </div>
      <ul :class="{ 'nav-links': true, 'open': isOpen }">
        <li><router-link to="/" @click="closeMenu">home</router-link></li>
        <li><router-link to="/performances" @click="closeMenu">performances</router-link></li>
        <!-- <li><router-link to="/sound" @click="closeMenu">sound</router-link></li> -->
        <li><router-link to="/dance" @click="closeMenu">dance</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar',
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
    closeMenu() {
      this.isOpen = false
    }
  }
}
</script>

<style scoped>
/* Basic Styles */
.navbar {
  background-color: none;
  padding: .5rem;
  color: white;
}

.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

/* Navigation Links */
.nav-links {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding-left: 0px;
  gap: 1rem;
}

.nav-links li a {
  color: #FFCD86;
  align-items: center;
  text-decoration: none;
  font-size: 1.2rem;
  font-variant: small-caps;
  transition: color 0.3s ease;
}

.nav-links li a:hover {
  color: #a57635;
}

/* Hamburger Menu */
.menu-icon {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Mobile Styles
@media (max-width: 768px) {
  .menu-icon {
    display: block;
  }

  .nav-links {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: none;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    padding: 1rem;
  }

  .nav-links.open {
    transform: translateY(0);
  }

  .nav-links li {
    margin-bottom: 0.5rem;
  }
} */

</style>