// Mis Enlaces: the service worker only makes the app installable; pages load from the network as usual.
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
