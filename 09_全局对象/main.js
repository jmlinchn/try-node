// 当前脚本文件全路径
console.log("filename = ", __filename)

// 当前脚本所在目录路径
console.log("dirname = ", __dirname);

// 设置定时器
function printHello() {
    console.log("Hello, world!");
}

// 设置定时器
var t = setTimeout(printHello, 2000);
console.log("定时器的返回值：", t);

// 清除定时器
clearTimeout(t)