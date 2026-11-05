import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    // The R3F/Three.js chunk (HeroCore, lazy-loaded after first paint)
    // exceeds the default 500 kB heuristic; it is fetched asynchronously and cached.
    chunkSizeWarningLimit: 1000,
  }
})
