import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import qiankun from 'vite-plugin-qiankun';
import { name } from './package.json'

const PORT = 8005

function getBasePath() {
  if(process.env.NODE_ENV === 'development') {
    return `/`
  }
  if(process.env.NODE_ENV === 'production') {
    return `/modules/${name}/`
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: getBasePath(),
  server: {
    port: PORT,
    cors: true,
    origin: `//localhost:${PORT}`
  },
  build: {
    outDir: `dist/modules/${name}`,
  },
  plugins: [vue(), vueJsx(),
    qiankun('bar', {
    useDevMode: true
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
