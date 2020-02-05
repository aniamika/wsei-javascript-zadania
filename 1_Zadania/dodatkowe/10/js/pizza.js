// Zadanie 10
let endPrice = parseFloat(document.getElementById('price').innerText);
let inputs = document.getElementsByTagName('input');
let lastClearInput = inputs[inputs.length - 1];
let firstInput = inputs[0];


function calculatePrice() {
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('click', function() {
            if(inputs[i].hasAttribute('data-price')) {
                let getPrice = parseFloat(inputs[i].getAttribute('data-price'));
                endPrice = endPrice + getPrice;
                let updatedPrice = document.getElementById('price').innerText = endPrice.toFixed(2) + 'zł';
            }
        });
    }
}
calculatePrice();


function clearPrice() {
    lastClearInput.addEventListener('click', function() {
        for(let i = 0; i < inputs.length; i++) {
            inputs[i].checked = false;
            let updatedPrice = document.getElementById('price').innerText ='0zł';
        }
    })
}
clearPrice()


function chooseAll() {
    firstInput.addEventListener('click', function() {
        for(let i = 0; i < inputs.length; i++) {
            if(inputs[i].hasAttribute('data-price')) {
                inputs[i].checked = true;
                firstInput.checked = true;
                let getPrice = parseFloat(inputs[i].getAttribute('data-price'));
                endPrice = endPrice + getPrice;
                let updatedPrice = document.getElementById('price').innerText = endPrice + 'zł';
            }
        }
    })
}
chooseAll()