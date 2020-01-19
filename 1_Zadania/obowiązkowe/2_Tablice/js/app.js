// 2_Tablice_0
function distFromAvarage(array) {
    var sum = 0;
    var result = [];
 
    for (var i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
 
    var avg = sum / array.length;
 
    for (var j = 0; j < array.length; j++) {
       result.push( Math.abs(array[j] - avg) );
    }

    return result;
 }
 
 console.log(distFromAvarage([1,2,3,4,5,6,7]));
 console.log(distFromAvarage([1,1,1,1]));
 console.log(distFromAvarage([2,8,3,7]));

// 2_Tablice_1
var fruits = ['banana', 'orange', 'apple', 'peach'];

for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 2_Tablice_1_1.Wypisz pierwszy owoc w konsoli
console.log(fruits[0]);

// 2_Tablice_1_2.Wypisz ostatni owoc w konsoli (skorzystaj z atrybutu length)
console.log(fruits[fruits.length-1]);

// 2_Tablice_1_3.W pętli wypisz wszystkie owoce (skorzystaj z atrybutu length)
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 2_Tablice_3
function printTable(array) {
    for (var i = 0; i <= array.length; i++) {
        console.log(array[i]);
    }
}
printTable([1,2,3,4,5,6]);

// 2_Tablice_4
function multiply(array) {
    var result = 1;
    for(var i = 0; i < array.length; i++) {
        result = result * array[i];
    }
    return result;
}
console.log(multiply([1,2,3,4,5,6,7]));
console.log(multiply([1,1,1,1]));
console.log(multiply([2,8,3,7]));

// 2_Tablice_5
function getEvenAvarage(array) {
    var temp = 0;
    var counter = 0;

    for(var i = 0; i < array.length; i++){
      if(array[i] % 2 === 0) {
        temp += array[i];
        counter++;
      }
    }

    if(counter === 0 ) return null;
    return temp/counter;
}

console.log(getEvenAvarage([1,2,3,4,5,6,7]));
console.log(getEvenAvarage([1,1,1,1]));
console.log(getEvenAvarage([2,8,3,7,4]));

// 2_Tablice_6
function sortArray(array) {

    var sorted = array.sort(function(a, b){return a-b});
    return sorted;
}
 
console.log(sortArray([145,11,3,64,4,6,10]));

// 2_Tablice_7
function addArrays(array1, array2) {

    if (array1.length > array2.length) {
       var shorter = array2;
       var longer = array1;
    } else {
       var shorter = array1;
       var longer = array2;
    }

    var result = [];
    
    for (var i = 0; i < shorter.length; i++) {
       result.push(array1[i] + array2[i]);
    }
 
    for (var j = shorter.length; j < longer.length; j++) {
       result.push(longer[j]);
    }

    return result;
}

console.log(addArrays([4,0,1,3,4], [1,9,6,7,8,17]));
console.log(addArrays([8,3,22], [1,3,2]));
console.log(addArrays([2,3,1,5,3,5], [3,1,76,1]));