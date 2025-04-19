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
  align-items: flex-end;
  text-align: right;
  padding: 0 20px;
  margin: 0;
  background-attachment: fixed;
}



#hero h1 {
  font-size: 58px;
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
  background: transparent;
  border: 2px solid black;
  color: black;
  padding: 10px 18px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
  text-transform: uppercase;
  box-shadow: none;
}

.hero-buttons button:hover {
  background: #f1c40f;
  color: black;
  /*border: 2px solid white;*/
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
</style>
