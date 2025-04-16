<template>
  <div id="hero">
    <h1>KARATE TEAM GLADIATOR</h1>
    <h3>
      Join Karate Team Gladiator and embark on a journey of discipline, passion, and excellence...
    </h3>
    <div class="hero-buttons">
      <button>APPLY NOW</button>
      <button>LEARN MORE</button>
    </div>
  </div>
</template>

<style scoped>
#hero {
  background: url("../../public/assets/hero.png") no-repeat center center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  margin: 0;
}



#hero h1 {
  font-size: 60px;
  font-weight: 700;
  color: black;
  z-index: 2;
  position: relative;
  animation: fadeIn 1.5s ease-in-out;
}

#hero h3 {
  font-size: 22px;
  font-weight: normal;
  max-width: 700px;
  margin-top: 15px;
  color: dimgrey;
  z-index: 2;
  position: relative;
}

.hero-buttons {
  margin-top: 20px;
  z-index: 2;
  position: relative;
  display: flex;
  gap: 20px;
  justify-content: center;
}

.hero-buttons button {
  background: #f1c40f;
  border: none;
  padding: 12px 20px;
  font-size: 18px;
  color: black;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
  margin: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}

.hero-buttons button:hover {
  background: #ffdd57;
  transform: scale(1.05);
}
</style>
