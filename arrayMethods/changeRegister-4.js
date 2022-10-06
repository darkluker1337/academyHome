const str = 'КаЖдЫй ОхОтНиК'
function changeRegister (str) { 
    return str.split('').map((item)=> item.toUpperCase() == item ? item.toLowerCase() : item.toUpperCase()).join('')
}
document.writeln(changeRegister(str)); // [кАжДыЙ оХоТнИк] 