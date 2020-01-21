// 13_DOM_Tworzenie_nowych_elementow_5

document.addEventListener('DOMContentLoaded', function() {

    var buttons = document.querySelectorAll(".moveBtn");
    var list1 = document.querySelector("#list1");
    var list2 = document.querySelector("#list2");
    
    for ( var i = 0; i < buttons.length; i++ ) {
    
        buttons[i].addEventListener( "click", function() {
            if ( this.parentElement.parentElement.id == "list1" ) {
                list2.appendChild( this.parentElement );
            } else {
                list1.appendChild( this.parentElement );
            }
        });
    }
    
});