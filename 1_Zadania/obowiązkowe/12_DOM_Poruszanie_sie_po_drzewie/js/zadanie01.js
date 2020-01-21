// 12_DOM_Poruszanie_sie_po_drzewie_1

var buttons = document.getElementsByClassName("button");

function clickListener1() {
  this.nextElementSibling.classList.toggle('hidden');
}

for( var i = 0; i < buttons.length; i++ ) {
  buttons[i].addEventListener( "click", clickListener1 );
}