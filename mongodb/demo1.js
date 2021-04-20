//引包
const mongoose = require('mongoose');

//连接 MongonDB 数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

//设计数据库
//MongonDB 是动态的，非常灵活，在代码中设计数据库
//mongoose 设计编写过程非常简单
/*
* 表名：Cat
* 数据结构
* */
const Cat = mongoose.model('Cat', { name: String });

//实例化 Cat
const kitty = new Cat({ name: 'Zildjian' });

//持久化保存 kitty 实例
kitty.save().then(() => console.log('meow'));