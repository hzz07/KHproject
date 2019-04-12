// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/style/index.css'
import 'common/fonts/iconfont.css'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import fastClick from 'fastclick'
import _ from 'lodash'
Vue.prototype._ = _
Vue.config.productionTip = false
import api from './api' // 导入api接口

Vue.prototype.$api = api; // 将api挂载到vue的原型上

fastClick.attach(document.body)
/* eslint-disable no-new */
Vue.use(VueLazyLoad,{
  loading: require('common/image/default.png')
})
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
