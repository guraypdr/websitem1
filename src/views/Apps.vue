<template>
  <section class="apps-page">
    <div class="container">

      <!-- Üst bölüm -->
      <div class="apps-header">
        <div>
          <p class="eyebrow">YAZILIMLAR</p>

          <h1>
            Günlük işlerinizi
            <span>kolaylaştırın.</span>
          </h1>

          <p class="apps-description">
            Öğretmenler, okullar ve günlük işlerde zaman kazandırmak için
            geliştirdiğim uygulamaları keşfedin.
          </p>
        </div>

        <div class="apps-count">
          <strong>{{ apps.length }}</strong>
          <span>uygulama</span>
        </div>
      </div>

      <!-- Filtre alanı -->
      <div class="filter-bar">
        <button
          class="filter-button"
          :class="{ active: selectedFilter === 'Tümü' }"
          @click="selectedFilter = 'Tümü'"
        >
          Tümü
        </button>

        <button
          class="filter-button"
          :class="{ active: selectedFilter === 'Ücretsiz' }"
          @click="selectedFilter = 'Ücretsiz'"
        >
          Ücretsiz
        </button>

        <button
          class="filter-button"
          :class="{ active: selectedFilter === 'Premium' }"
          @click="selectedFilter = 'Premium'"
        >
          Premium
        </button>
      </div>

      <!-- Uygulamalar -->
      <div class="apps-grid">

        <AppCard
          v-for="app in filteredApps"
          :key="app.slug"
          :app="app"
        />

      </div>

      <!-- Sonuç yoksa -->
      <div v-if="filteredApps.length === 0" class="empty-state">
        <div class="empty-icon">⌕</div>

        <h3>Uygulama bulunamadı</h3>

        <p>
          Bu kategoride henüz bir uygulama bulunmuyor.
        </p>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { apps } from '../data/apps.js'
import AppCard from '../components/AppCard.vue'

const selectedFilter = ref('Tümü')

const filteredApps = computed(() => {
  if (selectedFilter.value === 'Tümü') {
    return apps
  }

  return apps.filter((app) => app.price === selectedFilter.value)
})
</script>

<style scoped>
.apps-page {
  padding: 72px 0 100px;
}

/* ─────────────────────────
   ÜST BAŞLIK
───────────────────────── */

.apps-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 42px;
}

.apps-header h1 {
  max-width: 700px;
  margin: 12px 0 18px;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.05;
  letter-spacing: -0.055em;
  font-weight: 800;
}

.apps-header h1 span {
  color: #0ea5e9;
}

.apps-description {
  max-width: 650px;
  margin: 0;
  color: #64748b;
  font-size: 1.08rem;
  line-height: 1.7;
}

.apps-count {
  min-width: 120px;
  padding: 18px 22px;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  background: #ffffff;
  text-align: center;
  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.04);
}

.apps-count strong {
  display: block;
  font-size: 1.8rem;
  line-height: 1;
  color: #0f172a;
}

.apps-count span {
  display: block;
  margin-top: 7px;
  color: #64748b;
  font-size: 0.82rem;
}

/* ─────────────────────────
   FİLTRE
───────────────────────── */

.filter-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px;
  margin-bottom: 30px;

  width: fit-content;

  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 13px;
}

.filter-button {
  border: 0;
  background: transparent;
  color: #64748b;

  padding: 9px 17px;
  border-radius: 9px;

  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 600;

  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-button:hover {
  color: #0f172a;
}

.filter-button.active {
  background: #ffffff;
  color: #0f172a;

  box-shadow:
    0 2px 6px rgba(15, 23, 42, 0.08);
}

/* ─────────────────────────
   UYGULAMA GRID
───────────────────────── */

.apps-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

/*
  AppCard'ın mevcut tasarımını kullanıyoruz.
  Böylece AppCard'daki ortak yapı bozulmuyor.
*/

.apps-grid :deep(.card) {
  height: 100%;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.apps-grid :deep(.card:hover) {
  transform: translateY(-5px);
  border-color: #cbd5e1;

  box-shadow:
    0 18px 45px rgba(15, 23, 42, 0.08);
}

/* ─────────────────────────
   BOŞ DURUM
───────────────────────── */

.empty-state {
  padding: 70px 20px;
  text-align: center;

  border: 1px dashed #cbd5e1;
  border-radius: 18px;

  background: #ffffff;
}

.empty-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 52px;
  height: 52px;

  margin: 0 auto 15px;

  border-radius: 14px;

  background: #f1f5f9;
  color: #64748b;

  font-size: 1.6rem;
}

.empty-state h3 {
  margin: 0 0 6px;
  font-size: 1.1rem;
}

.empty-state p {
  margin: 0;
  color: #64748b;
}

/* ─────────────────────────
   TABLET
───────────────────────── */

@media (max-width: 900px) {
  .apps-header {
    align-items: start;
  }

  .apps-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .apps-count {
    min-width: 100px;
  }
}

/* ─────────────────────────
   MOBİL
───────────────────────── */

@media (max-width: 650px) {
  .apps-page {
    padding: 48px 0 70px;
  }

  .apps-header {
    display: block;
    margin-bottom: 30px;
  }

  .apps-header h1 {
    font-size: 2.6rem;
  }

  .apps-description {
    font-size: 1rem;
  }

  .apps-count {
    display: inline-block;
    margin-top: 24px;
    min-width: 105px;
  }

  .filter-bar {
    width: 100%;
  }

  .filter-button {
    flex: 1;
  }

  .apps-grid {
    grid-template-columns: 1fr;
  }
}
</style>