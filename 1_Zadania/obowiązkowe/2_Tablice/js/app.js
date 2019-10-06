// 2_Tablice

// Zadanie 0
// function distFromAvarage(array) {

//     var averageSum = 0;
//     for (let i = 0; i < array.length; i++) {
//         averageSum += array[i];
//     }

//     var averageValue = averageSum / array.length;
//     const outputArray = [];
    
//     for(let i = 0; i < array.length; i++) {
//         outputArray.push(array[i] - averageValue);
//     };

//     console.log(outputArray);
//     return array;
// };

// distFromAvarage([1, 2, 3, 4, 5, 6, 7]);

// Zadanie 1
// var array = ["apple", "banana", "blueberry"];
// console.log(array[0]);

// console.log(array[array.length-1]);

// for(var i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// Zadanie 3
// function printTable(tab) {
//     for(let i = 0; i < tab.length; i++) {
//         console.log(tab[i]);
//     }
// }

// Zadanie 4
// function multiply(array) {
//     var suma = 1;
//      for (i = 0; i< array.length; i++) {
//          suma = suma*array[i];
//      }
//      return suma;
// }

// multiply([1, 2, 3, 4, 5, 6, 7]);


// Zadanie 5
function getEvenAvarage(tab) {
    const evenNumbers = [];

    for(let i = 0; i < tab.length; i++) {
        const element = tab[i];
        if (element %2 === 0) {
            evenNumbers.push(element);
        }
    }

    let sum = 0;

    for(let i = 0; i < evenNumbers.length; i++) {
        sum += evenNumbers[i];
    }

    if(evenNumbers.length === 0) {
        return null;
    } else {
        return sum/evenNumbers.length;
    }

}

getEvenAvarage([1, 2, 3, 4, 5, 6, 7]);