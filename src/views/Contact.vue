<template>
  <section class="section">
    <div class="container narrow">
      <p class="eyebrow">İletişim</p>
      <h1>Benimle iletişime geçin</h1>
      <p class="muted">Backend formu yok — doğrudan e-posta veya sosyal medya üzerinden yazabilirsiniz.</p>

      <div class="contact-card">
        <a :href="`mailto:${site.email}`" class="contact-row">
          <strong>E-posta</strong><span>{{ site.email }}</span>
        </a>
        <a :href="site.social.instagram" target="_blank" rel="noopener" class="contact-row">
          <strong>Instagram</strong><span>Profili aç →</span>
        </a>
        <a :href="site.social.youtube" target="_blank" rel="noopener" class="contact-row">
          <strong>YouTube</strong><span>Kanalı aç →</span>
        </a>
        <a :href="site.social.github" target="_blank" rel="noopener" class="contact-row">
          <strong>GitHub</strong><span>Releases ve kaynak kod →</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { site } from '../data/site.js'
</script>
