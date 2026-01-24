// Service Worker для Cookie Widget PWA
const CACHE_NAME = 'cookie-widget-v3.3.2';
const STATIC_CACHE_NAME = 'cookie-widget-static-v3.3.2';
const DYNAMIC_CACHE_NAME = 'cookie-widget-dynamic-v3.3.2';

// Файлы для кэширования
const STATIC_FILES = [
  '/',
  '/index.html',
  '/examples.html',
  '/styles.css',
  '/script.js',
  '/cookie-banner.css',
  '/cookie-banner.js',
  '/favicon_folder/manifest.json',
  '/favicon_folder/android-chrome-192x192.png',
  '/favicon_folder/android-chrome-512x512.png',
  '/favicon_folder/apple-touch-icon.png',
  '/favicon_folder/favicon-32x32.png',
  '/favicon_folder/favicon-16x16.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
];

// Установка Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        console.log('Service Worker: Static files cached');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: Error caching static files', error);
      })
  );
});

// Активация Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            // Удаляем старые кэши
            if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated');
        return self.clients.claim();
      })
  );
});

// Перехват запросов
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Игнорируем запросы к внешним API и не-GET запросы
  if (request.method !== 'GET' || 
      url.origin !== location.origin && 
      !url.href.includes('fonts.googleapis.com') &&
      !url.href.includes('cdnjs.buymeacoffee.com')) {
    return;
  }
  
  event.respondWith(
    caches.match(request)
      .then(cachedResponse => {
        // Если есть в кэше, возвращаем кэшированную версию
        if (cachedResponse) {
          console.log('Service Worker: Serving from cache', request.url);
          return cachedResponse;
        }
        
        // Если нет в кэше, делаем запрос к сети
        return fetch(request)
          .then(response => {
            // Проверяем, что ответ валидный
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Клонируем ответ для кэширования
            const responseToCache = response.clone();
            
            // Кэшируем динамические файлы
            if (url.origin === location.origin) {
              caches.open(DYNAMIC_CACHE_NAME)
                .then(cache => {
                  console.log('Service Worker: Caching dynamic file', request.url);
                  cache.put(request, responseToCache);
                });
            }
            
            return response;
          })
          .catch(error => {
            console.error('Service Worker: Fetch failed', error);
            
            // Возвращаем офлайн страницу для HTML запросов
            if (request.headers.get('accept').includes('text/html')) {
              return caches.match('/index.html');
            }
            
            // Для других ресурсов возвращаем пустой ответ
            return new Response('Offline', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
  );
});

// Обработка сообщений от клиента
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
    }).then(() => {
      event.ports[0].postMessage({ success: true });
    });
  }
});

// Обработка push уведомлений (для будущего использования)
self.addEventListener('push', event => {
  if (!event.data) return;
  
  const data = event.data.json();
  const options = {
    body: data.body || 'Новое обновление Cookie Widget',
    icon: '/favicon_folder/android-chrome-192x192.png',
    badge: '/favicon_folder/favicon-32x32.png',
    vibrate: [200, 100, 200],
    data: data.data || {},
    actions: [
      {
        action: 'open',
        title: 'Открыть',
        icon: '/favicon_folder/favicon-32x32.png'
      },
      {
        action: 'close',
        title: 'Закрыть'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title || 'Cookie Widget', options)
  );
});

// Обработка клика по уведомлению
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Синхронизация в фоне
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Здесь можно добавить логику фоновой синхронизации
      console.log('Service Worker: Background sync')
    );
  }
});

// Обработка ошибок
self.addEventListener('error', event => {
  console.error('Service Worker: Error', event.error);
});

self.addEventListener('unhandledrejection', event => {
  console.error('Service Worker: Unhandled promise rejection', event.reason);
});