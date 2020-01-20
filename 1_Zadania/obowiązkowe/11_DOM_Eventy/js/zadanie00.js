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

// 11_DOM_Eventy_0b
for (var j = 0; j < parents.length; j++) {
    parents[j].addEventListener("mouseout", function() {
        var parent = this;

        function hideChildrenElement(parent){
            parent.querySelector('.children').style.display = 'none';
        }

        hideChildrenElement(parent);
    });
}