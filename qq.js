/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2022-01-04 14:18:47
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2022-01-04 16:45:32
 * @FilePath: /xiaoxinNode/qq.js
 */
// 引入前端解析插件
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
// 自定义跨域中间件
var allowCors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', true);
  if (req.method == 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next();
  }
};
app.use(allowCors);//使用跨域中间件
app.use(bodyParser.json())// 解析

require('./router/index')(app)

// app.get('/', (req, res) => { res.send('gxy') })
// 404出错
app.use(function (req, res, next) {
  let err = new Error('NOT FOUND')
  err.status = 404;
  next(err)
})
// 错误处理
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.send(err.message);
})
app.listen(port, () => console.log(`is ${port}`))
