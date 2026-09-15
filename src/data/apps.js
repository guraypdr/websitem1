// ─────────────────────────────────────────────
// UYGULAMA VERİLERİ
// Yeni uygulama eklemek için aşağıdaki listeye
// yeni bir obje eklemen yeterli. Örnek:
//
// {
//   slug: 'yeni-uygulama',
//   name: 'Yeni Uygulama',
//   tagline: 'Kısa slogan',
//   shortDescription: 'Kartlarda görünen kısa açıklama.',
//   description: 'Detay sayfasında görünen uzun açıklama.',
//   iconText: 'YU',
//   accent: '#8b5cf6',
//   platforms: ['Windows', 'Android'],
//   price: 'Ücretsiz',
//   priceDetail: 'Tüm özellikler ücretsiz',
//   featured: true,
//   version: '1.0.0',
//   releaseDate: '2026-01-10',
//   features: ['Özellik 1', 'Özellik 2'],
//   screenshots: ['Ana ekran', 'Rapor ekranı'],
//   requirements: { os: '...', ram: '...', disk: '...', extra: '...' },
//   downloadWindows: 'https://github.com/kullanici/repo/releases/download/v1.0.0/uygulama-setup.exe',
//   downloadAndroid: 'https://github.com/kullanici/repo/releases/download/v1.0.0/uygulama.apk',
//   downloadIos: ''
// }
//
// download alanını boş ('') bırakırsan o buton görünmez.
// ─────────────────────────────────────────────

export const apps = [
  {
    slug: 'ogrenci-takip',
    name: 'Öğrenci Takip',
    tagline: 'Sınıf ve öğrenci yönetimini sadeleştirin',
    shortDescription: 'Öğrenci bilgileri, yoklama ve not takibini tek ekranda toplayan masaüstü uygulaması.',
    description:
      'Öğrenci Takip; öğretmenlerin sınıf listelerini, yoklamaları, notları ve veli notlarını düzenli tutması için hazırlanmış hızlı bir masaüstü uygulamasıdır. İnternet gerektirmez, veriler bilgisayarınızda saklanır. Excel içe / dışa aktarma ile mevcut listelerinizi dakikalar içinde taşıyabilirsiniz.',
    iconText: 'ÖT',
    accent: '#0ea5e9',
    platforms: ['Windows', 'Android'],
    price: 'Ücretsiz',
    priceDetail: 'Temel sürüm ücretsiz',
    featured: true,
    version: '2.3.1',
    releaseDate: '2025-11-02',
    features: [
      'Sınırsız sınıf ve öğrenci kaydı',
      'Tek tıkla yoklama alma',
      'Not ortalaması ve karne önizlemesi',
      'Excel içe / dışa aktarma',
      'Çevrimdışı çalışma, hızlı açılış',
      'Otomatik yedekleme'
    ],
    screenshots: ['Ana panel', 'Yoklama ekranı', 'Not ve rapor ekranı'],
    requirements: {
      os: 'Windows 10 / 11 (64-bit) • Android 9+',
      ram: '4 GB RAM',
      disk: '150 MB boş alan',
      extra: 'Ek kurulum gerekmez'
    },
    downloadWindows: 'https://github.com/ornek/ogrenci-takip/releases/download/v2.3.1/ogrenci-takip-setup.exe',
    downloadAndroid: 'https://github.com/ornek/ogrenci-takip/releases/download/v2.3.1/ogrenci-takip.apk',
    downloadIos: ''
  },
  {
    slug: 'evrak-hazirlama',
    name: 'Evrak Hazırlama',
    tagline: 'Dilekçe ve resmi evrakları dakikalar içinde oluşturun',
    shortDescription: 'Hazır şablonlarla dilekçe, tutanak ve resmi yazı hazırlama uygulaması.',
    description:
      'Evrak Hazırlama; dilekçe, tutanak, izin formu ve resmi yazılar için hazır şablonlar sunar. Bilgileri bir kez girin, tüm belgelere otomatik işlensin. Çıktıyı PDF olarak kaydedin veya doğrudan yazdırın.',
    iconText: 'EH',
    accent: '#10b981',
    platforms: ['Windows', 'Android', 'iOS'],
    price: 'Ücretsiz',
    priceDetail: 'Premium şablonlar yakında',
    featured: true,
    version: '1.8.0',
    releaseDate: '2025-08-15',
    features: [
      '20+ hazır resmi şablon',
      'Otomatik tarih ve sayı formatı',
      'PDF olarak kaydetme ve yazdırma',
      'Kurum logosu ekleme',
      'Taslak kaydetme ve arşiv',
      'Türkçe yazım denetimi'
    ],
    screenshots: ['Şablon galerisi', 'Belge düzenleyici', 'PDF önizleme'],
    requirements: {
      os: 'Windows 10 / 11 • Android 8+ • iOS 15+',
      ram: '2 GB RAM',
      disk: '120 MB boş alan',
      extra: 'PDF çıktısı için ek yazılım gerekmez'
    },
    downloadWindows: 'https://github.com/ornek/evrak-hazirlama/releases/download/v1.8.0/evrak-hazirlama-setup.exe',
    downloadAndroid: 'https://github.com/ornek/evrak-hazirlama/releases/download/v1.8.0/evrak-hazirlama.apk',
    downloadIos: 'https://apps.apple.com/app/id000000000'
  },
  {
    slug: 'ders-programi-olusturucu',
    name: 'Ders Programı Oluşturucu',
    tagline: 'Çakışmasız ders programı hazırlayın',
    shortDescription: 'Okullar için otomatik ders programı oluşturma ve çakışma kontrolü.',
    description:
      'Ders Programı Oluşturucu; öğretmen, sınıf ve derslik çakışmalarını otomatik kontrol ederek haftalık ders programı hazırlar. Sürükle-bırak ile manuel düzenleme yapabilir, çıktıyı PDF veya Excel olarak alabilirsiniz.',
    iconText: 'DP',
    accent: '#8b5cf6',
    platforms: ['Windows'],
    price: 'Premium',
    priceDetail: '14 gün ücretsiz deneme',
    featured: true,
    version: '1.2.4',
    releaseDate: '2026-02-20',
    features: [
      'Otomatik program oluşturma',
      'Öğretmen / sınıf / derslik çakışma kontrolü',
      'Sürükle-bırak ile düzenleme',
      'PDF ve Excel çıktısı',
      'Yazdırılabilir haftalık tablo',
      'Yedekleme ve geri yükleme'
    ],
    screenshots: ['Program sihirbazı', 'Haftalık tablo', 'Çakışma uyarıları'],
    requirements: {
      os: 'Windows 10 / 11 (64-bit)',
      ram: '4 GB RAM',
      disk: '200 MB boş alan',
      extra: '.NET 8 (kurulumla birlikte gelir)'
    },
    downloadWindows: 'https://github.com/ornek/ders-programi/releases/download/v1.2.4/ders-programi-setup.exe',
    downloadAndroid: '',
    downloadIos: ''
  }
]

export function getApp(slug) {
  return apps.find((a) => a.slug === slug)
}

export function featuredApps() {
  return apps.filter((a) => a.featured)
}
