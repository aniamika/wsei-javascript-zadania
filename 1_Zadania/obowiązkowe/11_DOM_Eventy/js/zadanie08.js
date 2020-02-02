// 11_DOM_Eventy_8
document.addEventListener('DOMContentLoaded', function(){

    let width = document.getElementById("windowWidth");
    let height = document.getElementById("windowHeight");

    width.innerText = window.innerWidth;
    height.innerText = window.innerHeight;

    window.addEventListener("resize", function () {
        width.innerText = window.innerWidth;
        height.innerText = window.innerHeight;
    });

});