
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];

var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

// 3_Tablice_wielowymiarowe_0

// 3_Tablice_wielowymiarowe_1
    // 3_Tablice_wielowymiarowe_1_1
    console.log(task1Array[3][2]);
    // 3_Tablice_wielowymiarowe_1_2
    console.log(task1Array[1].length);
    // 3_Tablice_wielowymiarowe_1_3
    console.log(task1Array[4][2]);

// 3_Tablice_wielowymiarowe_2
    // 3_Tablice_wielowymiarowe_2_1
    for (i=0; i<task2Array.length; i++) {
        console.log(task2Array[i]);
    }
    // 3_Tablice_wielowymiarowe_2_2
    for (i=0; i<task2Array.length; i++) {
        console.log(task2Array[i].length);
    }
    // 3_Tablice_wielowymiarowe_2_3
    for(var i =0;i<task2Array.length;i++){
        for(var j =0;j<task2Array[i].length;j++){
            console.log(task2Array[i][j]);
        }
    }
// 3_Tablice_wielowymiarowe_3
var array2D = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 3],
    [9, 10, 11, 12]
];

function print2DArray(array) {
    for (var i=0; i<array.length; i++) {
        for(var j=0; j<array[i].length; j++) {
            console.log(array[i][j]);
        }
    }
}

print2DArray(array2D);

// 3_Tablice_wielowymiarowe_4
var array_sample =[
    [0,1,2],
    [3,4,5]
];

console.log(print2DArray(array_sample));

// 3_Tablice_wielowymiarowe_5
