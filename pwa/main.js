/**
 * @file test
 * @lastModified 2026-01-08 16:18
 */

// 被引入使用 PWA 的

// 支持 serverWorker 则开启监听
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/pwa/root.js')
      .then(registration =>
        console.log('渐进式 Web 应用注册完成：', registration),
      )
      .catch(registrationError => {
        console.error('渐进式 Web 应用注册：', registrationError);
      });
  });
}
