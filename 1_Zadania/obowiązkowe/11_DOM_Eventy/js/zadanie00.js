// 11_DOM_Eventy_0a
let parents = document.querySelectorAll('.parent');

for(let i = 0; i < parents.length; i++) {
    parents[i].addEventListener('mouseover', function() {
        this.children[0].style.display = 'block';
    }) 
    parents[i].addEventListener('mouseleave', function() {
        this.children[0].style.display = 'none';
    }) 
}

// 12_DOM_Eventy_0b
parent.addEventListener("nazwaEventu", function() {

    function hideChildrenElement(){

    }

})