let logo = document.getElementById('imagen');

// function callLogo() {
//     logo.lassList.add('fadeIn');
// }

setTimeout(function() {
    console.log('good')
}, 1000);

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