// 11_DOM_Eventy_4
document.addEventListener('DOMContentLoaded', function(){


    var body = document.querySelector("body");
    var count = document.querySelector("span");

    function clickButton(event) {
        if(event.target.tagName == "BUTTON") {
        var curval = parseInt(count.innerHTML);
        count.innerHTML = curval + 1;}
    }

    body.addEventListener('click', clickButton);

});