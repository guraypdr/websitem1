<template>
  <div class="downloads">
    <a v-if="app.downloadWindows" :href="app.downloadWindows" class="btn" target="_blank" rel="noopener">
      <span aria-hidden="true">▣</span> Windows için İndir
    </a>
    <a v-if="app.downloadAndroid" :href="app.downloadAndroid" class="btn btn-dark" target="_blank" rel="noopener">
      <span aria-hidden="true">▶</span> Android APK İndir
    </a>
    <a v-if="app.downloadIos" :href="app.downloadIos" class="btn btn-outline" target="_blank" rel="noopener">
      <span aria-hidden="true">●</span> App Store'dan İndir
    </a>
    <p v-if="!app.downloadWindows && !app.downloadAndroid && !app.downloadIos" class="muted small">
      İndirme bağlantıları yakında eklenecek.
    </p>
  </div>
</template>

<script setup>
defineProps({ app: { type: Object, required: true } })
</script>
