// process：描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口
// 有以下的四种事件描述：
// 1.exit：当进程准备退出时触发
// 2.beforeExit：当 node 清空事件循环，并且没有其他安排时触发这个事件。
// 3.uncaughtException：当一个异常冒泡回到事件循环，触发这个事件。
// 4.Signal 事件：当进程接收到信号时就触发。
process.on('exit', function(code){

    // 下面的代码不会执行
    setTimeout(function(){
        console.log("改代码不会执行");
    }, 0);

    console.log("退出码为：" ,code)
});

console.log("程序执行结束");