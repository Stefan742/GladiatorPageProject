<template>
  <footer class="footer">
    <p>© {{ new Date().getFullYear() }} {{$t('footer.copyright')}}</p>
    <div class="social-icons">
      <a href="https://www.instagram.com/karateteamgladiator" target="_blank" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/Gladiatorteamm" target="_blank" aria-label="Facebook">
        <i class="fab fa-facebook"></i>
      </a>
      <a href="mailto:gladiator@karate.com" aria-label="Email">
        <i class="fas fa-envelope"></i>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer {
  background: linear-gradient(to right, #434343, #000000);
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.social-icons {
  margin-top: 10px;
}

.social-icons a {
  margin: 0 10px;
  color: white;
  font-size: 20px;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #f1c40f;
}
</style>
