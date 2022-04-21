import { resolve } from 'path'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import viteCompression from 'vite-plugin-compression'
import handlebars from 'vite-plugin-handlebars'
import viteImagemin from 'vite-plugin-imagemin'
import { VitePWA } from 'vite-plugin-pwa'

import { siteConfig } from './site.config'

// all additional pages that you will be adding to the project,
//plaese enter the name of the html file below inside the array
// example: about.html => about, contact.html => contact
const additionalPages = ['about']

const webManifest = {
  // do not inject register (we don't want to use serviceworkers, personal opinion: too much instable)
  injectRegister: null,
  // config for the manifest file
  manifest: {
    name: siteConfig.titleTemplate,
    short_name: siteConfig.titleTemplate,
    background_color: siteConfig.backgroundColor,
    theme_color: siteConfig.themeColor,
    display: 'fullscreen',
    orientation: 'portrait',
    lang: siteConfig.lang,
    description: siteConfig.description,
    icons: [
      {
        purpose: 'maskable',
        src: '/assets/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        purpose: 'any',
        src: '/assets/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
}

const imageminConfig = {
  gifsicle: {
    optimizationLevel: 7,
    interlaced: false,
  },
  optipng: {
    optimizationLevel: 7,
  },
  webp: {
    preset: 'photo',
    quality: 75,
  },
  mozjpeg: {
    quality: 75,
  },
  pngquant: {
    quality: [0.8, 0.9],
    speed: 4,
  },
  svgo: {
    plugins: [
      {
        name: 'removeViewBox',
      },
      {
        name: 'removeEmptyAttrs',
        active: false,
      },
    ],
  },
}

export default defineConfig({
  base: siteConfig.pathPrefix,
  build: {
    rollupOptions: {
      input: {
        // all pages that needs to be included in the build
        main: resolve(__dirname, 'index.html'),
        ...additionalPages.map((page) => {
          return resolve(__dirname, `${page}.html`)
        }),
      },
    },
  },
  plugins: [
    handlebars({
      // context is an object passed to all html files, meaning every variables defined inside can be reuse inside the them
      context: { ...siteConfig },
      partialDirectory: resolve(__dirname, 'partials'),
      reloadOnPartialChange: true,
    }),
    viteCompression({
      algorithm: 'gzip',
    }),
    viteCompression({
      algorithm: 'brotliCompress',
    }),
    viteImagemin(imageminConfig), // disable this plugin for a faster build (but your images will not be optimized), only do this if you are manually optimizing your images
    imagetools(),
    VitePWA(webManifest),
  ],
})
