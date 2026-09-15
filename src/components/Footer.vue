<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <div class="logo">
          <span class="logo-mark">G</span>
          <span class="logo-text">{{ site.brand }}</span>
        </div>
        <p class="muted">{{ site.slogan }}</p>
        <p class="muted small">© {{ year }} {{ site.brand }}. Tüm hakları saklıdır.</p>
      </div>
      <div>
        <h4>Site</h4>
        <RouterLink to="/">Ana Sayfa</RouterLink>
        <RouterLink to="/uygulamalar">Uygulamalar</RouterLink>
        <RouterLink to="/hakkimda">Hakkımda</RouterLink>
        <RouterLink to="/iletisim">İletişim</RouterLink>
      </div>
      <div>
        <h4>Bağlantılar</h4>
        <a :href="site.social.instagram" target="_blank" rel="noopener">Instagram</a>
        <a :href="site.social.youtube" target="_blank" rel="noopener">YouTube</a>
        <a :href="site.social.github" target="_blank" rel="noopener">GitHub</a>
        <a :href="`mailto:${site.email}`">E-posta</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { site } from '../data/site.js'

const year = new Date().getFullYear()
</script>
