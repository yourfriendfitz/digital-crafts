/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "firebase.js",
    "revision": "c99b2b1cf7818a4b8d388113228709bb"
  },
  {
    "url": "index.html",
    "revision": "85ab8493f2bb9f8f38f553461ba88c89"
  },
  {
    "url": "scripts.js",
    "revision": "d6ff6f44daf91c16567cd10e586a0a7b"
  },
  {
    "url": "styles.css",
    "revision": "bc6f7a6a3db79e9ac8c4c8438e2a6b63"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
