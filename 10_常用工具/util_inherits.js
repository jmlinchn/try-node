var util = require('util')

function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function () {
        console.log('Hello' + this.name)
    }
}

// 在 Base 的原型中定义函数
Base.prototype.showName = function(){
    console.log(this.name);
}

function Sub(){
    this.name = 'sub'
}

// Sub 会继承原型中定义个属性值
util.inherits(Sub, Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
// objSub.sayHello();
console.log(objSub);



