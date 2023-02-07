import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  manifest: true,
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      strategies: 'injectManifest',
      minify: true,
      srcDir: 'src',
      filename: 'sw-template.js',
      globDirectory: 'dist/',
      globPatterns: [
        '**/*.{js,css,html,svg}'
      ],
      includeAssets: ['icon.png'],
      manifest: {
        name: 'Calendario',
        start_url: ".",
        display: 'standalone',
        short_name: 'Calendario grupal',
        description: 'Calendario',
        theme_color: '#ffffff',
        lang: 'en',
        scope: '/',
        icons: [
          {
            src: 'icon.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})