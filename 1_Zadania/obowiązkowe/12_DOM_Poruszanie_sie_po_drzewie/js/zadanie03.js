// 12_DOM_Poruszanie_sie_po_drzewie_3

var elements = document.querySelectorAll('.listContainer');

function mouseCallback() {
   var listElements = this.querySelectorAll('li');

   for (var i = 0; i < listElements.length; i++) {
      listElements[i].style.backgroundColor = 'green';
   }

   listElements[0].style.backgroundColor = 'red';
   listElements[listElements.length - 1].style.backgroundColor = 'blue';
}

function mouseOutCallback() {
   var listElements = this.querySelectorAll('li');

   for (var i = 0; i < listElements.length; i++) {
         listElements[i].style.backgroundColor = '';
   }

}

for (var i = 0; i < elements.length; i++) {
   elements[i].addEventListener('mouseover', mouseCallback);
   elements[i].addEventListener('mouseout', mouseOutCallback);
}