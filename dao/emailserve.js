/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2022-01-04 16:03:28
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2022-01-04 16:36:51
 * @FilePath: /xiaoxinNode/dao/emailserve.js
 */
// 引用发送邮件插件
var nodemailer = require('nodemailer');
// 引入证书
var credentials = require('../config/creadentials')

// 创建传输方式
var transporter = nodemailer.createTransport({
  service: 'qq',
  auth: {
    user: credentials.qq.user,
    pass: credentials.qq.pass
  }
})

exports.emailSignup = (email, res) => {
  // 发送信息
  let options = {
    from: '374976628@qq.com',
    to: email,
    subject: '感谢您在guanxiaoxin注册',
    heml: '<span>欢迎您的加入xqq</span>'
  }
  // 发送邮件
  transporter.sendMail(options, (err, mg) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      res.send('成功发送')
      console.log('成功发送')
    }
  })
}
