if ('serviceWorker' in navigator) {
    //local
    navigator.serviceWorker.register('/2020/first_wpa/sw.js');
    //deployment
    // navigator.serviceWorker.register('sw.js');
}