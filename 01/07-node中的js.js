var os = require('os')
//获取当前cpu信息
// console.log(os.cpus());

//获取内存
console.log(os.totalmem());
//获取路径
var path = require('path')
console.log(path.extname('a/s/text.txt'));