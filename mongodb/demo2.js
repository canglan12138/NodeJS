var mongoose = require('mongoose')
var Schema = mongoose.Schema

//1.连接数据库
mongoose.connect('mongodb://localhost:27017/itcast', {useNewUrlParser: true, useUnifiedTopology: true});

//2.设计集合结构(表结构)
var userSchema = new Schema({
  username: {
    type: String,
    reuired: true //约束，不能为空
  },
  passworld: {
    type:String,
    required: true
  },
  email: {
    type: String
  }
})

//3.将集合结构发布为模型
/*
* mongoose.model 方法 用来将一个架构发布为 model
* 第一个参数：大写名词单数，mongoose 会自动转成 小写复数 的集合名称
* 第二个参数：架构 Schema
* 返回值：模型构造函数
* */
const User = mongoose.model('User', userSchema)

//4.使用构造函数操作 users 集合中的数据
//---------------增加数据--------------------
// var admin = new User({
//   username: 'zs',
//   passworld: '123456',
//   email: '123.com'
// })
//
// //持久化
// admin.save((err,res) => {
//   if (err) {
//     console.log('保存失败');
//   } else{
//     console.log('保存成功');
//     console.log(res);
//   }
// })

//---------------查询数据--------------------
// 查询所有
User.find((err,res) => {
  if (err) {
    console.log('查询失败');
  }else {
    console.log(res);
  }
})

//按条件查询
// User.find({
//   username: 'zs'
// },(err,res) => {
//   if (err) {
//     console.log('查询失败');
//   }else {
//     console.log(res);
//   }
// })

//mongoose 所有的 API 都支持 Promise
// User.findOne({
//   username: 'mazi'
// }).then((user) => {
//   if (user) {
//     console.log('用户已存在');
//   } else {
//     return new User({
//       username: 'mazi',
//       passworld: '66666',
//       email: '333.com'
//     }).save()
//   }
// }).then((res) => {
//   if (res) {
//     return console.log('注册成功');
//   }
//   console.log('注册失败');
// })

//按条件查询单个
// User.findOne({
//   username: 'jack'
// },(err,res) => {
//   if (err) {
//     console.log('查询失败');
//   }else {
//     console.log(res);
//   }
// })

//---------------更新数据--------------------
//根据 id 更新一个
// User.findByIdAndUpdate('60434fd9713c7107b407320e',{
//   passworld: '1314'
// },(err,res) => {
//   if (err) {
//     console.log('更新失败');
//   }else {
//     console.log('更新成功');
//   }
// })

//根据条件更新一个
// User.findOneAndUpdate({
//   username: 'zs'
// },{
//   passworld: '555555'
// },(err,res) => {
//   if (err) {
//     console.log('更新失败');
//   }else {
//     console.log('更新成功');
//   }
// })

//---------------删除数据--------------------
//根据条件删除所有
// User.remove({
//   username: 'ls'
// },(err,res) => {
//   if (err) {
//     console.log('删除失败');
//   }else {
//     console.log('删除成功');
//   }
// })

//根据条件删除一个
// User.findOneAndRemove({
//   username: 'jack'
// },(err,res) => {
//   if (err) {
//     console.log('删除失败');
//   }else {
//     console.log('删除成功');
//   }
// })

//根据 id 删除一个
// User.findByIdAndRemove('6043507770dc2332b4a15877',(err,res) => {
//   if (err) {
//     console.log('删除失败');
//   }else {
//     console.log('删除成功');
//   }
// })


