// 13_DOM_Tworzenie_nowych_elementow_3

document.addEventListener('DOMContentLoaded', function () {

    var button = document.querySelector(".button");
    
    button.addEventListener("click", function () {
      button.parentElement.removeChild(button);
    });
    
});