self.addEventListener('install', e => {

    const NAME_STATIC = 'statis';

    const CACHES_FILES = caches.open(NAME_STATIC).then(cache => {
        cache.addAll([
            '/index.html',
            '/detail.html',
            '/css/style.css',
            '/css/animate.css',
            '/js/app.js',
            '/js/main.js',
            '/songs/ok.wav',
            '/img/image.png',
            '/img/micke.png'
        ]);
    });

    e.waitUntil(CACHES_FILES);

});