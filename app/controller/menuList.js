'use strict';

const Controller = require('egg').Controller;

class MenuListController extends Controller {
  async list() {
    await this.ctx.render('menuList.html',{
     
    })
  }
  async BOX() {
    await this.ctx.render('BOX.html',{
      BOX1:'../public/images/boxClick.png',
      kaimen:'../public/images/lock.png',
      baojing:'../public/images/alarm.png',
      guanlian:'../public/images/user.png'

    })
  }
  async kaimen() {
    await this.ctx.render('kaimen.html',{
      list:[
        {bt:'有人移动保险箱',sj:'2分钟前',dz:'杭州'},
        {bt:'保险箱电量低于20%',sj:'1天前',dz:'广东'},
        {bt:'修改配置',sj:'1天前',dz:'杭州'},
        {bt:'保险箱电量低于20%',sj:'18天前',dz:'上海'},
      ],
      BOX1:'../public/images/box.png',
      kaimen:'../public/images/lockClick.png',
      baojing:'../public/images/alarm.png',
      guanlian:'../public/images/user.png'

    })
  }
  async guanlian() {
    await this.ctx.render('guanlian.html',{
      text:'保险箱将按照此顺序拨号，拖动可排序',
      list:[
        {phonenumber:18332570379,linkmanPic:"./../public/images/切图/ios/linkman@2x.png"},
        {phonenumber:13165120023,linkmanPic:"./../public/images/切图/ios/linkman@2x.png"},
        {phonenumber:17712516512,linkmanPic:"./../public/images/切图/ios/linkman@2x.png"},
      ],
      BOX1:'../public/images/box.png',
      kaimen:'../public/images/lock.png',
      baojing:'../public/images/alarm.png',
      guanlian:'../public/images/userClick.png'

    })
  }
  async baojing() {
    await this.ctx.render('baojing.html',{
      list:[
        {tp:'./../public/images/切图/ice.png',bt:'有人移动保险箱',sj:'2分钟前',dz:'杭州'},
        {tp:'./../public/images/切图/ice2.png',bt:'保险箱电量低于20%',sj:'25分钟前',dz:'广东'},
        {tp:'./../public/images/切图/ice3.png',bt:'修改配置',sj:'2天前',dz:'上海'},
        {tp:'./../public/images/切图/ice2.png',bt:'保险箱电量低于20%',sj:'18天前',dz:'上海'},
        {tp:'./../public/images/切图/ice.png',bt:'有人移动保险箱',sj:'2分钟前',dz:'杭州'},
        {tp:'./../public/images/切图/ice.png',bt:'有人移动保险箱',sj:'2分钟前',dz:'杭州'}
      ],
      BOX1:'../public/images/box.png',
      kaimen:'../public/images/lock.png',
      baojing:'../public/images/alarmClick.png',
      guanlian:'../public/images/user.png'
    })
  }
  async xiangqing() {
    await this.ctx.render('xiangqing.html',{
      safebox_name:"保险箱名称",
      brand:"品牌",
      details_num:"序列号",
      device_ip:"设备IP",
      firmware:"固件版本",
      connect:"连接状态",
      name_content:"MIKO保险箱",
      brand_content:"三星",
      num_content:"DFSSGGSDD",
      ip_content:"192. 168. 1. 1",
      ware_content:"V2.13512",
      cnt_content:"已连接",
      safeboxDetails:"保险箱详情",
    })
  }
  async My() {
    await this.ctx.render('My.html',{
     
    })
  }
  async fotget() {
    await this.ctx.render('fotget.html',{
      phonetext:"手机",
      phonetitle:"请输入手机号",
      codetext:"验证码",
      codetitle:"请输入验证码",
      getcode:"获取验证码",
      passwordtext:"重置密码",
      passwordtitle:"请输入新密码",
      register_text:"确定",
      registerText:"忘记密码"
    })
  }
  async zhuce() {
    await this.ctx.render('zhuce.html',{
      phonetext:"手机",
            phonetitle:"请输入手机号",
            codetext:"验证码",
            codetitle:"请输入验证码",
            getcode:"获取验证码",
            passwordtext:"密码",
            passwordtitle:"请输入密码",
            register_text:"注册",
            registerText:"注册"
    })
  }
}

module.exports = MenuListController;
