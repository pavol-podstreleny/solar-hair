const cacheName = "cache-v1";
const resourcesToPrecache = [
  "/dist/",
  "/dist/index.html",
  "/dist/img/banner/background.jpg",
  "/dist/css/style.css",
];

// In worker .self is worker
self.addEventListener("install", (event) => {
  console.log("Service worker install event");
  //We use event.waitUntil => to prevent to last promise to complite
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(resourcesToPrecache); // Put all resources from network to cache
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
