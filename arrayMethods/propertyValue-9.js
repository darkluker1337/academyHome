var litmir = [ 
    { author: 'Хэленка', title: 'Улетела сказка'},
    { author: 'Коул Кресли', title: 'Восстание Аркан'},
    { author: 'Райчел Мид', title: 'Золотая лилия'}
    ];
 
 function propertyValue(array, key) {
   
      return array.map((item)=> item[key]).join(',')
 }

console.log(propertyValue(litmir, 'title'));  // Улетела сказка,Восстание Аркан,Золотая лилия
console.log(propertyValue(litmir, 'author')); // Хэленка,Коул Кресли,Райчел Мид 