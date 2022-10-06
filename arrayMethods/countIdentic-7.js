const countIdentic1 = (array) => {
    let check = [];
    let res = array.reduce((acc, item) => {
        if (check.includes(item)) {
            acc += 1;
        } else {
            check.push(item);
        }
        return acc;
    }, 0);

    return res;
};
console.log(countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8])) // 4
console.log(countIdentic([15,14,13,19,13,14,14,14,7,9,9])) // 3  
