'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.con);
  router.get('/home', controller.home.index);
  router.get('/add', controller.home.add);
  router.post('/ifadd', controller.home.ifadd);
  router.get('/monitor', controller.home.monitor);
  router.get('/menuList', controller.menuList.list);
  router.get('/BOX', controller.menuList.BOX);
  router.get('/kaimen', controller.menuList.kaimen);
  router.get('/guanlian', controller.menuList.guanlian);
  router.get('/baojing', controller.menuList.baojing);
  router.get('/xiangqing', controller.menuList.xiangqing);
  router.get('/My', controller.menuList.My);
  router.get('/zhuce', controller.menuList.zhuce);
  router.get('/fotget', controller.menuList.fotget);
};
