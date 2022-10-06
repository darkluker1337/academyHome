var numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];  

function compareNumbers(arr){

     return arr.sort((a,b)=>b-a)
}

console.log(compareNumbers(numbers))
