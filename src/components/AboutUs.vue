<template>
  <div id="us">
    <img src="../../public/assets/us.jpg" height="400" width="400" class="fade-in-left"/>
    <div id="side">
      <h1>DISCOVER OUR JOURNEY</h1>
      <p>Karate Team Gladiator has been a beacon of martial arts excellence since 2007...</p>
    </div>
    <div id="middle">
      <div class="row">
        <div class="column">
          <h1><span>18</span> Years</h1>
          <p>Since our founding...</p>
        </div>
        <div class="column">
          <h1>Awards</h1>
          <p>Our team has proudly earned...</p>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <h1><span>100</span> Members</h1>
          <p>With a strong focus on community...</p>
        </div>
        <div class="column">
          <h1><span>5</span> Core Values</h1>
          <p>Our core values of discipline...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelector('.fade-in-left')?.classList.add('active');

        const numbers = document.querySelectorAll("#middle h1 span");
        const startCounting = (el, target, duration) => {
          let start = 0;
          const step = Math.abs(Math.floor(duration / target));
          const timer = setInterval(() => {
            start++;
            el.innerText = start;
            if (start === target) clearInterval(timer);
          }, step);
        };

        startCounting(numbers[0], 18, 2000);
        startCounting(numbers[1], 100, 2000);
        startCounting(numbers[2], 5, 2000);
        observer.disconnect();
      }
    });
  }, { threshold: 0.6 });

  const middle = document.querySelector('#middle');
  if (middle) observer.observe(middle);
});
</script>

<style scoped>
#us {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 40px 20px;
  background: #222222;
  color: #fff;
}

#us {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

#side {
  margin-top: 70px;
  width: 60%;
  padding: 20px;
}

#middle {
  width: 90%;
  padding: 20px;
}

#side h1, #middle h1 {
  font-size: 28px;
  margin-bottom: 10px;
  color: #f1c40f;
}

#side p, #middle p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
}

#middle .row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

#middle .column {
  width: 48%;
}
</style>
