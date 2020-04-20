var util = require('util')
function Person() {
    this.name = 'byvoid';
    this.toString = function () {
        return this.name;
    }
}

// inspect 检视对象信息
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true))