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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
<<<<<<< HEAD
<<<<<<< HEAD
  "/precache-manifest.f01b9f179dc6e413e22e376b5120e843.js"
=======
  "/precache-manifest.8ee0bc091b6797a0af31b3d8a8488cc5.js"
>>>>>>> 1083e22bb10ad43a8a21e162cb52d0b113f9362c
=======
  "/precache-manifest.b1196148191f4647c2d1bb5e5ebcd1d3.js"
>>>>>>> b1a72bc926ec76e5843ea9156a5640243494a23d
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html", {
  
  blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
});
