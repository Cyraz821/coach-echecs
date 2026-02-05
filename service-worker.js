const CACHE_NAME = "coach-echecs-v1";
const FILES_TO_CACHE = [
  "index.html",
  "style.css",
  "script.js",
  "board.js",
  "ouvertures.js",
  "manifest.json"
];

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

