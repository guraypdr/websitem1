<template>
  <section class="section">
    <div class="container about-page">
      <div class="avatar lg">{{ site.about.name.charAt(0) }}</div>
      <div>
        <p class="eyebrow">{{ site.about.title }}</p>
        <h1>{{ site.about.name }}</h1>
        <p v-for="p in site.about.paragraphs" :key="p" class="muted">{{ p }}</p>
        <ul class="features">
          <li v-for="h in site.about.highlights" :key="h">✓ {{ h }}</li>
        </ul>
        <div class="hero-actions">
          <RouterLink to="/uygulamalar" class="btn">Uygulamaları Gör</RouterLink>
          <RouterLink to="/iletisim" class="btn btn-outline">İletişim</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { site } from '../data/site.js'
</script>
