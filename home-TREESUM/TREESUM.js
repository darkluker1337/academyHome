let treeSum = (arr)=>{
    let result = 0;
    for(let key of arr){
        result = result + (+(key.length ? treeSum(key) : key))
    }
    return result;
}
let array = [ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ],1, 8]
    
console.log(treeSum(array))