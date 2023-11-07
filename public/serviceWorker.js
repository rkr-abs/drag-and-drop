const CACHE_NAME = "cache-v4";
const OFFLINE_PAGE = "offline.html";
const cacheList = [
  OFFLINE_PAGE,
  "/index.html",
  "/script.js",
  "/naruto.png",
  "/static/js/bundle.js",
];

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(cacheList);
    })
  );
  this.skipWaiting();
});

this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request).catch((error) => {
        return caches.match(OFFLINE_PAGE)
      });
    })
  );
});

this.addEventListener("activate", (event) => {
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
    })
  );
  this.clients.claim();
});
