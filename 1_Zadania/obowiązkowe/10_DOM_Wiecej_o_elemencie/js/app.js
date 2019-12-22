document.addEventListener("DOMContentLoaded", function () {
    
    // 10_DOM_Wiecej_o_elemencie_0_1
    let list = document.querySelectorAll('.ex5 ul li');

    for (let i = 0; i < list.length; i++) {
        if (i % 2 == 0) {
            list[i].style.backgroundColor = 'green';
        }
        // 10_DOM_Wiecej_o_elemencie_0_3
        if (i % 3 == 0) {
            list[i].style.textDecoration = 'underline';
        }
    }

    // 10_DOM_Wiecej_o_elemencie_0_2
    list[4].classList.add('big');


    // 10_DOM_Wiecej_o_elemencie_1
    let chrome = document.querySelector('.chrome');
    let edge = document.querySelector('.edge');
    let firefox = document.querySelector('.firefox');

    edge.style.backgroundImage = "url(assets/img/edge.png)";
    firefox.style.backgroundImage = "url(assets/img/firefox.png)";

    chrome.nextElementSibling.href = "chrome.com";
    firefox.nextElementSibling.href = "firefox.com";
    edge.nextElementSibling.href = "microsoft.com";

    chrome.nextElementSibling.innerHTML = "Chrome";
    firefox.nextElementSibling.innerHTML = "Firefox";
    edge.nextElementSibling.innerHTML = "Edge";

    chrome.style.width = "100px";
    
    // 10_DOM_Wiecej_o_elemencie_2
    let name = document.getElementById('name');
    let favColor = document.getElementById('fav_color');
    let favDish = document.getElementById('fav_meal');

    name.innerHTML = 'Ania';
    favColor.innerHTML = 'grey';
    favDish.innerHTML = 'dumplings';

    // 10_DOM_Wiecej_o_elemencie_3
    let ex3ul = document.querySelector('.ex3 ul');
    ex3ul.classList.add('menu');

    let ex3li = ex3ul.getElementsByTagName('li');
    console.log(ex3li);

    for (let i = 0; i < ex3li.length; i++) {
        ex3li[i].classList.add('menuElement');
    }

    let redElements = document.getElementsByClassName('error');
    for (let i = 0; i < redElements.length; i++) {
        redElements[i].classList.remove('error');
    }

    // 10_DOM_Wiecej_o_elemencie_4
    let ex4listItems = document.querySelectorAll('.ex4 ul li');

    for (let i = 0; i < ex4listItems.length; i++) {
        ex4listItems[i].setAttribute('data-id', i+1);

    }

});