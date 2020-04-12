let logo = document.getElementById('imagen');

logo.addEventListener('click', function() {
    logo.classList.remove('fadeIn');
    logo.classList.add('fadeIn');

    if (confirm('Te gusta jugar?')) {
        var audio = document.getElementById("audio");
        audio.play();
    } else {
        alert('Testing good...')
    }

});


if (window.caches) {
    caches.open('testing-here').then(cache => {
        cache.add('/2020/first_wpa/index.html')
    })
} else {
    console.log('no cache');

}