/*
 <span class="tooltipText">Text tooltipa</span>
 */

// 5_Tooltips

document.addEventListener('DOMContentLoaded', function () {

    let tooltips = document.getElementsByClassName('tooltip');
    let tooltip1 = tooltips[0];
    let tooltip2 = tooltips[1];
    let tooltip3 = tooltips[2];
    console.log(tooltip1);
    console.log(tooltip2);
    console.log(tooltip3);

    tooltip1.addEventListener('mouseover', function() {
        var newSpan1 = document.createElement('span');
        newSpan1.className = 'tooltipText';
        newSpan1.innerText = this.dataset.text;
        this.append(newSpan1);
    });

    tooltip1.addEventListener('mouseout', function() {
        var newSpan1 = document.getElementsByClassName('tooltip');
        var newSpan1children = newSpan1[0].children;
        newSpan1children[0].parentElement.removeChild(newSpan1children[0]);
    });

    tooltip2.addEventListener('mouseover', function(){
        var newSpan2 = document.createElement('span');
        newSpan2.className = 'tooltipText';
        newSpan2.innerText = this.dataset.text;
        this.append(newSpan2);
    })

    tooltip2.addEventListener('mouseout', function(){
        var newSpan2 = document.getElementsByClassName('tooltip');
        var newSpan2children = newSpan2[1].children;
        newSpan2children[0].parentElement.removeChild(newSpan2children[0]);
    })

    tooltip3.addEventListener('mouseover', function(){
        var newSpan3 = document.createElement('span');
        newSpan3.className = 'tooltipText';
        newSpan3.innerText = this.dataset.text;
        this.append(newSpan3);
    })

    tooltip3.addEventListener('mouseout', function(){
        var newSpan3 = document.getElementsByClassName('tooltip');
        var newSpan3children = newSpan3[2].children;
        newSpan3children[0].parentElement.removeChild(newSpan3children[0]);
    })

});