var fs = require('fs')

/*
* 第一个参数 文件路径
* 第二个参数 文件内容
* 第三个参数 回调函数
* */

/*
*  成功
*     文件写入成功
*     error null
*  失败
*     文件写入失败
*     error 错误对象
* */
fs.writeFile('./你好.txt','666',(error) => {
  if (error) {
    console.log('文件写入失败');
    console.log(error);
  }else {
    console.log('文件写入成功');
  }
})