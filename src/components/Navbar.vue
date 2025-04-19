<template>
  <div id="navbar">
    <div class="nav-left">
    <a href="https://www.facebook.com/Gladiatorteamm">
      <img src="../../public/assets/logo.png" alt="Logo" />
    </a>
    </div>
    <div class="nav-center">
    <nav>
      <ul>
        <li><a href="#home">About Us</a></li>
        <li><a href="treninzi.html">Training</a></li>
        <li><a href="#news">News & Events</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    </div>
    <div class="nav-right">
    <div class="nav-buttons">
      <button>JOIN US</button>
      <button>CONTACT US</button>
    </div>
    </div>
  </div>
</template>

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
.nav-center,
.nav-right {
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
}</style>
