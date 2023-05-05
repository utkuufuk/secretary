importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js')

workbox.setConfig({ debug: true })

workbox.recipes.pageCache()
workbox.recipes.googleFontsCache()
workbox.recipes.staticResourceCache()
workbox.recipes.imageCache()
workbox.recipes.offlineFallback()

self.addEventListener('install', event => {
  // forces a service worker to activate immediately
  self.skipWaiting()
})

self.addEventListener('activate', event => {
  // when this SW becomes activated, we claim all the opened clients
  // they can be standalone PWA windows or browser tabs
  event.waitUntil(clients.claim())
})
