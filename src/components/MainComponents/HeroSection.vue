<!--<template>-->
<!--  <div id="hero">-->
<!--    <video-->
<!--        ref="heroVideo"-->
<!--        src="/assets/VideoFinal.mp4"-->
<!--        autoplay-->
<!--        muted-->
<!--        playsinline-->
<!--        class="hero-video"-->
<!--    ></video>-->
<template>
  <div id="hero">
    <h1>{{ $t('hero.name') }}</h1>
    <h3>{{ $t('hero.text') }}</h3>
    <div class="hero-buttons">
      <button @click="showApply = true">
        <span>{{ $t('hero.apply') }}</span>
      </button>
      <button @click="scrollToAbout">
        <span>{{ $t('hero.learn') }}</span>
      </button>
    </div>

    <!-- Apply Now Modal -->
    <div v-if="showApply" class="modal-overlay" @click.self="showApply = false">
      <div class="modal-content">
        <template v-if="!statusMessage">
          <h2>Apply Now</h2>
          <form @submit.prevent="submitForm">
            <input type="text" placeholder="Your Name" v-model="form.name" required />
            <input type="email" placeholder="Your Email" v-model="form.email" required />
            <textarea placeholder="Your Message" v-model="form.message" rows="4"></textarea>
            <button type="submit">Submit</button>
            <button type="button" class="close-btn" @click="showApply = false">Close</button>
          </form>
        </template>
        <template v-else>
          <p class="status-message">{{ statusMessage }}</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const showApply = ref(false);
const form = reactive({
  name: '',
  email: '',
  message: ''
});
const statusMessage = ref('');

const scrollToAbout = () => {
  const section = document.getElementById('us');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const submitForm = () => {
  statusMessage.value = "Sending...";

  setTimeout(() => {
    statusMessage.value = `Thank you, ${form.name}! Your application has been sent.`;

    // Clear form data
    form.name = '';
    form.email = '';
    form.message = '';

    // Auto-close modal after 3 seconds
    setTimeout(() => {
      showApply.value = false;
      statusMessage.value = '';
    }, 3000);
  }, 1000);
};
</script>

<style scoped>
#hero {
  background: url("/public/assets/hero.png") no-repeat;
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

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left center;
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
  background: black;
  color: white;
  border: none;
  padding: 10px 20px;
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  width: 150px;
  text-transform: uppercase;
  cursor: pointer;
  transform: skew(-21deg);
  position: relative;
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
  background: #f1c40f;
  color: black;
  opacity: 0;
  z-index: -1;
  transition: all 0.5s;
}

button:hover {
  color: black;
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background-color: black;
  padding: 30px;
  border-radius: 10px;
  max-width: 400px;
  width: 90%;
  color: white;
  box-shadow: 0 0 15px #f1c40f;
}

.modal-content h2 {
  margin-bottom: 20px;
  color: #f1c40f;
  text-align: center;
}

.modal-content input,
.modal-content textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  box-sizing: border-box;
}

.modal-content input:focus,
.modal-content textarea:focus {
  outline: 2px solid #f1c40f;
}

.modal-content button[type="submit"] {
  background: #f1c40f;
  color: black;
  font-weight: 700;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  margin-bottom: 10px;
  transition: background 0.3s ease;
}

.modal-content button[type="submit"]:hover {
  background: #d4ac0d;
}

.close-btn {
  background: transparent;
  border: 1px solid #f1c40f;
  color: #f1c40f;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 600;
  text-transform: uppercase;
}

.close-btn:hover {
  background: #f1c40f;
  color: black;
}

.status-message {
  text-align: center;
  color: #f1c40f;
  margin-top: 10px;
  font-weight: 600;
  font-size: 18px;
}
</style>
