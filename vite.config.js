import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/github-action-demo/',  // এখানে 'repository-name' আপনার GitHub রিপোজিটরির নাম হবে
  build: {
    outDir: 'dist',  // ভিউ প্রোজেক্টের বিল্ড ফোল্ডার
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
