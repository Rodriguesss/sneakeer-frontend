import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

const isProd = process.env.NODE_ENV === 'production'

dotenv.config({
  path: isProd ? '.env.production' : '.env'
})

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT,
    https: isProd,
    cors: true
  },
  build: {
    minify: isProd,
  },
  plugins: [react()]
})
