//1.使用 require 方法加载 fs 文件模块
var fs = require('fs')
//2.读取文件
// 第一个参数 路径
// 第二个参数 回调函数
/*
*    成功
*       data 数据
*       error null
*    失败
*       data undefined
*       error 错误对象
* */

//data 是16进制数据
//通过 toString 方法转化成字符串
fs.readFile('./text.txt',(error,data) => {
  // console.log(data);
  // console.log('error:' + error);
  if (error) {
    console.log('读取文件失败');
    console.log(error);
  }else {
    console.log('读取文件成功');
    console.log(data.toString());
  }
})