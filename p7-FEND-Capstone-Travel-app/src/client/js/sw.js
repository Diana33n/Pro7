import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';

// Cache static assets
registerRoute(
  ({ request }) => request.destination === 'style' || request.destination === 'script',
  new CacheFirst()
);
