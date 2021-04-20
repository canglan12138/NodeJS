var http = require('http')
var Server = http.createServer()
Server.on('request',(request,response) => {
  console.log('收到请求了，请求路径是：' + request.url);
  switch (request.url) {
    case '/':
      response.end('index');
      break;
    case '/login':
      response.end('login');
      break;
    case '/apple':
      var products = [
        {
          name: 'apple',
          price: 888
        },
        {
          name: 'apple',
          price: 888
        },
        {
          name: 'apple',
          price: 888
        },
      ]
        /*
        *相应内容只能是二进制数据或者字符串
        * 数字
        * 对象
        * 数组
        * 布尔值
        * 都不行
        * */
      response.end(JSON.stringify(products));//JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
      break;
    default:
      response.end('404');
  }

  // if (request.url == '/') {
  //   response.end('index');
  // }else if (request.url == '/login'){
  //   response.end('666');
  // }else if (request.url === '/apple') {
  //   var products = [
  //     {
  //       name: 'apple',
  //       price: 8888
  //     },
  //     {
  //       name: 'apple',
  //       price: 8888
  //     },
  //     {
  //       name: 'apple',
  //       price: 8888
  //     }
  //   ]
  //   response.end(JSON.stringify(products));
  // }else {
  //   response.end('404');
  // }
})
Server.listen(3000,() => {
  console.log('服务器启动成功了');
})
