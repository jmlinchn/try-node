var fs = require('fs')

//fs.writeFile(file, data[, options], callback)
console.log("准备写入文件")
fs.writeFile('output.txt', '通过 fs.writeFile 写出文件', function (err) {
    if (err) {
        return console.log(err)
    }
    console.log("数据写出成功")

    console.log("--------我是分割线-------------")
    console.log("读取写入的数据！");
    fs.readFile('output.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("异步读取文件数据: " + data.toString());
    });
})