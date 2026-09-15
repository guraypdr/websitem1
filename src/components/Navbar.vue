<template>
  <header class="nav" :class="{ open: menuOpen }">
    <div class="container nav-inner">
      <RouterLink to="/" class="logo" @click="menuOpen = false">
        <span class="logo-mark">G</span>
        <span class="logo-text">{{ site.brand }}</span>
      </RouterLink>

      <button class="hamburger" :aria-expanded="menuOpen" aria-label="Menü" @click="menuOpen = !menuOpen">
        <span></span><span></span><span></span>
      </button>

      <nav class="links">
        <RouterLink to="/" @click="menuOpen = false">Ana Sayfa</RouterLink>
        <RouterLink to="/uygulamalar" @click="menuOpen = false">Uygulamalar</RouterLink>
        <RouterLink to="/hakkimda" @click="menuOpen = false">Hakkımda</RouterLink>
        <RouterLink to="/iletisim" @click="menuOpen = false">İletişim</RouterLink>
        <RouterLink to="/uygulamalar" class="btn btn-sm" @click="menuOpen = false">Uygulamaları Keşfet</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { site } from '../data/site.js'

const menuOpen = ref(false)
</script>
