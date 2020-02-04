/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

 // Zadanie 2_Gallery
document.addEventListener('DOMContentLoaded', function () {

    let array = document.getElementsByTagName('li');
    console.log(array);
    let body = document.querySelector('body');
    console.log(body);

    for(let i = 0; i < array.length; i++) {
        array[i].addEventListener('click', function() {
            let url = this.firstElementChild.getAttribute('src');

            // new elements
            let div = document.createElement('div');
            div.classList.add('fullScreen');

            let img = document.createElement('img');
            img.setAttribute('src', url);

            let button = document.createElement('button');
            button.classList.add('close');
            button.innerHTML='Close';

            // place new elements
            div.appendChild(img);
            div.appendChild(button);
            body.appendChild(div);

            // remove new element from DOM
            button.addEventListener('click', function() {
                body.removeChild(div);
            });

        })

    }
});