// 13_DOM_Tworzenie_nowych_elementow_0

document.addEventListener('DOMContentLoaded', function () {

    var deleteItem = document.querySelectorAll(".deleteBtn");
    
    for ( var i = 0; i < deleteItem.length; i++ ) {
      deleteItem[i].addEventListener( "click", function() {
      this.parentElement.parentElement.remove();
        });
    }
    
});