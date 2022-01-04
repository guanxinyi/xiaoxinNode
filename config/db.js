/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2022-01-04 14:52:12
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2022-01-04 15:23:15
 * @FilePath: /xiaoxinNode/config/db.js
 */
var mongoose = require('mongoose');

var db = mongoose.createConnection('mongodb://localhost:27017/guanxiaoxin')
db.on('error', console.error.bind(console, 'connect error:'))
db.once('open', () => {
  console.log('success')
})

module.exports = db
