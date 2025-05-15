<template>
  <div id="treninzi">
    <h1>{{ $t('training.title') }}</h1>
    <p class="intro">
      {{ $t('training.intro') }}
    </p>
    <ul>
      <li><strong>{{ $t('training.mondayWednesday') }}</strong> 19:30 PM - 22:30 PM</li>
      <li><strong>{{ $t('training.tuesdayThursday') }}</strong> 17:30 AM – 22:30 AM</li>
    </ul>
    <router-link to="/training" class="training-btn">{{ $t('training.viewFull') }}</router-link>
  </div>
</template>
<style scoped>
#treninzi {
  background-color: #f9f9f9;
  color: #111;
  padding: 50px 20px;
  margin: 40px 0;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
  text-align: center;
}

#treninzi h1 {
  color: #000;
  font-size: 32px;
  margin-bottom: 20px;
}

#treninzi .intro {
  font-size: 18px;
  margin-bottom: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

#treninzi ul {
  list-style: none;
  padding: 0;
  margin: 0 auto 30px;
  font-size: 18px;
}

#treninzi li {
  margin: 10px 0;
}

.training-btn {
  background-color: #f1c40f;
  color: #000;
  text-decoration: none;
  padding: 12px 30px;
  border-radius: 6px;
  font-size: 18px;
  transition: background-color 0.3s ease;
  display: inline-block;
}

.training-btn:hover {
  background-color: #ffdd57;
}
</style>

