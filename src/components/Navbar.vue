<template>
  <div id="navbar">
    <div class="nav-left">
      <a href="https://www.facebook.com/Gladiatorteamm">
        <img src="/assets/logo.png" alt="Logo" />
      </a>
    </div>

    <div class="burger" @click="toggleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    <div class="nav-center" :class="{ open: isMenuOpen }">
      <nav>
        <ul>
          <li><router-link to="/">About Us</router-link></li>
          <li><router-link to="/training">Training</router-link></li>
          <li><a href="#news">News & Events</a></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>


<style scoped>
#navbar {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 15px 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
.nav-left,
.nav-center
{
  display: flex;
  align-items: center;
}

.nav-center ul {
  gap: 25px;
}

.nav-right button {
  padding: 10px 18px;
  border-radius: 4px;
}
#navbar img {
  width: 55px;
  height: 55px;
}

nav ul {
  list-style-type: none;
  display: flex;
  gap: 20px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: color 0.3s;
}

nav ul li a:hover {
  color: #f1c40f;
}

.nav-buttons button {
  background: none;
  border: 2px solid white;
  color: white;
  padding: 8px 15px;
  margin-left: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.nav-buttons button:hover {
  background: #f1c40f;
  color: black;
}
@media (max-width: 768px) {
  .burger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25px;
    height: 20px;
    cursor: pointer;
  }

  .burger .bar {
    height: 3px;
    background: white;
    border-radius: 2px;
  }

  .nav-center {
    display: none;
    width: 100%;
    flex-direction: column;
    text-align: center;
  }

  .nav-center.open {
    display: flex;
    margin-top: 15px;
  }

  .nav-center nav ul {
    flex-direction: column;
    gap: 10px;
  }

  #navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-left {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>
