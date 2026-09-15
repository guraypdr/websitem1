# Kişisel Yazılım Ürünleri Sitesi

Vue 3 + Vite ile hazırlanmış, tamamen statik kişisel ürün sitesi.
Backend, veritabanı, üyelik ve ödeme yoktur.

## İçerik yönetimi

- Uygulamalar: `src/data/apps.js` dosyasına yeni obje eklemen yeterli.
- Marka / slogan / iletişim: `src/data/site.js` dosyasını düzenle.
- İndirme bağlantıları: her uygulamada `downloadWindows`, `downloadAndroid`, `downloadIos` alanları. Boş bırakırsan buton gizlenir.

## Yerelde çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda: http://localhost:5173

## Production build

```bash
npm run build
```

Çıktı klasörü: `dist/`

Önizleme:

```bash
npm run preview
```

## Cloudflare Pages deploy

- Build komutu: `npm run build`
- Çıktı dizini: `dist`
- SPA yönlendirme için `public/_redirects` dosyası hazırdır.
