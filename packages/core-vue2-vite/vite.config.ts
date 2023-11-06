import { fileURLToPath, URL } from "node:url";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

const PORT = 3006;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: PORT,
    cors: true,
    origin: `//localhost:${PORT}`,
  },
})
