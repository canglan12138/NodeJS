var express = require('express')

var app = express()

//公开目录
app.use('/public',express.static('./public'))

app.get('/',(req,res) => {
  res.send('hello,nodemon')
})
app.get('/about',(req,res) => {
  res.send('hello,你好')
})

app.listen(3000,() => {
  console.log('app is running');
})