import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isProd = process.env.NODE_ENV === 'production'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000,
    https: isProd,
    cors: true
  },
  build: {
    minify: isProd,
  },
  plugins: [react()]
})
