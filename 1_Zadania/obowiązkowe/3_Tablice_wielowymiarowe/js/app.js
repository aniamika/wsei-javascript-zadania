// 3_Tablice_wielowymiarowe_0
var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34]
 ];
 
 function checkArray(array) {
    var res = [];

    for (var i = 0; i < array.length; i++) {
       var tmp = true;
 
       for (var j = 0; j < array[i].length; j++) {
          if (array[i][j] % 2 !== 0) {
             tmp = false;
          }
       }
       res.push(tmp);
    }
    return res;
 }
 
 console.log(checkArray(arr));

// 3_Tablice_wielowymiarowe_1
    var task1Array = [
        [2, 3],
        ["Ala", "Ola"],
        [true, false],
        [5, 6, 7, 8],
        [12, 15, 67]
    ];
    // 3_Tablice_wielowymiarowe_1_1
    console.log(task1Array[3][2]);
    // 3_Tablice_wielowymiarowe_1_2
    console.log(task1Array[1].length);
    // 3_Tablice_wielowymiarowe_1_3
    console.log(task1Array[4][2]);


// 3_Tablice_wielowymiarowe_2
    var task2Array = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
    ];
    // 3_Tablice_wielowymiarowe_2_1
    for (var i = 0; i < task2Array.length; i++ ) {
        console.log(task2Array[i]);
    }
    // 3_Tablice_wielowymiarowe_2_2
    for (var i = 0; i <task2Array.length; i++ ) {
        console.log(task2Array[i].length);
    }
    // 3_Tablice_wielowymiarowe_2_3
    for (var i =0;i<task2Array.length;i++) {
        for (var j =0;j<task2Array[i].length;j++) {
            console.log(task2Array[i][j]);
        }
    }

// 3_Tablice_wielowymiarowe_3
var print2DArrayData = [
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 3],
    [9, 10, 11, 12]
];

function print2DArray(array) {
    for (var i = 0; i < array.length; i++){
        for (var j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }
}

print2DArray(print2DArrayData);

// 3_Tablice_wielowymiarowe_4
var myTable = [
    [22, 32],
    [5, 6, 7, 8, 3],
    [9, 10, 11, 12]
];

console.log(print2DArray(myTable));

// 3_Tablice_wielowymiarowe_5
function create2DArray(rows, cols) {
    var newArray = [];
    var counter = 0;
 
    for (var i = 0; i < rows; i++) {
       newArray[i] = [];
 
       for (var j = 0; j < cols; j++) {
          newArray[i][j] = counter;
          counter++;
       }
    }
    return newArray;
 }
 
 console.log(create2DArray(4, 3));