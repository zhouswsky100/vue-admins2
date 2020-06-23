import Vue from 'vue'
import store from './store'
import ElementUI from 'element-ui'
import './theme/index.css'
import './assets/css/font-awesome.min.css'
import './assets/css/style.css'
import router from './router'
import Config from './config'
import rkcommon from './common/common.js' // global css
import util from './common/util.js'
import App from './App.vue'
import ECharts from 'vue-echarts'
var echarts = require('echarts');
import 'echarts/lib/chart/line'
Vue.prototype.$Config = Config
Vue.prototype.$Func = Function
Vue.use(rkcommon)
Vue.use(util)
Vue.use(ElementUI)
Vue.use(echarts)
Vue.component('chart', ECharts)
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title?to.meta.title+'-'+Config.siteName:Config.siteName;

  // if (!sessionStorage.access_token && to.path != '/login') {
  //   next({path: '/login'});
  // } else {
  //   next();
  // }
  next();
});
router.afterEach(transition => {

});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
