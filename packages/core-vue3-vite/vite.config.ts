import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const PORT = 7000

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: PORT,
    cors: true,
    origin: `//localhost:${PORT}`
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})