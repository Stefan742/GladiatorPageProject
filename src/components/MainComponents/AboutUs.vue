<template>
  <section id="us">
    <img src="../../../public/assets/us.jpg" height="400" width="400" class="fade-in-left"/>
    <div id="side">
      <h1>DISCOVER OUR JOURNEY</h1>
      <p>Founded in 2007, Gladiator Karate Club began with a clear mission — to build disciplined, dedicated, and strong martial artists who embody the true spirit of warriors.
        From humble beginnings to becoming a respected name in the karate community, our journey is a story of perseverance, passion, and progress.
        Over the years, we have trained generations of athletes who not only win medals but also grow into individuals guided by honor, respect, and self-discipline.
        With committed coaches, a supportive community, and unstoppable energy, Gladiator has become more than just a club — it’s a family.</p>
    </div>
    <div id="middle">
      <div class="row">
        <div class="column">
          <h1><span>18</span> Years</h1>
          <p>Since our founding in 2007, we’ve grown with passion and commitment, constantly evolving to meet the needs of our students.</p>
        </div>
        <div class="column">
          <h1>Awards</h1>
          <p>Our team has proudly earned over 200 medals at regional, national, and international competitions, proving our relentless dedication.</p>
        </div>

      </div>
      <div class="row">
        <div class="column">
          <h1><span>100</span> Members</h1>
          <p>With a strong focus on community and personal growth, we are proud to have over 100 active members training regularly at our club.</p>
        </div>
        <div class="column">
          <h1><span>5</span> Core Values</h1>
          <p>Our core values — Discipline, Respect, Integrity, Perseverance, and Teamwork — guide everything we do, in and out of the dojo.</p>
        </div>
      </div>
    </div>
  </section>
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
#side p{
  font-style: italic;
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
@media (max-width: 768px) {
  #us {
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;
  }

  #side {
    width: 100%;
    margin-top: 30px;
    padding: 10px;
    text-align: center;
  }

  #middle {
    width: 100%;
    padding: 10px;
  }

  #middle .row {
    flex-direction: column;
    align-items: center;
  }

  #middle .column {
    width: 100%;
    margin-bottom: 20px;
    text-align: center;
  }

  #side h1, #middle h1 {
    font-size: 24px;
  }

  #side p, #middle p {
    font-size: 16px;
  }

  img.fade-in-left {
    width: 80%;
    height: auto;
  }
}

</style>
