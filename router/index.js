/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2022-01-04 14:30:49
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2022-01-04 16:51:34
 * @FilePath: /xiaoxinNode/router/index.js
 */
var dbserve = require('../dao/dbServe')

var emailserve = require('../dao/emailserve')
module.exports = (app) => {
  app.get('/test', (req, res) => {
    dbserve.findUser(res)
    // res.send([{
    //   img: '../../static/2.png',
    //   tip: '1',
    //   name: '想吃流氓兔奶糖',
    //   text: '你不回我你就是渣男'
    // }, {
    //   img: '../../static/4.png',
    //   tip: '3'
    // }, {
    //   img: '../../static/5.png',
    //   name: '馒头春卷煎饼',
    //   text: '我没有'
    // }, {
    //   img: '../../static/6.png',
    //   text: '收到了饭就仨江东父老圣诞卡大家分开了的撒肌肤'
    // },
    // {
    //   img: '../../static/2.png',
    //   tip: '11',
    //   text: '事实上计算机技术阿手机卡升级撒上世界经济大三大四的对对对的撒撒撒问问'
    // },
    // {
    //   img: '../../static/4.png',
    //   tip: '11',
    //   text: '事实上计算机技术阿手机卡升级撒上世界经济大三大四的对对对的撒撒撒问问'
    // },
    // {
    //   img: '../../static/3.png',
    //   tip: '11',
    //   text: '事实上计算机技术阿手机卡升级撒上世界经济大三大四的对对对的撒撒撒问问'
    // },
    // {
    //   img: '../../static/1.png',
    //   tip: '11',
    //   text: '事实上计算机技术阿手机卡升级撒上世界经济大三大四的对对对的撒撒撒问问'
    // },
    // {
    //   img: '../../static/6.png',
    //   tip: '11',
    //   text: '事实上计算机技术阿手机卡升级撒上世界经济大三大四的对对对的撒撒撒问问'
    // },
    // {
    //   img: '../../static/3.png',
    //   tip: '11',
    //   text: '事实上计算机技术阿手机卡升级撒上世界经济大三大四的对对对的撒撒撒问问'
    // },
    // {
    //   img: '../../static/2.png',
    //   tip: '11',
    //   text: '事实上计算机技术阿手机卡升级撒上世界经济大三大四的对对对的撒撒撒问问'
    // },
    // {
    //   img: '../../static/1.png',
    //   tip: '11',
    //   text: '事实上计算机技术阿手机卡升级撒上世界经济大三大四的对对对的撒撒撒问问'
    // },
    // ])
  });
  // 邮箱测试
  app.post('/mail', (req, res) => {
    console.log('%c 🍶 req: ', 'font-size:20px;background-color: #465975;color:#fff;', req.body);
    let mail = req.body.email;
    emailserve.emailSignup(mail, res)
    // console.log(mail)
  })
}
