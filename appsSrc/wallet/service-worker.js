const CACHE_NAME = "digital_wallet";
const CACHE_FILES = [
  '/',
  '/js/app.js'
];

var isOffline = false;

self.addEventListener('install', event => {
  console.log("[sw] Install event.");
  event.waitUntil(
      caches.open(CACHE_NAME)
          .then(cache => cache.addAll(CACHE_FILES))
          .then(self.skipWaiting())
          .catch(err => console.error("[sw] Error trying to pre-fetch cache files:", err))
  );
});

self.addEventListener('activate', event => {
  console.log("[sw] Activate event.");
  event.waitUntil(
      self.clients.claim()
  );
});

self.addEventListener('fetch', event => {
  if (!event.request.url.startsWith(self.location.origin)) return;
  console.log("[sw] Fetch event on", event.request.url);
  event.respondWith(
      caches.match(event.request).then(response => {
          console.info("[sw] Responded to ", event.request.url, "with", response ? "cache hit." : "fetch.");
          return response || fetch(event.request);
      }).catch(err => {
          console.error("[sw] Error with match or fetch:", err);
      })
  );
});

// self.addEventListener('activate', function(event) {

//   var cacheAllowlist = ['pages-cache-v1', 'blog-posts-cache-v1'];

//   console.log("Service Worker: Activated!");

//   event.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(
//         cacheNames.map(function(cacheName) {
//           if (cacheAllowlist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });