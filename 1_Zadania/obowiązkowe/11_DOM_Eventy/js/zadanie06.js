// 11_DOM_Eventy_6
document.addEventListener('DOMContentLoaded', function(){

    let box = document.querySelector('#box');

    box.addEventListener("mousemove", function (event) {
        var boundingRect = box.getBoundingClientRect();
        var globalY = document.getElementById("globalY");
        var globalX = document.getElementById("globalX");
        var localY = document.getElementById("localY");
        var localX = document.getElementById("localX");

        globalX.innerText = event.clientX;
        globalY.innerText = event.clientY;
        localX.innerText = parseInt(event.clientX - boundingRect.left);
        localY.innerText = parseInt(event.clientY - boundingRect.top);
    });

});