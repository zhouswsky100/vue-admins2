let menu = {};

/**
 * 首页
 * @type {{name: string, path: string, icon: string}}
 */
// let userMenu = JSON.parse(sessionStorage.permission_list)

// for(let i =0;i<userMenu.length;i++){
//     menu[userMenu[i].name] = userMenu[i]
//     if(userMenu[i].childrens.length>0){
//        menu[userMenu[i].name]['children'] =  userMenu[i].childrens
//     }
// }

menu.home = {
  name: '首页',
  path: '/',
  icon: 'fa fa-tachometer',
};

/**
 * 分析
 * @type {{name: string, icon: string, children: {}}}
 */

menu.fenxi = {
    name: '分析',
    icon: 'fa fa-th',
    children: {}
  };

let fenxi = menu.fenxi.children;
fenxi.jieduan ={
    name: '三阶段分析',
    icon: 'fa fa-th',
    children:{}
}
fenxi.jiandu ={
  name: '专项监督',
  icon: 'fa fa-th',
  children:{}
}
fenxi.guanzhu ={
  name: '重点关注',
  icon: 'fa fa-th',
  children:{}
}
let fenxis =fenxi.jieduan.children;
let fenxi2 =fenxi.jiandu.children;
let fenxi3 =fenxi.guanzhu.children;
//三阶段分析
fenxis.ycaoan = {
  name: '预算草案',
  path: '/fenxi_ycaoan',
};
fenxis.zhixing = {
  name: '预算执行',
  path: '/fenxi_zhixing',
};
fenxis.caoan = {
    name: '决算草案',
    path: '/fenxi_jcaoan',
};
//专项监督
fenxi2.zfpj = {
  name: '政府投资项目',
  path: '/jiandu_zfpj',
};
fenxi2.sjas = {
  name: '审计发现问题',
  path: '/jiandu_sjas',
};
fenxi2.gymg = {
    name: '国有资产管理',
    path: '/jiandu_gymg',
};
//重点关注
fenxi3.yssr = {
  name: '预算收入',
  path: '/guanzhu_zfpj',
};
fenxi3.mszc = {
  name: '民生支出',
  path: '/guanzhu_mszc',
};
fenxi3.sgjf = {
    name: '三公经费',
    path: '/guanzhu_sgjf',
};
fenxi3.bmys = {
  name: '部门预算',
  path: '/guanzhu_bmys',
};

menu.yj = {
  name: '预警',
  path: '/yj',
  icon: 'fa fa-tachometer',
};

menu.fgzc = {
  name: '法规政策',
  path: '/fgzc',
  icon: 'fa fa-tachometer',
};

/**
 * 字体图标
 * @type {{name: string, icon: string, children: {}}}
 */
  menu.font_icon = {
    name: '字体图标',
    icon: 'fa fa-th',
    children: {}
  };
let icon = menu.font_icon.children;

icon.font_awesome = {
  name: 'FontAwesome 4.7',
  path: '/font_awesome',

};
icon.element_icon = {
  name: 'ElementIcon',
  path: '/element_icon',
};

/**
 * 内容管理
 * @type {{name: string, icon: string, children: {}}}
 */
// menu.content_manage = {
//   name: '内容管理',
//   icon: 'fa fa-file-text-o',
//   children: {}
// };

// let ContentManage = menu.content_manage.children;

// ContentManage.post = {
//   name: '文章管理',
//   path: '/post_manage',
// };

/**
 * 用户管理
 * @type {{name: string, icon: string, children: {}}}
 */
// menu.user_manage = {
//   name: '用户管理',
//   icon: 'fa fa-user-circle-o',
//   children: {}
// };
// let UserManage = menu.user_manage;

// UserManage.user = {
//   name: '用户列表',
//   path: '/user_manage',
// };


/**
 * 分类管理
 * @type {{name: string, icon: string, children: {}}}
 */
// menu.category_manage = {
//   name: '分类管理',
//   icon: 'fa fa-sitemap',
//   children: {}
// };
// let CategoryManage = menu.category_manage.children;

// CategoryManage.category = {
//   name: '分类列表',
//   path: '/category_manage',
// };



// menu.permission_manage = {
//   name: '权限管理',
//   icon: 'fa fa-qrcode',
//   children: {}
// };
// let PermissionManage = menu.permission_manage.children;

// PermissionManage.role = {
//   name: '角色管理',
//   path: '/role_manage',
// };

// PermissionManage.permission = {
//   name: '权限列表',
//   path: '/permission_list',
// };

export default menu;



console.log(menu)