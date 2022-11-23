/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

import { clientsClaim } from 'workbox-core';

declare const self: ServiceWorkerGlobalScope;
clientsClaim();

// Any other custom service worker logic can go here.
self.addEventListener('fetch', (e) => {
  console.log(`intercepting ${e.request.method} to ${e.request.url}`)
});