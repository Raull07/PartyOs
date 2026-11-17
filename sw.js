/* PartyOS · Service Worker (opcional)
   Súbelo a GitHub Pages junto a partyos.html.
   - El HTML se sirve siempre desde la red (network-first) para no quedarte
     con una versión antigua.
   - La librería MQTT y los recursos de CDN se cachean para poder jugar
     aunque la red falle a mitad de la fiesta.
*/
const CACHE = 'partyos-v4-2026';
const CORE = ['./', './partyos.html'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(CORE).catch(() => null))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;

  // Documento principal: red primero, cache como recurso de emergencia.
  if (req.mode === 'navigate' || (sameOrigin && /\/partyos\.html$/.test(url.pathname))) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy)).catch(() => null);
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('./partyos.html')))
    );
    return;
  }

  // CDN (MQTT): cache primero, porque no cambia entre sesiones.
  if (url.hostname.includes('jsdelivr.net') || url.hostname.includes('unpkg.com')) {
    event.respondWith(
      caches.match(req).then((cached) => cached || fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((cache) => cache.put(req, copy)).catch(() => null);
        return res;
      }))
    );
  }
});
