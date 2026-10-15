import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// VITE_BASE viene impostato dal workflow di GitHub Pages (es. /nome-repo/)
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  server: { port: 5173 },
})
