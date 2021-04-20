var http = require('http')
var fs = require('fs')
var template = require('art-template')

var server = http.createServer()
server.on('request',(req,res) => {
  var wwwDir = 'F:/www'
  //读取模板文件
  fs.readFile('./template.html',(err,data) => {
    if (err) {
      return res.end('404 not found')
    }
    //读取目录
    fs.readdir(wwwDir,(err,files) => {
      if (err) {
        return res.end("Can Not Found Dir")
      }
      //模板文件转换成字符串
      data = data.toString()
      //将目录替换到模板中
      var htmlStr = template.render(data,{
        files: files
      })
      //响应模板文件
      res.end(htmlStr)
    })
  })
})

server.listen(3000,() => {
  console.log('server is running');
})