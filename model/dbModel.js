/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2022-01-04 14:59:42
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2022-01-04 15:53:59
 * @FilePath: /xiaoxinNode/model/dbModel.js
 */

const { type } = require('express/lib/response');
var mongoose = require('mongoose')
var db = require('../config/db')
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: { type: String }, // 用户名
  psw: { type: String }, // 密码
  email: { type: String }, // email
  sex: { type: String, default: 'asexual' }, // sex
  birth: { type: Date }, // 用户名
  phone: { type: Number }, // 用户名
  explane: { type: String }, // 用户名
  imgUrl: { type: String, default: 'user.png' }, // 用户名
  time: { type: Date }, // 用户名
});


// 好友表
var FriendSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: 'User' }, // 用户名
  friendID: { type: Schema.Types.ObjectId, ref: 'User' }, // 用户名
  state: { type: String }, // 密码
  time: { type: Date }, // 用户名
});

// 一对一表
var MessageSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: 'User' }, // 用户名
  friendID: { type: Schema.Types.ObjectId, ref: 'User' }, // 用户名
  message: { type: String }, // 信息
  types: { type: String }, // 类型
  time: { type: Date }, // 用户名
  state: { type: Number }
});
// 群表
var GroupSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: 'User' }, // 用户名
  name: { type: String }, // 群名
  imgUrl: { type: String, default: 'group.png' },
  time: { type: Date }, // 用户名
  notice: { type: String }, // 类型
});
// 群成员表
var GroupUserSchema = new Schema({
  groupID: { type: Schema.Types.ObjectId, ref: 'Group' }, // 用户名
  userID: { type: Schema.Types.ObjectId, ref: 'User' }, // 用户名
  name: { type: String }, // 群名
  tip: { type: Number, default: 0 },
  time: { type: Date }, // 用户名
  shield: { type: Number }, // 是否屏蔽
});
// 群消息表
var GroupMsgSchema = new Schema({
  groupID: { type: Schema.Types.ObjectId, ref: 'Group' }, // 用户名
  userID: { type: Schema.Types.ObjectId, ref: 'User' }, // 用户名
  message: { type: String }, // 信息
  types: { type: String },
  time: { type: Date }
});

module.exports = db.model('User', UserSchema)
module.exports = db.model('Friend', FriendSchema)
module.exports = db.model('Message', MessageSchema)
module.exports = db.model('Group', GroupSchema)
module.exports = db.model('GroupUser', GroupUserSchema)
module.exports = db.model('GroupMsg', GroupMsgSchema)
