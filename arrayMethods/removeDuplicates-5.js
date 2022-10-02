let arr = ["php", "php", "css", "css",
  "script", "script", "html", "html", "java","php"
];
function removeDuplicates(arr) {
    return arr.filter((item,index)=> arr.indexOf(item)== index)
}
document.writeln(removeDuplicates(arr));  // [php,css,script,html,java]


