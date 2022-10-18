import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        distribotor: resolve(__dirname, 'distributor.html'),
        products: resolve(__dirname, 'products.html'),
        classic: resolve(__dirname, 'buffalo-classic.html'),
        kiwi: resolve(__dirname, 'buffalo-revive-kiwi.html'),
        cool: resolve(__dirname, 'buffalo-revive-cool.html'),
        flow: resolve(__dirname, 'buffalo-revive-flow.html'),
        orange: resolve(__dirname, 'buffalo-revive-orange.html'),
      }
    }
  }
})
