# Calendar App

## Development pasos

1. Renombrar el archivo .example.env por .env
2. Hacer los cambios respectivos en las variables de entorno

```
VITE_API_URL=""
```

# PWA con Workbox
Esta configuración funciona utilizando workbox CLI con una aplicación de React hecha con JS
1. Instalar workbox cli 
```
npm install workbox-cli --global
```
2. Ejecutar el comando para comprobar la instalación
```
workbox --version
```
3. Compilar versión de distribución
```
yarn build
```
4. Aceptar valores por defecto para configuración de archivo __workbox-config.js__ con comando dentro del proyecto
```
workbox wizard
```
5. Ejecutar comando para creación de SW dentro de carpeta de distribución (manera automatica)
```
workbox generateSW workbox-config.js
```
6. En caso de error cambiar la configuración de la propiedad type _commonjs_ en package.json
7. Comandos en package.json
```

# Compilar SW
yarn PWA

# Compilar cambios de app + SW
yarn build

# Servir aplicación
yarn serve

```

# PWA con vite-plugin-pwa
Esta configuración funciona para una aplicación de React hecha con Vite realizando la configuración en _vite.config.js_
1. Instalar dependencia
```
# npm
npm i vite-plugin-pwa -D 

# yarn 
yarn add vite-plugin-pwa -D
```

2. Añadir configuración a vite.config.js
```
// vite.config.js / vite.config.ts
import { VitePWA } from 'vite-plugin-pwa'

export default {
  plugins: [
    VitePWA()
  ]
}
```
3. Compilar a distribución
```
yarn build
```
4. Servir aplicacion con comandos
```
serve -s dist

yarn serve
```

5. Comandos en package.json
```

# Compilar cambios de app + SW
yarn build

```

6. Configuración de PWA
```
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
```