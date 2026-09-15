<template>
  <section class="section">
    <div class="container">
      <p class="eyebrow">Katalog</p>
      <h1>Uygulamalar</h1>
      <p class="muted">Tüm uygulamalar tek ekranda. Detay için karta dokunun.</p>

      <div class="grid cards-3 margin-top">
        <AppCard v-for="a in apps" :key="a.slug" :app="a" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { apps } from '../data/apps.js'
import AppCard from '../components/AppCard.vue'
</script>
