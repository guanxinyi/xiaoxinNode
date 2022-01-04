/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2022-01-04 15:03:45
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2022-01-04 15:07:03
 * @FilePath: /xiaoxinNode/dao/dbServe.js
 */

var dbModel = require('../model/dbModel')
var User = dbModel.model('User')

exports.findUser = function (res) {
  User.find(function (err, val) {
    if (err) {
      console.log('%c 🍔 err: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', err);
    } else {
      res.send(val)
    }
  })
}
