const version = 1;
const cacheName = "version-" + version;
const cacheList = [`./`, `./index.html`];

self.addEventListener("install", (ev) => {
  ev.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(cacheList);
    }),
  );
});
self.addEventListener("fetch", (ev) => {
  ev.respondWith(networkRevalidateAndCache(ev));
});

function networkRevalidateAndCache(ev) {
  return fetch(ev.request, { mode: "cors", credentials: "omit" }).then(
    (fetchResponse) => {
      if (fetchResponse.ok) {
        return caches.open(cacheName).then((cache) => {
          cache.put(ev.request, fetchResponse.clone());
          return fetchResponse;
        });
      } else {
        return caches.match(ev.request);
      }
    },
  );
}
