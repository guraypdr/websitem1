<template>
  <article class="card">
    <div class="card-top">
      <span class="app-icon" :style="{ background: app.accent }">{{ app.iconText }}</span>
      <div>
        <h3>{{ app.name }}</h3>
        <p class="muted small">{{ app.tagline }}</p>
      </div>
      <span class="price" :class="{ premium: app.price === 'Premium' }">{{ app.price }}</span>
    </div>
    <p class="muted">{{ app.shortDescription }}</p>
    <div class="badges">
      <span v-for="p in app.platforms" :key="p" class="badge">{{ p }}</span>
    </div>
    <RouterLink :to="`/uygulamalar/${app.slug}`" class="btn btn-outline btn-block">Detayları Gör</RouterLink>
  </article>
</template>

<script setup>
defineProps({ app: { type: Object, required: true } })
</script>
