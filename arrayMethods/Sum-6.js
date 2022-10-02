let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6];

let arr3 = []
for(let i = 0;i<Math.max(arr1.length,arr2.length);i++){
    arr3.push((arr1[i] || 0)+(arr2[i] || 0)) 
}

document.writeln(arr3); // [5,7,9,4,5]