// 13_DOM_Tworzenie_nowych_elementow_2
  
document.addEventListener('DOMContentLoaded', function () {

    var button = document.querySelector(".button");
    var orderId = document.querySelector("#orderId");
    var item = document.querySelector("#item");
    var quantity = document.querySelector("#quantity");
    
    button.addEventListener( "click", function() {
      var newTr = document.createElement("tr");

      var tbody = document.querySelector("tbody");
      tbody.appendChild(newTr);

      var newTd = document.createElement("td");
      newTr.appendChild(newTd);
    
      var newTd2 = document.createElement("td");
      newTr.appendChild(newTd2);
    
      var newTd3 = document.createElement("td");
      newTr.appendChild(newTd3);
    
      newTd.innerHTML = orderId.value;
      newTd2.innerHTML = item.value;
      newTd3.innerHTML = quantity.value;
    });
    
});