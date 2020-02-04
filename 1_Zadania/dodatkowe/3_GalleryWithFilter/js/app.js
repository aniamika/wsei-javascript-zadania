// Zadanie 3_GalleryWithFilter
 document.addEventListener('DOMContentLoaded', function () {

    let pictures = document.querySelectorAll('img');
    let hideButton = document.getElementById('hideButton');
    let showButton = document.getElementById('showButton');
    let input = document.querySelector('#tagInput');

    showButton.addEventListener('click', function() {
        for(let i = 0; i < pictures.length; i++) {
            // porownanie inputValue z datatagami
            if(pictures[i].dataset.tag.includes(input.value)) {
                console.log('są takie same');
            } else {
                pictures[i].classList.add('invisible');
            }
        }

    })

    hideButton.addEventListener('click', function() {
        input.value = '';

        for(let i = 0; i < pictures.length; i++) {
            pictures[i].classList.remove('invisible');
        }
    })


});
