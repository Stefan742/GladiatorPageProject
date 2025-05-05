<template>
  <div id="hero">
    <video
        ref="heroVideo"
        src="/assets/Hero.mp4"
        autoplay
        muted
        playsinline
        class="hero-video"
    ></video>
    <h1>KARATE TEAM GLADIATOR</h1>
    <h3>
      Join Karate Team Gladiator and embark on a journey of discipline, passion, and excellence...
    </h3>
    <div class="hero-buttons">
      <button>
        <span>APPLY NOW</span>
      </button>
      <button @click="scrollToAbout">
        <span>LEARN MORE</span>
      </button>
    </div>
  </div>
</template>
<script setup>
const scrollToAbout = () => {
  const section = document.getElementById('us');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
<style scoped>
#hero {
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
.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left center; /* <-- ова е трикот */
  z-index: 0;
}



#hero h1 {
  font-size: 58px;
  font-weight: 700;
  color: #f1c40f;
  z-index: 2;
  position: relative;
  animation: fadeIn 1.5s ease-in-out;
}

#hero h3 {
  font-size: 22px;
  font-weight: normal;
  max-width: 700px;
  margin-top: 15px;
  color: white;
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

button {
  background: #fff;
  border: none;
  padding: 10px 20px;
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  width: 150px;
  text-transform: uppercase;
  cursor: pointer;
  transform: skew(-21deg);
}

span {
  display: inline-block;
  transform: skew(21deg);
}

button::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  right: 100%;
  left: 0;
  background: rgb(20, 20, 20);
  opacity: 0;
  z-index: -1;
  transition: all 0.5s;
}

button:hover {
  color: #fff;
}

button:hover::before {
  left: 0;
  right: 0;
  opacity: 1;
}
@media (max-width: 768px) {
  #hero {
    margin-top: 20px;
    align-items: center;
    text-align: center;
    padding: 0 10px;
  }

  #hero h1 {
    font-size: 36px;
  }

  #hero h3 {
    font-size: 18px;
    max-width: 90%;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 15px;
  }

  button {
    width: 180px;
    padding: 12px 0;
    font-size: 16px;
  }
}

</style>
