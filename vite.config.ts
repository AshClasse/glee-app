/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy()
  ],
  build: {
    chunkSizeWarningLimit: 1000, // Aumenta el límite a 1000kb
    rollupOptions: {
      output: {
        manualChunks: {
          // Separa las dependencias grandes en chunks
          'react-vendor': ['react', 'react-dom'],
          'ionic-vendor': ['@ionic/react', '@ionic/react-router']
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  }
})
