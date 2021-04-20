var fs = require('fs')

//对 promise 进行封装
var pfileread = (filepath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath,'utf8',(err,data) => {
      if (err) {
        return reject(err)
      }
      resolve(data)
    })
  })
}

pfileread('./a.js')
    .then((res) => {
  console.log(res);
  return pfileread('./b.js')
}).then((res) => {
  console.log(res);
  return pfileread('./cs.js')
}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log('读取失败');
})
