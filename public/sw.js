importScripts('https://cdn.jsdelivr.net/npm/@mercuryworkshop/scramjet/dist/scramjet.sw.js');

const scramjet = new ScramjetServiceWorker();

self.addEventListener('fetch', (event) => {
    event.respondWith(scramjet.fetch(event));
});
