import Vue from 'vue'
import Router from 'vue-router'
import Personal from './personal'

Vue.use(Router)
let RouteList = [
  {
    path: '/',
    component: resolve => require(['~/views/Layout/App.vue'], resolve),
    meta: {
      title: '首页',
      keepAlive: false,
    },
    children: [
      {
        path: '/',
        name: 'Dashboard',
        meta: {
          title: '首页',
          keepAlive: false
        },
        component: resolve => require(['~/views/Home/Index.vue'], resolve),
      },
      {
        path: '/yj',
        name: 'Yj',
        meta: {
          title: '预警',
          keepAlive: false
        },
        component: resolve => require(['~/views/yj/index.vue'], resolve),
      },
      {
        path: '/fgzc',
        name: 'Fgzc',
        meta: {
          title: '法规政策',
          keepAlive: false
        },
        component: resolve => require(['~/views/fgzc/index.vue'], resolve),
      },
      {
        path: '/fenxi_ycaoan',
        name: 'FenxiYcaoan',
        meta: {
          title: '预算草案',
          keepAlive: false
        },
        component: resolve => require(['~/views/fenxi/ycaoan/index.vue'], resolve),
      },
      {
        path: '/fenxi_zhixing',
        name: 'FenxiyZhixing',
        meta: {
          title: '预算执行',
          keepAlive: false
        },
        component: resolve => require(['~/views/fenxi/zhixing/index.vue'], resolve),
      },
      {
        path: '/fenxi_jcaoan',
        name: 'FenxiJcaoan',
        meta: {
          title: '决算草案',
          keepAlive: false
        },
        component: resolve => require(['~/views/fenxi/jcaoan/index.vue'], resolve),
      },
      {
        path: '/jiandu_zfpj',
        name: 'JianduZfpj',
        meta: {
          title: '政府投资项目',
          keepAlive: false
        },
        component: resolve => require(['~/views/fenxi/zfpj/index.vue'], resolve),
      },
      {
        path: '/jiandu_sjas',
        name: 'JianduSjas',
        meta: {
          title: '审计发现问题',
          keepAlive: false
        },
        component: resolve => require(['~/views/fenxi/sjas/index.vue'], resolve),
      },
      {
        path: '/jiandu_gymg',
        name: 'JianduGymg',
        meta: {
          title: '国有资产管理',
          keepAlive: false
        },
        component: resolve => require(['~/views/fenxi/gymg/index.vue'], resolve),
      },
      {
        path: '/guanzhu_zfpj',
        name: 'GuanzhuZfpj',
        meta: {
          title: '预算收入',
          keepAlive: false
        },
        component: resolve => require(['~/views/fenxi/zfpj/index.vue'], resolve),
      },
      {
        path: '/guanzhu_mszc',
        name: 'GuanzhuMszc',
        meta: {
          title: '民生支出',
          keepAlive: false
        },
        component: resolve => require(['~/views/fenxi/mszc/index.vue'], resolve),
      },
      {
        path: '/guanzhu_sgjf',
        name: 'GuanzhuSgjf',
        meta: {
          title: '三公经费',
          keepAlive: false
        },
        component: resolve => require(['~/views/fenxi/sgjf/index.vue'], resolve),
      },
      {
        path: '/guanzhu_bmys',
        name: 'GuanzhuBmys',
        meta: {
          title: '部门预算',
          keepAlive: false
        },
        component: resolve => require(['~/views/fenxi/bmys/index.vue'], resolve),
      },
      // {
      //   path: '/font_awesome',
      //   name: 'FontAwesome',
      //   meta: {
      //     title: 'FontAwesome 图标',
      //     keepAlive: false
      //   },
      //   component: resolve => require(['~/views/Icon/FontAwesome.vue'], resolve),
      // },
      // {
      //   path: '/element_icon',
      //   name: 'ElementIcon',
      //   meta: {
      //     title: 'Element 图标',
      //     keepAlive: false
      //   },
      //   component: resolve => require(['~/views/Icon/ElementIcon.vue'], resolve),
      // },
      {
        path: '/post_manage',
        name: 'PostManage',
        meta: {
          title: '系统文件管理',
          keepAlive: false
        },
        component: resolve => require(['~/views/contentManage/index.vue'], resolve),
      },
      {
        path: '/user_manage',
        name: 'UserManage',
        meta: {
          title: '用户列表',
          keepAlive: true
        },
        component: resolve => require(['~/views/UserManage/Index.vue'], resolve),
      },
      {
        path: '/category_manage',
        name: 'CategoryManage',
        meta: {
          title: '分类列表',
          keepAlive: true
        },
        component: resolve => require(['~/views/CategoryManage/Index.vue'], resolve),
      },
      {
        path: '/role_manage',
        name: 'RoleManage',
        meta: {
          title: '角色列表',
          keepAlive: true
        },
        component: resolve => require(['~/views/PermissionManage/Role/Role.vue'], resolve),
      },
      {
        path: '/permission_list',
        name: 'PermissionList',
        meta: {
          title: '权限列表',
          keepAlive: true
        },
        component: resolve => require(['~/views/PermissionManage/Permission/Index.vue'], resolve),
      },
      //个人中心，可能有修改密码，头像修改等路由
      Personal.index,
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '后台登录',
      keepAlive: false
    },
    components: {
      blank: resolve => require(['~/views/Login/Login.vue'], resolve),
    }
  },

]


RouteList[0].children.push({
  path: '/build_code',
  name: 'BuildCode',
  meta: {
    title: '构建代码',
    keepAlive: true
  },
  component: resolve => require(['~/views/DevelopmentTool/Build.vue'], resolve),
});

export default new Router({routes: RouteList})


