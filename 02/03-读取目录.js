var fs = require('fs')
fs.readdir('F:/www',(err,files) => {
  if (err) {
    return console.log('目录读取失败');
  }
  console.log(files); //目录存在数组里
})