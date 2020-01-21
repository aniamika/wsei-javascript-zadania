// 12_DOM_Poruszanie_sie_po_drzewie_0

    // 12_DOM_Poruszanie_sie_po_drzewie_0_1
    var first = document.querySelector('.first');
    var firstChild = first.firstElementChild;
    var firstChildThirdChild = first.firstElementChild.children[2];

    // 12_DOM_Poruszanie_sie_po_drzewie_0_2
    var second = document.getElementById('second');
    var secondParent = second.parentElement;
    var secondParentFirthChild = secondParent.children[3];

    // 12_DOM_Poruszanie_sie_po_drzewie_0_3
    var third = document.querySelector('[data-ex="third"]');
    var finalChildren = third.parentElement.parentElement.lastElementChild.firstElementChild.children;
    
    console.log(
        finalChildren [
            Math.ceil(finalChildren.length / 2) - 1
        ]
     );
    
    // 12_DOM_Poruszanie_sie_po_drzewie_0_4
    var forth = document.querySelector('.forth');
    var forthChildren = forth.parentElement;
    console.log (
       forthChildren.querySelector('article').querySelectorAll('p')[1]
    );
    
