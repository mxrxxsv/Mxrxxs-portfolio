import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Set the `base` to the repository name so assets load correctly on GitHub Pages
  // If you publish to the root (username.github.io) set this to '/'
  base: '/Mxrxxs-portfolio/',
  plugins: [react()],
})
