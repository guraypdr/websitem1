<template>
  <!-- HERO -->
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <p class="eyebrow">{{ site.brand }}</p>
        <h1>{{ site.slogan }}</h1>
        <p class="muted lead">{{ site.heroDescription }}</p>
        <div class="hero-actions">
          <RouterLink to="/uygulamalar" class="btn">Uygulamaları Keşfet</RouterLink>
          <RouterLink to="/hakkimda" class="btn btn-outline">Hakkımda</RouterLink>
        </div>
        <div class="hero-stats">
          <div><strong>{{ apps.length }}</strong><span>uygulama</span></div>
          <div><strong>100%</strong><span>çevrimdışı çalışır</span></div>
          <div><strong>0</strong><span>üyelik gerekmez</span></div>
        </div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="window">
          <div class="window-bar"><i></i><i></i><i></i></div>
          <div class="window-body">
            <div v-for="a in featured" :key="a.slug" class="window-row">
              <span class="app-icon sm" :style="{ background: a.accent }">{{ a.iconText }}</span>
              <div><strong>{{ a.name }}</strong><small>{{ a.version }} • {{ a.platforms.join(' • ') }}</small></div>
              <span class="price mini" :class="{ premium: a.price === 'Premium' }">{{ a.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ÖNE ÇIKANLAR -->
  <section class="section">
    <div class="container">
      <div class="section-head">
        <div>
          <h2>Öne çıkan uygulamalar</h2>
          <p class="muted">Günlük işleri hızlandıran, sade ve hızlı araçlar.</p>
        </div>
        <RouterLink to="/uygulamalar" class="link">Tümünü gör →</RouterLink>
      </div>
      <div class="grid cards-3">
        <AppCard v-for="a in featured" :key="a.slug" :app="a" />
      </div>
    </div>
  </section>

  <!-- NEDEN -->
  <section class="section alt">
    <div class="container grid cards-3">
      <div class="mini"><h3>Hızlı</h3><p class="muted">Saniyeler içinde açılır, düşük donanımda bile akıcı çalışır.</p></div>
      <div class="mini"><h3>Sade</h3><p class="muted">Öğrenmesi kolay arayüz. Kurulum ve kullanım kılavuzu gerektirmez.</p></div>
      <div class="mini"><h3>Güvenli</h3><p class="muted">Veriler cihazınızda kalır. Üyelik ve takip sistemi yoktur.</p></div>
    </div>
  </section>

  <!-- HAKKIMDA ÖZET -->
  <section class="section">
    <div class="container about-preview">
      <div class="avatar">{{ site.about.name.charAt(0) }}</div>
      <div>
        <h2>Hakkımda</h2>
        <p class="muted">{{ site.shortAbout }}</p>
        <RouterLink to="/hakkimda" class="btn btn-outline">Daha fazla bilgi</RouterLink>
      </div>
    </div>
  </section>

  <!-- İLETİŞİM ÖZET -->
  <section class="section alt">
    <div class="container contact-preview">
      <div>
        <h2>İletişim</h2>
        <p class="muted">Öneri, hata bildirimi veya iş birliği için yazabilirsiniz.</p>
      </div>
      <div class="contact-actions">
        <a :href="`mailto:${site.email}`" class="btn">{{ site.email }}</a>
        <RouterLink to="/iletisim" class="btn btn-outline">İletişim sayfası</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { site } from '../data/site.js'
import { apps, featuredApps } from '../data/apps.js'
import AppCard from '../components/AppCard.vue'

const featured = featuredApps()
</script>
