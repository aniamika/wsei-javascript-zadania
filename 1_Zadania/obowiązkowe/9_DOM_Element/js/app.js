document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    // 9_DOM_Element_Zadanie_0
    function getDatasInfor(elements) {
        let array = [];

        for (let i = 0; i < elements.length; i++ ) {
            array.push(elements[i].dataset.color);
        }

        console.log(array);
    }

    getDatasInfor(links);

    // 9_DOM_Element_Zadanie_1
    console.log(homeElement);
    console.log(childElements);
    console.log(banner);
    console.log(blocks);
    console.log(links);

    for (let i = 0; i < childElements.length; i++) {
        console.log(childElements[i].tagName, childElements[i].classList);
    }

    for (let i = 0; i < links.length; i++) {
        console.log(links[i].tagName, links[i].classList);
    }

    for (let i = 0; i < blocks.length; i++) {
        console.log(blocks[i].tagName, blocks[i].classList);
    }

    // 9_DOM_Element_Zadanie_2
    let ulBlocks = document.querySelector(".blocks");
    ulBlocks.outerHTML = "new string instead of blocks list";

    // 9_DOM_Element_Zadanie_3
    let mainFooter = document.querySelector("#mainFooter");

    function getId(element) {
        let id = element.getAttribute('id');
        console.log(id);
        return id;
    }
    getId(mainFooter);

    // 9_DOM_Element_Zadanie_4
    function getTags(elements) {
        var array1 = [];

        for (let i = 0; i < elements.length; i++) {
            array1.push(elements[i].tagName);
        }

        return array1;
    }

    const test1 = getTags(ChildElements);
    console.log(test1);

    // 9_DOM_Element_Zadanie_5
    function getClassInfo(element) {
        var tab = [];
        for ( var i = 0; i < element.classList.length; i++ ) {
            toolbar.push(element.classList[i]);
        }
        return tab
    }
    console.log(getClassInfo(banner));

    // 9_DOM_Element_Zadanie_6
    let allLi = document.querySelectorAll("nav li");

    function setDataDirection(elements) {
        for ( let i = 0; i < elements.length; i++) {
            if ( elements[i].getAttribute["data-direction"] !== "top") {
                elements[i].setAttribute("data-direction, top");
            }
        }
    }
    setDataDirection(allLi);

});