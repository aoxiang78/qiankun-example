import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const PORT = 3003

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT,
    cors: true,
    origin: `//localhost:${PORT}`
  },
})
