var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request',(req,res) => {
  var url = req.url
  var wwwDir = 'F:/www'
  var filePath = '/index.html'
  if (url !== '/') {
    filePath = url
  }
  fs.readFile(wwwDir + filePath,(err,data) => {
    if (err) {
      return res.end('404 not found')
    }
    res.end(data)
  })
})

server.listen(3000,() => {
  console.log('server is running');
})