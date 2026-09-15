import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Cloudflare Pages uyumlu statik build.
// Build çıktısı: ./dist klasörü
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist'
  }
})
