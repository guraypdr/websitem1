<template>
  <main class="home-page">

    <!-- HERO -->
    <section class="hero-section">
      <div class="home-container hero-layout">

        <div class="hero-content">

          <div class="hero-label">
            <span class="hero-label-dot"></span>
            Güray Yazılım
          </div>

          <h1>
            Günlük işlerinizi
            <span>kolaylaştıran</span>
            yazılımlar.
          </h1>

          <p class="hero-text">
            Öğretmenler, eğitimciler ve günlük işlerini daha kolay
            halletmek isteyenler için sade, hızlı ve kullanışlı
            uygulamalar geliştiriyorum.
          </p>

          <div class="hero-buttons">
            <RouterLink to="/uygulamalar" class="hero-button-primary">
              Uygulamaları keşfet
              <span>→</span>
            </RouterLink>

            <RouterLink to="/hakkimda" class="hero-button-secondary">
              Hakkımda
            </RouterLink>
          </div>

          <div class="hero-note">
            <span>✓</span>
            Sade · Hızlı · Kullanıcı odaklı
          </div>

        </div>


        <!-- ÜRÜN GÖRSELİ -->
        <div class="hero-visual">

          <div class="visual-glow"></div>

          <div class="software-window">

            <div class="window-top">
              <div class="window-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <span>Öğrenci Takip</span>

              <div class="window-menu">•••</div>
            </div>

            <div class="window-content">

              <aside class="window-sidebar">

                <div class="fake-logo">G</div>

                <div class="sidebar-item active">
                  <span></span>
                </div>

                <div class="sidebar-item">
                  <span></span>
                </div>

                <div class="sidebar-item">
                  <span></span>
                </div>

                <div class="sidebar-item short">
                  <span></span>
                </div>

              </aside>


              <div class="dashboard">

                <div class="dashboard-header">
                  <div>
                    <small>GENEL BAKIŞ</small>
                    <h3>Hoş geldiniz</h3>
                  </div>

                  <div class="dashboard-avatar">
                    G
                  </div>
                </div>


                <div class="dashboard-cards">

                  <div>
                    <small>Öğrenci</small>
                    <strong>128</strong>
                  </div>

                  <div>
                    <small>Sınıf</small>
                    <strong>6</strong>
                  </div>

                  <div>
                    <small>Devam</small>
                    <strong>%94</strong>
                  </div>

                </div>


                <div class="dashboard-panel">

                  <div class="panel-heading">
                    <strong>Son kayıtlar</strong>
                    <span>Bu hafta</span>
                  </div>

                  <div class="student-row">
                    <div class="student-avatar">AY</div>
                    <div>
                      <strong>Ahmet Yılmaz</strong>
                      <small>9-A · Son görüşme</small>
                    </div>
                    <span class="row-status">Aktif</span>
                  </div>

                  <div class="student-row">
                    <div class="student-avatar">ED</div>
                    <div>
                      <strong>Elif Demir</strong>
                      <small>10-B · Son görüşme</small>
                    </div>
                    <span class="row-status">Aktif</span>
                  </div>

                  <div class="student-row">
                    <div class="student-avatar">MK</div>
                    <div>
                      <strong>Mehmet Kaya</strong>
                      <small>11-A · Son görüşme</small>
                    </div>
                    <span class="row-status">Aktif</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

          <div class="visual-badge badge-one">
            <span>✓</span>
            <div>
              <strong>Kolay kullanım</strong>
              <small>Hemen başlayın</small>
            </div>
          </div>

          <div class="visual-badge badge-two">
            <span>↓</span>
            <div>
              <strong>Ücretsiz başlayın</strong>
              <small>Kurulum kolay</small>
            </div>
          </div>

        </div>

      </div>
    </section>


    <!-- ÜRÜNLER -->
    <section class="products-section">
      <div class="home-container">

        <div class="section-heading">

          <div>
            <span class="section-label">
              UYGULAMALAR
            </span>

            <h2>
              İşlerinizi kolaylaştırmak için
              <span>tasarlandı.</span>
            </h2>
          </div>

          <RouterLink to="/uygulamalar" class="all-products">
            Tüm uygulamalar
            <span>→</span>
          </RouterLink>

        </div>


        <div class="product-grid">

          <article
            v-for="app in featured"
            :key="app.slug"
            class="product-card"
          >

            <div class="product-card-top">

              <div
                class="product-icon"
                :style="{ background: app.accent }"
              >
                {{ app.iconText }}
              </div>

              <span
                class="product-price"
                :class="{ premium: app.price === 'Premium' }"
              >
                {{ app.price }}
              </span>

            </div>

            <h3>{{ app.name }}</h3>

            <p>
              {{ app.shortDescription }}
            </p>

            <div class="product-platforms">
              <span
                v-for="platform in app.platforms"
                :key="platform"
              >
                {{ platform }}
              </span>
            </div>

            <RouterLink
              :to="`/uygulamalar/${app.slug}`"
              class="product-link"
            >
              İncele
              <span>→</span>
            </RouterLink>

          </article>

        </div>

      </div>
    </section>


    <!-- YAKLAŞIM -->
    <section class="approach-section">

      <div class="home-container">

        <div class="approach-heading">

          <span class="section-label">
            YAKLAŞIM
          </span>

          <h2>
            Teknoloji değil,
            <span>çözüm</span> ön planda.
          </h2>

          <p>
            Bir yazılımın iyi olması, ne kadar fazla özellik
            içerdiğiyle değil; işinizi ne kadar kolaylaştırdığıyla
            ilgilidir.
          </p>

        </div>


        <div class="approach-grid">

          <div class="approach-card">

            <span class="approach-number">01</span>

            <div class="approach-icon">
              ✦
            </div>

            <h3>Sade</h3>

            <p>
              Gereksiz menüler ve karmaşık ekranlar yerine,
              ihtiyacınız olan özelliklere odaklanıyoruz.
            </p>

          </div>


          <div class="approach-card highlighted">

            <span class="approach-number">02</span>

            <div class="approach-icon">
              ⚡
            </div>

            <h3>Hızlı</h3>

            <p>
              Uygulamalar hızlı açılsın, öğrenmesi kolay olsun
              ve günlük işlerinizi bekletmesin.
            </p>

          </div>


          <div class="approach-card">

            <span class="approach-number">03</span>

            <div class="approach-icon">
              ◈
            </div>

            <h3>Güvenilir</h3>

            <p>
              Mümkün olduğunca verilerinizi cihazınızda tutan,
              güvenilir ve şeffaf çözümler geliştiriyoruz.
            </p>

          </div>

        </div>

      </div>

    </section>


    <!-- GELİŞTİRİCİ -->
    <section class="creator-section">

      <div class="home-container">

        <div class="creator-box">

          <div class="creator-avatar">
            {{ site.about.name.charAt(0) }}
          </div>

          <div class="creator-info">

            <span class="section-label">
              GELİŞTİRİCİ
            </span>

            <h2>
              Merhaba, ben {{ site.about.name }}.
            </h2>

            <p>
              {{ site.shortAbout }}
            </p>

            <RouterLink
              to="/hakkimda"
              class="creator-link"
            >
              Daha fazla bilgi
              <span>→</span>
            </RouterLink>

          </div>

        </div>

      </div>

    </section>


    <!-- SON CTA -->
    <section class="cta-section">

      <div class="home-container">

        <div class="cta-box">

          <div class="cta-content">

            <span class="cta-label">
              BAŞLAMAYA HAZIR MISINIZ?
            </span>

            <h2>
              İhtiyacınız olan
              yazılımı keşfedin.
            </h2>

            <p>
              Uygulamalara göz atın ve günlük işlerinizi
              kolaylaştıracak aracı bulun.
            </p>

            <RouterLink
              to="/uygulamalar"
              class="cta-button"
            >
              Uygulamaları keşfet
              <span>→</span>
            </RouterLink>

          </div>

          <div class="cta-shape"></div>

        </div>

      </div>

    </section>

  </main>
</template>


<script setup>
import { site } from '../data/site.js'
import { apps, featuredApps } from '../data/apps.js'

const featured = featuredApps()
</script>


<style scoped>

/* =====================================================
   ANA SAYFA
   ===================================================== */

.home-page {
  background: #ffffff;
  color: #0f172a;
}


/* =====================================================
   GENEL
   ===================================================== */

.home-container {
  width: min(1160px, calc(100% - 48px));
  margin: 0 auto;
}


/* =====================================================
   HERO
   ===================================================== */

.hero-section {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 75% 30%,
      rgba(14, 165, 233, 0.12),
      transparent 34%
    ),
    #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.hero-layout {
  min-height: 650px;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 60px;
  align-items: center;
  padding-top: 70px;
  padding-bottom: 80px;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 12px;
  border: 1px solid #bae6fd;
  border-radius: 999px;
  background: #f0f9ff;
  color: #0369a1;
  font-size: 0.8rem;
  font-weight: 700;
}

.hero-label-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #0ea5e9;
}

.hero-content h1 {
  max-width: 590px;
  margin: 22px 0 20px;
  font-size: clamp(3.2rem, 5vw, 5rem);
  line-height: 0.98;
  letter-spacing: -0.055em;
  font-weight: 800;
}

.hero-content h1 span {
  color: #0284c7;
}

.hero-text {
  max-width: 540px;
  margin: 0;
  color: #64748b;
  font-size: 1.08rem;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 30px;
}

.hero-button-primary,
.hero-button-secondary {
  text-decoration: none;
  font-weight: 700;
  transition: 0.2s ease;
}

.hero-button-primary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 13px 19px;
  border-radius: 11px;
  background: #0f172a;
  color: white;
}

.hero-button-primary:hover {
  background: #1e293b;
  transform: translateY(-1px);
}

.hero-button-primary span {
  font-size: 1.1rem;
}

.hero-button-secondary {
  padding: 13px 15px;
  color: #475569;
}

.hero-button-secondary:hover {
  color: #0f172a;
}

.hero-note {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 25px;
  color: #94a3b8;
  font-size: 0.83rem;
}

.hero-note span {
  color: #16a34a;
  font-weight: 800;
}


/* =====================================================
   HERO ÜRÜN GÖRSELİ
   ===================================================== */

.hero-visual {
  position: relative;
  min-width: 0;
}

.visual-glow {
  position: absolute;
  inset: 10% 0 0 10%;
  background: rgba(14, 165, 233, 0.16);
  filter: blur(70px);
  border-radius: 50%;
}

.software-window {
  position: relative;
  z-index: 2;
  overflow: hidden;
  border: 1px solid #dbe5ee;
  border-radius: 18px;
  background: white;
  box-shadow:
    0 30px 70px rgba(15, 23, 42, 0.14),
    0 8px 20px rgba(15, 23, 42, 0.06);
}

.window-top {
  height: 48px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 0 16px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  color: #64748b;
  font-size: 0.72rem;
  font-weight: 700;
}

.window-dots {
  display: flex;
  gap: 5px;
}

.window-dots i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #cbd5e1;
}

.window-menu {
  justify-self: end;
  letter-spacing: 2px;
}

.window-content {
  display: grid;
  grid-template-columns: 68px 1fr;
  min-height: 405px;
}

.window-sidebar {
  padding: 18px 14px;
  background: #f8fafc;
  border-right: 1px solid #e2e8f0;
}

.fake-logo {
  width: 38px;
  height: 38px;
  margin: 0 auto 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background: #0f172a;
  color: white;
  font-size: 0.85rem;
  font-weight: 800;
}

.sidebar-item {
  width: 100%;
  height: 34px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.sidebar-item span {
  width: 24px;
  height: 6px;
  border-radius: 99px;
  background: #dbe4ed;
}

.sidebar-item.active {
  background: #e0f2fe;
}

.sidebar-item.active span {
  background: #38bdf8;
}

.sidebar-item.short span {
  width: 17px;
}

.dashboard {
  padding: 25px;
  min-width: 0;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dashboard-header small {
  color: #94a3b8;
  font-size: 0.63rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.dashboard-header h3 {
  margin: 4px 0 0;
  font-size: 1.25rem;
}

.dashboard-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e0f2fe;
  color: #0284c7;
  font-size: 0.8rem;
  font-weight: 800;
}

.dashboard-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 22px;
}

.dashboard-cards > div {
  padding: 14px;
  border: 1px solid #e5edf4;
  border-radius: 11px;
  background: #f8fafc;
}

.dashboard-cards small {
  display: block;
  color: #94a3b8;
  font-size: 0.68rem;
}

.dashboard-cards strong {
  display: block;
  margin-top: 4px;
  font-size: 1.25rem;
}

.dashboard-panel {
  margin-top: 18px;
  padding: 16px;
  border: 1px solid #e5edf4;
  border-radius: 12px;
}

.panel-heading {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.78rem;
}

.panel-heading span {
  color: #94a3b8;
  font-size: 0.7rem;
}

.student-row {
  display: grid;
  grid-template-columns: 32px 1fr auto;
  align-items: center;
  gap: 10px;
  padding: 11px 0;
  border-top: 1px solid #eef2f6;
}

.student-avatar {
  width: 32px;
  height: 32px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
  color: #475569;
  font-size: 0.62rem;
  font-weight: 800;
}

.student-row strong {
  display: block;
  font-size: 0.73rem;
}

.student-row small {
  color: #94a3b8;
  font-size: 0.62rem;
}

.row-status {
  padding: 4px 8px;
  border-radius: 99px;
  background: #ecfdf5;
  color: #16a34a;
  font-size: 0.6rem;
  font-weight: 700;
}


/* FLOATING KARTLAR */

.visual-badge {
  position: absolute;
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 15px 35px rgba(15, 23, 42, 0.12);
}

.visual-badge > span {
  width: 31px;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  background: #e0f2fe;
  color: #0284c7;
  font-weight: 800;
}

.visual-badge strong,
.visual-badge small {
  display: block;
}

.visual-badge strong {
  font-size: 0.72rem;
}

.visual-badge small {
  margin-top: 2px;
  color: #94a3b8;
  font-size: 0.6rem;
}

.badge-one {
  top: 18%;
  right: -35px;
}

.badge-two {
  bottom: 4%;
  left: -35px;
}


/* =====================================================
   ÜRÜNLER
   ===================================================== */

.products-section {
  padding: 105px 0;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 30px;
  margin-bottom: 38px;
}

.section-label {
  display: block;
  margin-bottom: 12px;
  color: #0284c7;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.section-heading h2,
.approach-heading h2,
.creator-info h2 {
  max-width: 680px;
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.04em;
}

.section-heading h2 span,
.approach-heading h2 span {
  color: #0284c7;
}

.all-products {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  flex-shrink: 0;
  color: #334155;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 700;
}

.all-products:hover {
  color: #0284c7;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.product-card {
  min-width: 0;
  padding: 25px;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  background: white;
  transition: 0.25s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  border-color: #cbd5e1;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
}

.product-card-top {
  display: flex;
  justify-content: space-between;
  align-items: start;
}

.product-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  color: white;
  font-weight: 800;
}

.product-price {
  padding: 5px 9px;
  border-radius: 99px;
  background: #ecfdf5;
  color: #15803d;
  font-size: 0.68rem;
  font-weight: 800;
}

.product-price.premium {
  background: #fff7ed;
  color: #c2410c;
}

.product-card h3 {
  margin: 24px 0 8px;
  font-size: 1.15rem;
}

.product-card p {
  min-height: 70px;
  margin: 0;
  color: #64748b;
  font-size: 0.87rem;
  line-height: 1.7;
}

.product-platforms {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 18px;
}

.product-platforms span {
  padding: 4px 8px;
  border-radius: 6px;
  background: #f8fafc;
  color: #64748b;
  font-size: 0.65rem;
}

.product-link {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  padding-top: 17px;
  border-top: 1px solid #eef2f6;
  color: #0f172a;
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 800;
}

.product-link:hover {
  color: #0284c7;
}


/* =====================================================
   YAKLAŞIM
   ===================================================== */

.approach-section {
  padding: 105px 0;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
}

.approach-heading {
  max-width: 720px;
  margin-bottom: 45px;
}

.approach-heading p {
  max-width: 620px;
  margin: 20px 0 0;
  color: #64748b;
  font-size: 1rem;
  line-height: 1.8;
}

.approach-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.approach-card {
  position: relative;
  min-height: 260px;
  padding: 28px;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  background: white;
}

.approach-card.highlighted {
  background: #0f172a;
  color: white;
  border-color: #0f172a;
}

.approach-number {
  position: absolute;
  top: 22px;
  right: 24px;
  color: #cbd5e1;
  font-size: 0.72rem;
  font-weight: 800;
}

.highlighted .approach-number {
  color: #475569;
}

.approach-icon {
  margin-top: 45px;
  font-size: 1.6rem;
  color: #0284c7;
}

.approach-card h3 {
  margin: 18px 0 8px;
  font-size: 1.15rem;
}

.approach-card p {
  margin: 0;
  color: #64748b;
  font-size: 0.85rem;
  line-height: 1.7;
}

.highlighted p {
  color: #94a3b8;
}


/* =====================================================
   GELİŞTİRİCİ
   ===================================================== */

.creator-section {
  padding: 100px 0;
}

.creator-box {
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 30px;
  align-items: center;
  max-width: 850px;
}

.creator-avatar {
  width: 110px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 28px;
  background: #0f172a;
  color: white;
  font-size: 2.5rem;
  font-weight: 800;
}

.creator-info p {
  max-width: 700px;
  margin: 17px 0;
  color: #64748b;
  line-height: 1.8;
}

.creator-link {
  color: #0284c7;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 800;
}


/* =====================================================
   CTA
   ===================================================== */

.cta-section {
  padding: 0 0 90px;
}

.cta-box {
  position: relative;
  overflow: hidden;
  min-height: 330px;
  display: flex;
  align-items: center;
  padding: 55px;
  border-radius: 22px;
  background: #0f172a;
  color: white;
}

.cta-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
}

.cta-label {
  color: #38bdf8;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.cta-content h2 {
  margin: 15px 0;
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.05;
  letter-spacing: -0.045em;
}

.cta-content p {
  margin: 0 0 25px;
  color: #94a3b8;
  line-height: 1.7;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 13px 18px;
  border-radius: 10px;
  background: white;
  color: #0f172a;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 800;
}

.cta-shape {
  position: absolute;
  width: 430px;
  height: 430px;
  right: -100px;
  top: -80px;
  border: 70px solid rgba(56, 189, 248, 0.1);
  border-radius: 50%;
}


/* =====================================================
   RESPONSIVE
   ===================================================== */

@media (max-width: 1000px) {

  .hero-layout {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .hero-content {
    max-width: 700px;
  }

  .hero-visual {
    max-width: 760px;
    width: 100%;
    margin: 0 auto;
  }

  .product-grid,
  .approach-grid {
    grid-template-columns: 1fr 1fr;
  }

  .approach-card:last-child {
    grid-column: span 2;
  }

}


@media (max-width: 700px) {

  .home-container {
    width: min(100% - 32px, 560px);
  }

  .hero-layout {
    min-height: auto;
    padding-top: 55px;
    padding-bottom: 65px;
  }

  .hero-content h1 {
    font-size: 3rem;
  }

  .hero-text {
    font-size: 0.98rem;
  }

  .hero-buttons {
    flex-wrap: wrap;
  }

  .hero-visual {
    margin-top: 10px;
  }

  .window-content {
    grid-template-columns: 52px 1fr;
  }

  .window-sidebar {
    padding: 14px 9px;
  }

  .dashboard {
    padding: 17px;
  }

  .dashboard-cards {
    gap: 6px;
  }

  .dashboard-cards > div {
    padding: 10px;
  }

  .dashboard-cards strong {
    font-size: 1rem;
  }

  .visual-badge {
    display: none;
  }

  .section-heading {
    display: block;
  }

  .section-heading h2 {
    margin-bottom: 22px;
  }

  .product-grid,
  .approach-grid {
    grid-template-columns: 1fr;
  }

  .approach-card:last-child {
    grid-column: auto;
  }

  .products-section,
  .approach-section {
    padding: 75px 0;
  }

  .creator-section {
    padding: 75px 0;
  }

  .creator-box {
    grid-template-columns: 1fr;
  }

  .creator-avatar {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    font-size: 2rem;
  }

  .cta-box {
    min-height: 300px;
    padding: 35px 25px;
  }

}

</style>