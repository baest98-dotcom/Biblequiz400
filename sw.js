const CACHE = 'bible-quiz-v3';
const FILES = [
  '/Biblequiz400/',
  '/Biblequiz400/index.html',
  '/Biblequiz400/manifest.json',
  '/Biblequiz400/icon-192.png',
  '/Biblequiz400/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).catch(() => caches.match('/Biblequiz400/index.html')))
  );
});
