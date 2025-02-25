const CACHE_NAME = "v1-cache";
const urlsToCache = [
    "/index.html",
    "/style.css",
    "/script.js",
    "/images/logo.png"
];

// Installation du Service Worker et mise en cache des ressources
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Interception des requêtes et chargement depuis le cache
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
