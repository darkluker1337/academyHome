let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6];

let arr3 = []
const summ = (array1, array2) => {
    return  array1.map((item, index) => item += array2[index] || 0);
}

document.writeln(summ); // [5,7,9,4,5]