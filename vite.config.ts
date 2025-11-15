import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use relative paths so the built site works when served from any path
  base: './',
  plugins: [react()],
})

