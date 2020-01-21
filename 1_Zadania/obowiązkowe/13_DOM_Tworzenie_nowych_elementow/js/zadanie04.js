// 13_DOM_Tworzenie_nowych_elementow_4

document.addEventListener('DOMContentLoaded', function () {

    var button = document.querySelector(".button");
    var ul = document.querySelector(".list");
    
    button.addEventListener("click", function() {
      if (ul.hasChildNodes()) {
        ul.removeChild(ul.lastElementChild);
        };
    });
    
});