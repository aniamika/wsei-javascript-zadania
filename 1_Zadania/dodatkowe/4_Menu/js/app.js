// Zadanie 4_Menu
document.addEventListener('DOMContentLoaded', function () {

    let lis = document.querySelectorAll('ul li');   

    for (let i = 0; i < lis.length; i++) {

        lis[i].addEventListener('mouseover', function(){
            let secondList = this.querySelector('ul');
            if ( secondList !== null){
                secondList.style.display = "block";
            }
        })

        lis[i].addEventListener('mouseout', function(){
            var secondList = this.querySelector('ul');
            if ( secondList !== null) {
                secondList.style.display = "none";
            }
        })

    }

});