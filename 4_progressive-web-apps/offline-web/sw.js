var CACHE_NAME = 'my-cache-v1';
var filesToCache = [
    '/',
    '/app.js',
    '/base.css',
    '/marvel.jpeg'
];

// serviceWorker 객체
// console.log(this, self);

// ServiceWorker 설치
self.addEventListener('install', function(event) {
    // waitUntil이라는 함수는 '데이터 가져오기'라는 동작이 있을 때, 이 처리가 끝날 때까지 기다려주는 API
    event.waitUntil(
        // 캐쉬 이름을 등록하고 그 캐쉬 이름에 해당하는 파일들을 캐싱(저장)
        // then / cache 라는 내장 함수를 쓸 수 있는 것도 caches.open()의 반환 객체가 Promise이기 때문.
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(filesToCache);
            })
            .catch(function(err) {
                console.error(err);
            }) 
    );
});

// ServiceWorker Fetch - 네트워크 요청/응답
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request)
            })
            .catch(function(err) {
                console.log(err);
            })
    );
});