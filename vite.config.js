import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works both at a domain root (Vercel)
// and under /portfolio/ (GitHub Pages)
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 3000
  }
})
