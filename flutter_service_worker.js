'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
".git/config": "15b039151c5f48f74f19b7954c46ba00",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5c5b0a0a5a376e08efe9ee821a393540",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "954ce469046a304c625788d71c9bd17f",
".git/logs/refs/heads/main": "aedb6559f995d6ee1f0362c0be0e6487",
".git/logs/refs/remotes/origin/main": "b4bcb1fb4a13c95c5c006c6caed1ed33",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/93cfecb9c80cf8aedb565497dcde62b56b1dca": "47a0e9987a6b70520cb92d3c59cfe156",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/4f5a587e59c57eaf3ffe37fda4af8b198ffb75": "7f252dd9949ca9b84e0cd9195be89a00",
".git/objects/2d/7b46e4729837f2b20f9f0a52f59699881de07d": "933b4aae39ecb8e66526fde4af675d7a",
".git/objects/2f/dd89f6c40981ae0b380dfa74b2ec67fce59fed": "a4c978e734eefd86dcf3baa35f1ef40f",
".git/objects/32/3a0190589a538864d8d96f0f047b65c2248724": "555fc393cff9faa8ca5454d2deaa483b",
".git/objects/33/36605b74aa0f3a369ca5311f487e1d68173f05": "ee4c871a7edb61b90a5f67a9b46c5565",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/47/41c0af385728fa057c577c08ced4bbb5013831": "fc9e3924e30e805ec588f8229dfca4bc",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/54/9c2e58d04f68752b1fb51bd61f51fd98d5fd9e": "b85c03b327b99008f74f9ec23b1a2134",
".git/objects/57/32e3ac49b4b68bc8fea4b44a0c567fb7000979": "61c4b6eb88deb4ccd257b9fb48b045fd",
".git/objects/68/16c6df4b17a097f746d9aab240241276d13df8": "abe71c29b592e0e7df3d964846201952",
".git/objects/72/bd2ed7fd3da448ff535261c512c784ee9b433e": "db3348cba4af3dfbf53bb80bda689567",
".git/objects/77/9f327be225aedd8f5e284166c4957d5eb2c221": "1f05e9f4e9224dcb523f01050ab818b8",
".git/objects/79/485265a712da7233cfeaf61a9e32db60ae4535": "e4c02f51d950af6a61a80953bd157cb7",
".git/objects/7e/05a52f95460598fd10cdff0ab3aebe48859358": "6eddd6fcae16dc7dbc44d7a0daf3918e",
".git/objects/82/825b09029565c9ed7905de14b09eb98fa37389": "bbfbd36d3fa17dcc06579c70425a7f31",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/83/f29db6e879a80a5d512c2dda0bf3bdf31cdab1": "dd07661b27b3568245d27fb286f936db",
".git/objects/84/9ba20c3e0a21c7f7ff874b27973fc7d8eff319": "87131cccd83c771ee5e52a6964aa01fe",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/377250a94265e34ee155b4c105056ed44bd393": "3a6b486c9cc3ada76abb2405909cde53",
".git/objects/87/6f28dc60ed1e6bfb7c89d9bfed021376a34453": "d4f776a9a2bab3acd29afcf88742187c",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/fc1e21c3b5ff26d9d38a423e125112b459fd8e": "ad7347fde32af257f37b7a1275f62b26",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/90/b32d9581731922e268c4b626aec3e8b1f21de1": "389967c91ca091219ce4270ba16b33d9",
".git/objects/94/31d61909edc98c015f0a1fbcda341b2231610d": "4177f3f2b0e3f0af46bb20308d7b43b8",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/95/9482ec00aa5d4b2bc2ac63865e2f23b0949182": "9431106d078f3b731e075fb268fa9f5f",
".git/objects/99/2b1c5315ee578d8fec2932be090f4272dfa2f3": "5e5418b5c9808a02b3673d157d168a4a",
".git/objects/9a/11d7fa4de3da0804294dd809c76f66a75a054b": "1081e3b423c3b65d1952e7bbce6d1c0f",
".git/objects/9b/2382a0fd342fe60e91c8b2da589877aff38aa0": "2f8d04c16ab24dbfbaa2d7430e8f8bf9",
".git/objects/9e/3fbc5a63e50570b33b3305de594b054f867458": "dd9d482aae8be84351c37a88afb0c532",
".git/objects/9e/c3df2ae4d15e69feb8f6d4d71b63eb41eb6aa0": "d8b2ed7e62cbc1fd2d9c1f502f4ccd13",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a9/ae9d28c71993756bb30992bf3d99303464ece0": "06790210b0dc27810f8eb147c5c70fd8",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ae/55a0bdc2b65b4302d805b731be50317c88900c": "59f1fda76cc9af8d423925daddd63f58",
".git/objects/af/c74f7e01f6923c221ce9f1846d4f75de621367": "b16194d38fd286d9ae7afe257ef0e6c7",
".git/objects/b2/a526ebc1c396fb457e0ff4ffa3582d95eeb3e9": "a840da3e65a4c5ea15a0d834424817a5",
".git/objects/b2/d57c4334498d176ecf37a875b213530f1a6c24": "3ffe472967923a6d1a63a7ae2b17b38a",
".git/objects/b4/12831514c96e7fea2d33142ce0bd0cfeb35bb5": "625c21d8caad870afb2c1cbd7b8bcc97",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bd/ee3381d988ae5804908ef19610ba31c1c88250": "ab26a07ed3794d63ddd8ae9f89d8a812",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/c5/ecc743ea3d53b2b2050a2c77bd737c991a16cd": "793761d0ed0479d4a1c510421b1baa77",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c9/8cbd74c27c350fd22501926b3fff45f207ea8d": "e3ce69589fe88e1d045f0588d61f5f8e",
".git/objects/d5/aa39a2fa19a7c48d82dcb4c66c4221223c8e29": "b07c61c43067b37594b49d0b03a7cd61",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/e3/8e2efebf9006d45f1e02a1e3d207131ab419db": "5bb0b31459b77f320ee246878bf60e95",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/f1/fc205cf54d043e2ca1856c4559508384845d9c": "961cd9f3253dd21346a54374c90cb019",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fa/fcb1a50a75d3ed8348c2c52b5fdc22a561fb12": "c0eb43fc86d9725146a00533b8058ed9",
".git/objects/fe/cdb6af27fa26ccd34203809d6dee403bc279bf": "98babfc226d9d5f98406eb5cf5fa2f83",
".git/refs/heads/main": "66a5d91bc3cf7e5642948a40b7888775",
".git/refs/remotes/origin/main": "66a5d91bc3cf7e5642948a40b7888775",
"assets/AssetManifest.bin": "7e8d46830090e3f319a88c274e7bea78",
"assets/AssetManifest.bin.json": "7ecff29d93080d3989c378bf0eed3314",
"assets/AssetManifest.json": "0982484c1300e41f44baeaba5953e3a0",
"assets/assets/images/png/about_me.png": "e47133b34336a0ed7e3251293010ac24",
"assets/assets/images/png/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/images/png/contact.png": "4077868d934648cc3f7df35456822962",
"assets/assets/images/png/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/images/png/developer.png": "5ab0290c6b59665056c9997386ecc131",
"assets/assets/images/png/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/images/png/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/images/png/github_logo.png": "2dbe2853e72478d0930b3612037f8c04",
"assets/assets/images/png/gmail.png": "ef4f87f341c7f30a698e71701a846e54",
"assets/assets/images/png/linkedin.png": "2aee64049e0addc55c4cb8c4ec9b7463",
"assets/assets/images/png/medium.png": "aca9daaa1fc5dceaf34ac5cd85d376ff",
"assets/assets/images/png/profile.png": "42fab1a98378a4775ed5a6a2ce6bdb12",
"assets/assets/images/png/riverpod.png": "875b2c58f7a51a01d72ffcc2ed38371e",
"assets/assets/images/svg/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/images/svg/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/images/svg/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/images/svg/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/images/svg/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/images/svg/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/images/svg/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "adea9b8ace04ec3ab37d92a8064a2fd4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9d4cfa1d1aa29faeb5a5c2455991911d",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e734a456cab8ba0cc6797c4d07b1db8b",
"/": "e734a456cab8ba0cc6797c4d07b1db8b",
"main.dart.js": "ca46f1fdc82e5cfd26c3b796e762f676",
"manifest.json": "833317a87b6d6cb1c39c4ae4dba20a37",
"version.json": "09d9561467cd8b74907defe1ff2c8032"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
