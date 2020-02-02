document.addEventListener('DOMContentLoaded', function () {

    let next = document.querySelector('#nextPicture');
    let prev = document.querySelector('#prevPicture');
    
    let lis = document.querySelectorAll('li');
    let photoIndex = 0;
    var allLi = [];

    for(var i = 0; i < lis.length; i++) {
        allLi.push(lis[i]);
    }

    lis[0].className = 'visible';

    next.addEventListener('click', function() {
        
        allLi = allLi + 1;
    });


});