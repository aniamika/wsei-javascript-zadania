// 14_DOM_Inputy_i_formularze_3
document.addEventListener('DOMContentLoaded', function () {

    var form = document.querySelector("form");
    var table = document.querySelector(".table.table-bordered tbody"); /*pamiętać o tbody bo tego nie ma w html*/
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var t1 = document.querySelector("#team1");
        var t2 = document.querySelector("#team2");
        var p1 = document.querySelector("#points1");
        var p2 = document.querySelector("#points2");
        
        if (t1.value !== t2.value && p1.value >= 0 && p2.value >= 0) {
            var td1 = document.createElement("td");
            td1.innerText = t1.value;
            var td2 = document.createElement("td");
            td2.innerText = t2.value;
            var td3 = document.createElement("td");
            td3.innerText = p1.value + " - " + p2.value;
            var tr = document.createElement("tr");
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table.appendChild(tr);
        }
    });

});