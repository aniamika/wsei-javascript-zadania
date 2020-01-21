// 13_DOM_Tworzenie_nowych_elementow_1

document.addEventListener('DOMContentLoaded', function () {

    var button = document.querySelector(".button");
    var ul = document.querySelector("ul");
    counter = 1;
    
    button.addEventListener("click", function () {
        var newLi = document.createElement("li");
        newLi.innerText = counter++;
        
        ul.appendChild(newLi);
    });
    
});