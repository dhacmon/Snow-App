// ===== SERVICE WORKER — Snow App Daily Notifications =====

const CACHE_NAME = 'snow-app-v2';

self.addEventListener('install', e => {
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    // Clear old caches on activation
    e.waitUntil(
        caches.keys().then(names => Promise.all(
            names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))
        )).then(() => clients.claim())
    );
});

// Listen for notification trigger from main app
self.addEventListener('message', e => {
    if (e.data && e.data.type === 'SHOW_NOTIFICATION') {
        const { title, body, icon, tag } = e.data;
        self.registration.showNotification(title, {
            body,
            icon: icon || '🏔️',
            tag: tag || 'snow-daily',
            badge: '🏔️',
            vibrate: [200, 100, 200],
            requireInteraction: false,
            data: { url: e.data.url || '/' }
        });
    }
});

// Click notification → open app
self.addEventListener('notificationclick', e => {
    e.notification.close();
    e.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
            // Focus existing tab if open
            for (const client of windowClients) {
                if (client.url.includes('index.html') || client.url.endsWith('/')) {
                    return client.focus();
                }
            }
            // Otherwise open new tab
            return clients.openWindow(e.notification.data.url || '/');
        })
    );
});
