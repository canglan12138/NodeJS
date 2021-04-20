/*
* Node 提供了一个核心模块：http
* http这个模块就是帮助创建服务器
* */

//1.加载 http 模块
var http = require('http')

//2.使用 http.createServer() 方法创建一个 Web 服务器
//  返回一个 Server 实例
var Server = http.createServer()

/*
* 3.服务器
* 接收请求
* 处理请求
* 响应
* */
/*
* 监听 request 请求事件
* 触发事件后，执行回调函数
* */
Server.on('request',() => {
  console.log('收到请求了');
})

/*
* 4.启动服务器
* 绑定端口号
* */
Server.listen(3000,() => {
  console.log('服务器启动成功了');
})
