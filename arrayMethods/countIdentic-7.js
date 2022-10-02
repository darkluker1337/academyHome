function countIdentic(arr) {
    let result = 0;
    let obj = arr.reduce(function(acl, item) {
        acl[item] = (acl[item] || 0) + 1;
        return acl;
      }, {});
    for(let key in obj){
        if(obj[key] > 1 ){
            result +=1;
        }
    }
    return result
}
console.log(countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8])) // 4
console.log(countIdentic([15,14,13,19,13,14,14,14,7,9,9])) // 3  
