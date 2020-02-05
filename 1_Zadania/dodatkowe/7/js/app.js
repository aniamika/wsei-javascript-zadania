document.addEventListener('DOMContentLoaded', function () {
// Zadanie 7
    // Zadanie 7_1
    function getNumber(number, array) {

        for(let i = 0; i < array.length; i++) {
            if(array[i] == number) {
                return true;
            }
        }
        return false;
    }
    console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));
    console.log(getNumber(5, [33, 54, 2, 1, 4, 100]));

    // Zadanie 7_2
    function createIdentityMatrix(rows, columns) {
        const array = [];
    
        for (let i = 0; i < rows; i++) {
            array[i] = [];
            for (let j = 0; j < columns; j++) {
                if (i === j) {
                    array[i][j] = 1;
                } else {
                    array[i][j] = 0;
                }
            }
        }
        return array;
    }
    console.log(createIdentityMatrix(4,4));
    // => [ [1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1] ];
    
    // Zadanie 1-dodatkowe
    function addTheSameNumbers(number, array) {
        var sum;

        for(let i = 0; i < array.length; i++) {
            if(array[i] === number) {
                sum = array[i];
            } else {
                sum = null;
            }
        }
        return sum;
    }
    console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10])) 
    // => 14
    console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100] ))
    // => 9
    console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0] )) 
    // => 0
    console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46] )) 
    // => null
});