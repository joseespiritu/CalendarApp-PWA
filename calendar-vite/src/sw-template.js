importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.loadModule('workbox-background-sync');

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, NetworkOnly } = workbox.strategies;
const { BackgroundSyncPlugin } = workbox.backgroundSync;

const cacheNetworkFirst = [
    '/api/auth/renew',
    '/api/events'
];

registerRoute(
    ({ request, url }) => {
        if (cacheNetworkFirst.includes(url.pathname)) return true;
        return false;
    },
    new NetworkFirst()
);

// Referencia
// registerRoute(
//     new RegExp('http://localhost:4000/api/events'),
//     new NetworkFirst()
// );

const cacheFirstNetwork = [
    'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'
];

registerRoute(
    ({ request, url }) => {
        if (cacheFirstNetwork.includes(url.href)) return true;
        return false;
    },
    new CacheFirst()
);

// Posteos offline
const bsSyncPlugin = new BackgroundSyncPlugin('posteos-offile', {
    maxRetentionTime: 24 * 60
});

registerRoute(
    new RegExp('http://localhost:4000/api/events'),
    new NetworkOnly({
        plugins: [bsSyncPlugin]
    }),
    'POST'
);

registerRoute(
    new RegExp('http://localhost:4000/api/events/'),
    new NetworkOnly({
        plugins: [bsSyncPlugin]
    }),
    'PUT'
);

registerRoute(
    new RegExp('http://localhost:4000/api/events/'),
    new NetworkOnly({
        plugins: [bsSyncPlugin]
    }),
    'DELETE'
);
