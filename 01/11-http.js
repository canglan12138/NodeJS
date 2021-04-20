var http = require('http')
var server = http.createServer()
server.on('request',(req,res) => {
  /*
  * 服务器默认发送的数据是 utf8 编码的内容
  * 但是浏览器会按照当前操作系统的默认编码去解析
  * 中文操作系统默认 gbk
  * 解决方法：
  * 正确告诉浏览器发送的内容是使用什么编码的
  * http 协议中，Content - type 是用来告诉对方我给你发送的数据内容是什么类型
  * */
  // res.setHeader('Content-Type','text/plain;charset=utf-8')
  // res.end('hello world 世界');
  var url = req.url
  if(url === '/plain') {
    //text/plain 普通文本
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.end('hello world 世界');
  }else if(url === '/html') {
    //text/html html文本
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end('<p>hello world<a href="">点我</a></p>')
  }
})
server.listen(5000,() => {
  console.log('Server is running...');
})
