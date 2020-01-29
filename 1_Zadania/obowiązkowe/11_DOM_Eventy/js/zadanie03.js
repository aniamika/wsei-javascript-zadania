// 11_DOM_Eventy_3
document.addEventListener('DOMContentLoaded', function(){

    let button1 = document.querySelector('#button1');
    let counter1 = document.querySelector('#button1 + p span');

    let button2 = document.querySelector('#button2');
    let counter2 = document.querySelector('#button2 + p span');

    let button3 = document.querySelector('#button3');
    let counter3 = document.querySelector('#button3 + p span');

    button1.addEventListener('click', function click1() {
        let number = parseInt(counter1.innerHTML);
        counter1.innerHTML = number + 1;
    })

    button2.addEventListener('click', function click2() {
        let number = parseInt(counter2.innerHTML);
        counter2.innerHTML = number + 1;
    })

    button3.addEventListener('click', function click3() {
        let number = parseInt(counter3.innerHTML);
        counter3.innerHTML = number + 1;
    })

});