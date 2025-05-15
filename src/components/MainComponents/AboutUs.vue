<template>
  <section id="us">
    <img src="../../../public/assets/us.jpg" height="400" width="400" class="fade-in-left"/>
    <div id="side">
      <h1>{{ $t('aboutUs.title') }}</h1>
      <p>{{ $t('aboutUs.mainText') }}</p>
    </div>
    <div id="middle">
      <div class="row">
        <div class="column">
          <h1><span>18</span> {{ $t('aboutUs.yearsTitle') }}</h1>
          <p>{{ $t('aboutUs.yearsText') }}</p>
        </div>
        <div class="column">
          <h1>{{ $t('aboutUs.awardsTitle') }}</h1>
          <p>{{ $t('aboutUs.awardsText') }}</p>
        </div>

      </div>
      <div class="row">
        <div class="column">
          <h1><span>100</span> {{ $t('aboutUs.membersTitle') }}</h1>
          <p>{{ $t('aboutUs.membersText') }}</p>
        </div>
        <div class="column">
          <h1><span>5</span> {{ $t('aboutUs.valuesTitle') }}</h1>
          <p>{{ $t('aboutUs.valuesTitle') }}</p>
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
