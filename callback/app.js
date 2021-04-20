var fs= require('fs')

fs.readFile('./a.js','utf8',(err,data) => {
  if (err) {
    throw err
  }
  console.log(data);
  fs.readFile('./b.js','utf8',(err,data) => {
    if (err) {
      throw err
    }
    console.log(data);
    fs.readFile('./c.js','utf8',(err,data) => {
      if (err) {
        throw err
      }
      console.log(data);
    })
  })
})

