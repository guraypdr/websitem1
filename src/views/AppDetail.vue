<template>
  <section v-if="app" class="section">
    <div class="container">
      <RouterLink to="/uygulamalar" class="link">← Tüm uygulamalar</RouterLink>

      <div class="detail-hero">
        <span class="app-icon lg" :style="{ background: app.accent }">{{ app.iconText }}</span>
        <div>
          <h1>{{ app.name }}</h1>
          <p class="muted">{{ app.tagline }}</p>
          <div class="badges">
            <span v-for="p in app.platforms" :key="p" class="badge">{{ p }}</span>
            <span class="badge strong">{{ app.price }}</span>
          </div>
        </div>
      </div>

      <div class="detail-grid">
        <div>
          <div class="shot-main">{{ app.name }} — Tanıtım görseli</div>
          <h2>Açıklama</h2>
          <p class="muted">{{ app.description }}</p>

          <h2>Özellikler</h2>
          <ul class="features">
            <li v-for="f in app.features" :key="f">✓ {{ f }}</li>
          </ul>

          <h2>Ekran görüntüleri</h2>
          <div class="grid cards-3">
            <div v-for="s in app.screenshots" :key="s" class="shot">{{ s }}</div>
          </div>

          <h2>Sistem gereksinimleri</h2>
          <dl class="reqs">
            <div><dt>İşletim sistemi</dt><dd>{{ app.requirements.os }}</dd></div>
            <div><dt>Bellek</dt><dd>{{ app.requirements.ram }}</dd></div>
            <div><dt>Depolama</dt><dd>{{ app.requirements.disk }}</dd></div>
            <div><dt>Not</dt><dd>{{ app.requirements.extra }}</dd></div>
          </dl>
        </div>

        <aside class="side">
          <div class="side-card">
            <h3>İndir</h3>
            <p class="muted small">{{ app.priceDetail }}</p>
            <DownloadButtons :app="app" />
            <hr />
            <dl class="meta">
              <div><dt>Sürüm</dt><dd>v{{ app.version }}</dd></div>
              <div><dt>Yayınlanma</dt><dd>{{ formatDate(app.releaseDate) }}</dd></div>
              <div><dt>Platformlar</dt><dd>{{ app.platforms.join(', ') }}</dd></div>
            </dl>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <section v-else class="section">
    <div class="container center">
      <h1>Uygulama bulunamadı</h1>
      <p class="muted">Aradığınız uygulama kaldırılmış veya taşınmış olabilir.</p>
      <RouterLink to="/uygulamalar" class="btn">Uygulamalara dön</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getApp } from '../data/apps.js'
import DownloadButtons from '../components/DownloadButtons.vue'

const route = useRoute()
const app = computed(() => getApp(route.params.slug))

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })
  } catch {
    return iso
  }
}
</script>
