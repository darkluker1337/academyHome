class MyString{
    reverse(str){
        return str.split('').reverse().join('')
    }
    ucFirst(str){
        return str[0].toUpperCase() + str.slice(1)
    }
    ucWords(str){
        return str.replace(/\b\w/g, (bigLetter)=> bigLetter.toUpperCase())
    }
}

var str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'