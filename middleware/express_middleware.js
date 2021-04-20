var express = require('express')
var fs = require('fs')

var app = express()

/*
* 当请求进来，会从第一个中间件开始进行匹配
*     如果匹配，则进来
*         如果请求在进入中间件之后，没有调用 next()，则请求会停在当前中间件中，不会进入下一个中间件
*         如果调用了 next()，则会向后继续找第一个匹配的中间件
*     如果不匹配，则继续去匹配判断下一个中间件
* */

//不关心请求路径和请求方法的中间件
/*
* 中间件本身是一个方法，该方法接收 3 个参数
* Request 请求对象
* Response 响应对象
* next 下一个中间件
* */

// app.use((req,res,next) => {
//   console.log('1');
//   next()
// })
//
// app.use((req,res,next) => {
//   console.log('2');
//   next()
// })
//
// app.use((req,res,next) => {
//   console.log('3');
//   res.send('666')
//   next()
// })

//-------------------------------------------------

// app.use((req,res,next) => {
//   console.log('1');
//   next()
// })
//
// //以 /XXX 开头的中间件
// app.use('/a',(req,res,next) => {
//   console.log(req.url);
// })
//
// app.use('/b',(req,res,next) => {
//   console.log(req.url);
// })

//-----------------------------------------------------

/*
* 严格匹配请求方法和请求路径的中间件
* app.get
* app.post
* */

// app.get('/',(req,res,next) => {
//   console.log('/');
// })
//
// app.get('/a',(req,res,next) => {
//   console.log('/a');
// })

app.get('/a',(req,res,next) => {
  fs.readFile('./hjfgjgsf',(err,data) => {
    if (err) {
      // return res.status(500).send('err')
      //当调用 next() 的时候，如果传递了参数，则直接往后找带有 4 个参数的应用程序级别的中间件
      next(err)
    }
  })
})

//配置错误处理中间件
app.use((err,req,res,next) => {
  res.status(500).send(err.message)
})

app.listen(3000,() => {
  console.log('running');
})