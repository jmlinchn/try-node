var util = require('util');

console.log(util.isDate(new Date())) //true

console.log(util.isDate(Date())) // false (没有 new 关键字，返回的是一个字符串)

console.log(util.isDate({})) // false