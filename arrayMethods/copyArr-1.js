let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// function arrayClone(arr) {
//     let copyArray = [];
//     arr.forEach(element => {
//        copyArray.push(element) 
//     });
//     return copyArray;
// }
// var arr1 = arrayClone(vegetables);
// console.log(arr1)
// console.log(vegetables)

/* Два варианта решения*/
function arrayClone(arr){
    let copyArray = [];
    return copyArray.concat(arr)
}
var arr1 = arrayClone(vegetables);
console.log(arr1)
console.log(vegetables)