// 12_DOM_Poruszanie_sie_po_drzewie_2

var buttons = document.getElementsByClassName("button");

function clickListener1() {
  var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  this.parentElement.style.backgroundColor = randomColor;
}

for( var i = 0; i < buttons.length; i++ ) {
  buttons[i].addEventListener( "click", clickListener1 );
}