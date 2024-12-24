import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // Adjust the backend URL and port as needed
    },
  },
  build: {
    outDir: '../backend/dist', // Specifies the output directory for the build
  },
})
