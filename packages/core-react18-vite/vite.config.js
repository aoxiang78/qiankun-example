import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const PORT = 3003

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: PORT,
    cors: true,
    origin: `//localhost:${PORT}`
  },
  plugins: [react()]
})
