self.addEventListener('install', e => {

    const cachePromise = caches.open('primer_wpa-rca')
        .then(cache => {

            return cache.addAll([
                '/2020/first_wpa/index.html',
                '/2020/first_wpa/detail.html',
                '/2020/first_wpa/css/style.css',
                '/2020/first_wpa/css/animate.css',
                '/2020/first_wpa/js/app.js',
                '/2020/first_wpa/js/main.js',
                '/2020/first_wpa/img/image.png',
                '/2020/first_wpa/img/micky.png'
            ]);

        });

    e.waitUntil(cachePromise);

});