var cacheName = 'hello-JFkindergarten-pwa';
var filesToCache = [
  '/',
    'index.html',
    'assets/css/default.css',
    'assets/css/index.css',
    'assets/css/style.css',
    'assets/css/rwd.css',
    'assets/css/sweetalert.css',
    'assets/images/header-bg.jpg',
    'assets/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
