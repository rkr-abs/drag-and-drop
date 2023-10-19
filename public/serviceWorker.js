const CACHE_NAME = "cache-v4";
const urlsToCache = [
  "/",
  "/index.html",
  "/script.js",
  "/naruto.png",
  // "/sasuke.png",
  "/static/js/bundle.js",
];

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  this.skipWaiting();
});

this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

this.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            return cacheName !== CACHE_NAME;
          })
          .map((cacheName) => {
            return caches.delete(cacheName);
          })
      );
    }),
    this.clients.claim()
  );
});
