'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async con() {
    await this.ctx.render('con',{
      bannerUrl:"./../public/images/banner.jpg"
    })
  }
  async index() {
    await this.ctx.render('home',{
     
    })
    
  }
  
  async ifadd() {
    var username=this.ctx.request.body.username;
    var password=this.ctx.request.body.password;
    if(username === "13292319321" && password === "abcd"){
      await this.ctx.redirect("/add")

  }else{
    await this.ctx.redirect("/home")
  }
  }
  async add(){
    await this.ctx.render("add.html")
    
  }
  async monitor() {
    const monname = this.ctx.request.query.monname;
    // var monname= this.ctx.queries.query.monname;
    await this.ctx.render('monitor',{
      
      monname:monname,
      homename:"MIKO",
      Endplace:"最后一次位置:杭州",
      monitorSafebox:"监听此保险箱"
    })
  }
}

module.exports = HomeController;
