var template = require('art-template')
var fs = require('fs')

fs.readFile('./tel.html',(err,data) => {
  if (err) {
    return console.log('读取文件失败');
  }
  data = data.toString()
  var res = template.render(data,{
    name: 'lg',
    hobbies: [
      '吃',
      '吃',
      '吃'
    ]
  })
  console.log(res);
})