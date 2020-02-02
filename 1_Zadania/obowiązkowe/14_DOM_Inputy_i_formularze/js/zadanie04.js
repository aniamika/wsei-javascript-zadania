// 14_DOM_Inputy_i_formularze_4
document.addEventListener('DOMContentLoaded', function () {
    let cardTypeDiv = document.getElementById("type");
    let cardNumberInput = document.getElementById("name");
  
    cardNumberInput.addEventListener("keyup", event => {
      let cardNumber = cardNumberInput.value;
  
      if (cardNumber[0] == "4" && (cardNumber.length >= 13 && cardNumber.length <= 16)) {
        cardTypeDiv.innerHTML = "Visa";
        cardNumberInput.style.borderColor = "#00FF00";
      } else if (cardNumber[0] == "5" && cardNumber.length == 16) {
        cardTypeDiv.innerHTML = "Mastercard";
        cardNumberInput.style.borderColor = "#00FF00";
      } else if (cardNumber[0] == "3" && (cardNumber[1] == "4" || cardNumber[1] == "7") && cardNumber.length == 15) {
        cardTypeDiv.innerHTML = "American Express";
        cardNumberInput.style.borderColor = "#00FF00";
      } else {
        cardTypeDiv.innerHTML = "";
        cardNumberInput.style.borderColor = "";
      }
    });
});