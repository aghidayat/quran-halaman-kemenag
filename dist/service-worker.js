const cacheName = "al-quran-app-cache-v1";
const filesToCache = [
  "/",
  "/assets/favicon-32x32.png", // Replace with the actual path to your app icon
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
  "https://code.jquery.com/jquery-3.5.1.slim.min.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
  "/assets",
  "/images",
  // Add other URLs that need to be cached
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    }),
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches
      .match(e.request)
      .then((response) => {
        return (
          response ||
          fetch(e.request).then((fetchResponse) => {
            if (
              !fetchResponse ||
              fetchResponse.status !== 200 ||
              fetchResponse.type !== "basic"
            ) {
              return fetchResponse;
            }

            const responseToCache = fetchResponse.clone();

            caches.open(cacheName).then((cache) => {
              cache.put(e.request, responseToCache);
            });

            return fetchResponse;
          })
        );
      })
      .catch(() => {
        return caches.match("/");
      }),
  );
});
