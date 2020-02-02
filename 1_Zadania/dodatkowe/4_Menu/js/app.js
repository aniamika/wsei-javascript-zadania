// 4_Menu

document.addEventListener('DOMContentLoaded', function () {

    let lis = document.querySelectorAll('ul li');

    for (let i = 0; i < lis.length; i++) {

        lis[i].addEventListener('mouseover', function(){
            // let secondList = this.querySelector('ul');
            // if ( hiddenList !== null){
            //     hiddenList.style.display = "inline-block";
            // }
            console.log('element');
        })
    }

    // for (var i = 0; i < lis.length; i++) {
    //     lis[i].addEventListener('mouseout', function(){
    //         var secondList = this.querySelector('ul');
    //         // if ( hiddenList !== null) {
    //         //     hiddenList.style.display = "none";
    //         // }
    //         console.log(secondList);
    //     })
    // }



});