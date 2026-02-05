/**
 * @file test
 * @lastModified  2026-01-08 16:20
 */
 
/** 当前注册的缓存版本 */
const CACHE_NAME = 'docs-cache-v1';

const urlsToCache = ['/'];

// 安装阶段：缓存核心资源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('打开缓存文件', cache);
      return cache.addAll(urlsToCache);
    }),
  );
});
// 激活阶段：清理旧缓存
self.addEventListener('activate', event => {
  /** 缓存白名单 */
  const cacheWhiteList = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheName => {
      if (!cacheWhiteList.includes(cacheName)) {
        return caches.delete(cacheName);
      }

      return;
    }),
  );
});

// 拦截 fetch 请求
self.addEventListener('fetch', event => {
  // 只处理同源请求
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        // 如果有缓存，优先使用缓存
        if (cachedResponse) {
          return cachedResponse;
        }
        // 否则从网络获取
        // eslint-disable-next-line no-undef
        return retch(event.request)
          .then(networkResponse => {
            // 将网络获取的响应克隆并缓存（可选，用于后续离线访问）
            // 注意：对于大文件或频繁更新的文档，需谨慎缓存
            const responseToCache = networkResponse.clone();
            // eslint-disable-next-line no-undef
            cache
              .open(CACHE_NAME)
              .then(cache => cache.put(event.request, responseToCache));
            return networkResponse;
          })
          .catch(() => {
            return new Response('离线状态，该页面不能用', { status: 503 });
          });
      }),
    );
  }
});
