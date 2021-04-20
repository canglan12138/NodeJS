var http = require('http')
var fs = require('fs')

var server = http.createServer()
server.on('request',(req,res) => {
  var url = req.url

  if(url === '/') {
    fs.readFile('./resource/index.html',(err,data) => {
      if (err) {
        res.setHeader('Content-type','text/plain;charset=utf-8')
        return res.end('文件读取失败')
      }
      res.end(data)
    })
  }else if(url === '/picture') {
    //url:统一资源定位符
    fs.readFile('./resource/10周年.png',(err,data) => {
      if (err) {
        res.setHeader('Content-type','text/plain;charset=utf-8')
        return res.end('图片读取失败')
      }
        //图片不需要指定编码，编码一般指字符编码
        res.setHeader('Content-type','image/png')
        res.end(data)
    })
  }else if (url === '/txt') {
    fs.readFile('./resource/hello.txt',(err,data) => {
      if (err) {
        res.setHeader('Content','text/plain;charset=utf-8')
        return res.end('txt文件读取失败')
      }
        res.setHeader('Content-type','text/plain;charset=utf-8')
        res.end(data)
    })
  }
})

server.listen(5000,() => {
  console.log('Server is running...');
})
