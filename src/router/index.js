import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Apps from '../views/Apps.vue'
import AppDetail from '../views/AppDetail.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'home', component: Home, meta: { title: 'Ana Sayfa' } },
  { path: '/uygulamalar', name: 'apps', component: Apps, meta: { title: 'Uygulamalar' } },
  {
    path: '/uygulamalar/:slug',
    name: 'app-detail',
    component: AppDetail,
    meta: { title: 'Uygulama Detayı' }
  },
  { path: '/hakkimda', name: 'about', component: About, meta: { title: 'Hakkımda' } },
  { path: '/iletisim', name: 'contact', component: Contact, meta: { title: 'İletişim' } },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound, meta: { title: 'Sayfa Bulunamadı' } }
]

const router = createRouter({
  // Cloudflare Pages'te SPA fallback için public/_redirects dosyası eklidir.
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  const base = 'Güray Yazılım'
  document.title = to.meta.title ? `${to.meta.title} — ${base}` : base
})

export default router
