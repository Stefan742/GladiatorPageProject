<template>
  <LoadingScreen v-if="isLoading"/>
  <div id="container">
  <Navbar />
  <h1>Contact us</h1>
  <div class="contact-container">
    <!-- FAQ Section -->
    <div class="side faq-section">
      <h2>Most Asked Questions</h2>
      <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
        <button class="faq-question" @click="toggleAnswer(index)">
          {{ faq.question }}
          <span v-if="faq.open" class="arrow-icon">▲</span>
          <span v-else class="arrow-icon">▼</span>
        </button>
        <div v-show="faq.open" class="faq-answer">
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>

    <!-- Contact Form Section -->
    <div class="card contact-form">
      <h2>Contact Us</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Ime:</label>
          <input type="text" id="name" v-model="formData.name" placeholder="Внесете го вашето име" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" placeholder="Внесете го вашиот email" required />
        </div>
        <div class="form-group">
          <label for="message">Poruka:</label>
          <textarea id="message" v-model="formData.message" placeholder="Вашата порака..." required></textarea>
        </div>
        <button class="submitBtn" type="submit">Send</button>
      </form>
    </div>

    <!-- Location Section -->
    <div class="card location-section">
      <h2>Our Location</h2>
      <p>Find us at the following address:</p>
      <p><strong>Никола Карев, Велес 1400</strong></p>
      <div class="map-container">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.187297295793!2d21.76378827555154!3d41.71647707551872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13542a2b4f451511%3A0xea49762bcb427dde!2z0J7QntCjIOKAntCS0LDRgdC40Lsg0JPQu9Cw0LLQuNC90L7QsuKAnSAtINCS0LXQu9C10YE!5e0!3m2!1smk!2smk!4v1745349291680!5m2!1smk!2smk"
            width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  </div>
  </div>
  <Footer />
</template>

<script setup>
import {onMounted, ref} from 'vue';
import Navbar from "@/components/MainComponents/Navbar.vue";
import Footer from "@/components/MainComponents/Footer.vue";
import LoadingScreen from "@/components/MainComponents/LoadingScreen.vue";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2500);
});
// FAQ Data
const faqs = ref([
  { question: 'How can I start training?', answer: 'You can schedule a meeting through our website or come in class on Tuesday or Thursday at 17:30.', open: false },
  { question: 'At what age can I start?', answer: 'You can start at any age you need to be only 4 years or older.', open: false },
  { question: 'Do you need private trainings?', answer: 'Yes, we need private trainings; you only need to schedule it first through our website.', open: false },
]);

// Form Data
const formData = ref({
  name: '',
  email: '',
  message: ''
});

// Toggle FAQ Answer
const toggleAnswer = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};

// Handle Form Submit
const handleSubmit = () => {
  const { name, email, message } = formData.value;
  const mailtoLink = `mailto:arsovskamartina02@gmail.com?subject=Poraka%20od%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AEmail: ${email}`;
  window.location.href = mailtoLink;
};

</script>

<style scoped>
h1{
  margin-top: 90px;
  text-align: center;
  color: white;
}
h2{
  color: white;
}
#container{
  background: linear-gradient(to right, #434343, #000000);
}
.contact-container {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}
.side{
  flex: 1;
  min-width: 300px;
  max-width: 45%;
  padding: 20px;
}
.card {
  flex: 1;
  min-width: 300px;
  max-width: 45%;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
}

.faq-section {
  margin-bottom: 40px;
}

.faq-item {
  margin-bottom: 10px;
}

.faq-question {
  background-color: #f1c40f;
  color: black;
  border: none;
  padding: 10px;
  width: 100%;
  text-align: left;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s ease;
}

.faq-question:hover {
  background-color: #f1c40f;
}

.arrow-icon {
  font-size: 18px;
}

.faq-answer {
  padding: 10px;
  background-color: #ecf0f1;
  border-radius: 5px;
  margin-top: 5px;
}

.contact-form h2,
.location-section h2 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
}
textarea{
  height: 180px;
}
input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

input::placeholder, textarea::placeholder {
  color: #aaa;
}

.submitBtn{
  width: 400px;
  background-color: #222222;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.submitBtn:hover{
  background-color: #f1c40f;
  color: #000;
}
.location-section p {
  font-size: 16px;
  color: #555;
}

.map-container {
  margin-top: 20px;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
}
@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .side, .card {
    max-width: 90%;
    min-width: unset;
  }

  .submitBtn {
    width: 100%;
    padding: 12px;
    font-size: 16px;
  }

  .map-container {
    height: 300px;
  }

  h1 {
    font-size: 28px;
  }

  h2 {
    font-size: 22px;
  }
}

@media (max-width: 480px) {
    #container{
      margin-top: -60px;
    }
  .submitBtn {
    font-size: 14px;
    padding: 10px;
  }

  textarea {
    height: 150px;
  }

  h1 {
    padding-top: 100px;
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }

  .faq-question {
    font-size: 14px;
    padding: 8px;
  }

  .faq-answer p {
    font-size: 14px;
  }

  .location-section p {
    font-size: 14px;
  }
}

</style>
