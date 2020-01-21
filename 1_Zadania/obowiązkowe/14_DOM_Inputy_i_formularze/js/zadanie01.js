// 14_DOM_Inputy_i_formularze_1

document.addEventListener('DOMContentLoaded', function () {

    var checkbox = document.getElementById("invoice");
    checkbox.addEventListener('click', clickButton);

    var form = document.getElementById("invoiceData");
    form.style.display = "none";

    function clickButton(event) {
        if (form.style.display == "none") {
            form.style.display = "";
        } else {
            form.style.display = "none"
        }
    }

});