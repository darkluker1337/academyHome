const num = prompt('Введите число', 55);

function colonOdd (num) {
    let arr = [];
    for(let i = 0; i<num.length-1; i++){
        arr.push(num[i] % 2 == 0 ? num[i] : num[i]+':')
    }
    arr.push(num.length-1) 
    return arr.join('')
}

console.log(colonOdd(num))