// Zadanie 1_Slider
document.addEventListener('DOMContentLoaded', function () {
    // console.log("Działa");
    let next = document.querySelector('#nextPicture');
    // console.log(next);
    let prev = document.querySelector('#prevPicture');
    // console.log(prev);
    let lis = document.querySelectorAll('li');
    // console.log(lis);

    let index = 0;

    lis[index].className = 'visible';

    next.addEventListener('click', function() {
        lis[index].classList.remove('visible');
        index = index + 1;
        if(index >= lis.length) {
            index = 0;
        }
        lis[index].classList.add('visible');
    });

    prev.addEventListener('click', function() {
        lis[index].classList.remove('visible');
        index = index - 1;
        if(index < 0) {
            index = lis.length -1;
        }
        lis[index].classList.add('visible');
    });


});