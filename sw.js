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
    "url": "css/main.css",
    "revision": "d0b5284fb132304413211a2f108d6c0f"
  },
  {
    "url": "favicon.ico",
    "revision": "1e6942a46ed7f23b0d599e920b6a3fa8"
  },
  {
    "url": "images/basestar-critical.gif",
    "revision": "925ed30793fe42b63a8ade4eedd757eb"
  },
  {
    "url": "images/basestar-hangar.gif",
    "revision": "add151203332b3bfffed79ae0ba1d428"
  },
  {
    "url": "images/basestar-structural.gif",
    "revision": "133c801d1f9a3f25bec25c5f211b9f34"
  },
  {
    "url": "images/basestar-weapons.gif",
    "revision": "4f7fd7cc7c9f31b92b5cdd6493fdc43b"
  },
  {
    "url": "images/cac_example.png",
    "revision": "4af0d5b96b7dffa6b91755e48c41dfb8"
  },
  {
    "url": "images/event_example.png",
    "revision": "640b87d5aaa199ff8cd8e84af29c46f4"
  },
  {
    "url": "images/final_battle.png",
    "revision": "059e53a721f722db24382aca9777e8ff"
  },
  {
    "url": "images/ic.png",
    "revision": "279e97efaaee8c0fb86674f054903a92"
  },
  {
    "url": "images/icons/190.png",
    "revision": "73ab64341ea02204bd329cb15d1f9fe5"
  },
  {
    "url": "images/icons/512.png",
    "revision": "26b83f065ad6446bf756b17bfc0f0ddd"
  },
  {
    "url": "images/ionian-critical.png",
    "revision": "98d2f76df2e81c8b12b239bbc36fbd25"
  },
  {
    "url": "images/ionian-hangar.png",
    "revision": "28047f9e964558c15713896ad1446776"
  },
  {
    "url": "images/ionian-personnel.png",
    "revision": "3fd17630717d91e5dc0dd8b3fd0273a8"
  },
  {
    "url": "images/ionian-raiders.png",
    "revision": "aabf77a35c2d1a6dbebd756d324245a6"
  },
  {
    "url": "images/ionian-structural.png",
    "revision": "31a970481137cde8d483a92078e13a98"
  },
  {
    "url": "images/ionian-weapons.png",
    "revision": "7562915498d8c904f062150021d5b90b"
  },
  {
    "url": "images/loyalty.png",
    "revision": "fc394236bda4756facffbc570ea7d4e8"
  },
  {
    "url": "images/overlay.png",
    "revision": "3868b32151a1d422ce306560a66455f5"
  },
  {
    "url": "images/skill.png",
    "revision": "26edf2851fd1a1b7de6d32534cdbaf6c"
  },
  {
    "url": "images/skillcheck.png",
    "revision": "0cc0c93dc14b921dbe8c112a00430584"
  },
  {
    "url": "images/skillcheckability.png",
    "revision": "f42f36feaec15921eb069face643deb7"
  },
  {
    "url": "images/starting_layout.png",
    "revision": "3185196737c8edbc5d0d50119c3a3f42"
  },
  {
    "url": "images/succession.jpg",
    "revision": "ebad284c42db07e6bb72901a3f52bfec"
  },
  {
    "url": "images/supercrisis.png",
    "revision": "7d6689cf874cf4785d39a73155741c36"
  },
  {
    "url": "images/trauma_tokens.png",
    "revision": "242258d159592a00400b085002039dc9"
  },
  {
    "url": "index.html",
    "revision": "6a9d5d4dc43858fae8c964d09c72a231"
  },
  {
    "url": "js/main.js",
    "revision": "7a972d4746982f825232a8b6d2db0869"
  },
  {
    "url": "js/toc.js",
    "revision": "f124ef95d6da23f783e5af613ec0c8e3"
  },
  {
    "url": "rulebook.html",
    "revision": "7e02afebb6fa83bba55a644df2ec6400"
  },
  {
    "url": "workbox-config.js",
    "revision": "1590585a560f61ef057410dc4e0d9271"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
