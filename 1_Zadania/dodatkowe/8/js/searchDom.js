// Zadanie_8

    // Zadanie_8_2_1
    let menu = document.querySelector("#menu");
    
    function getDataInfo(element) {
        let array = [];
        let lis = document.getElementsByTagName('li');
        
        for(let i = 0; i < lis.length; i++) {
            array.push(lis[i].getAttribute('data-info'));
        }
        return array;
    }
    console.log(getDataInfo(menu));

    // Zadanie_8_2_2
    let container = document.querySelector('#main-contener');

    function getElementClass(element) {
        let array = [];

        for(let i = 0; i < element.classList.length; i++) {
            array.push(element.classList[i]);
        }
        return array;
    }
    console.log(getElementClass(container));

    // Zadanie_8_2_3
    let pink = document.querySelector('.pink-color');

    function getElementText(element) {
        return element.innerText;
    }
    console.log(getElementText(pink));
    
    // Zadanie_8_2_4
    let images = document.getElementsByClassName('images');
    console.log(images);

    function getElementAlt(element) {
        let array = [];

        for(let i = 0; i < element.length; i++) {
            array.push(element[i].getAttribute('alt'));
        }
        return array;
    }
    console.log(getElementAlt(images))

    // Zadanie_8_2_5
