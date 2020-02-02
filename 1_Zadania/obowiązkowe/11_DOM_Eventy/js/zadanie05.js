// 11_DOM_Eventy_5
document.addEventListener('DOMContentLoaded', function(){

    let box = document.querySelectorAll('.box');

    box.forEach(function (element) {
        element.addEventListener('click', function () {
            var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            this.style.backgroundColor = randomColor;
        })
    });

    
});