var http = require("http")

function onRequest(request, response){
	// console.log("接收到请求, 请求数据:", request)
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
}

console.log("运行服务端, 地址：127.0.0.1:8888")
http.createServer(onRequest).listen(8888);