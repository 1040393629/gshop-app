// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer'
import echarts from 'echarts'


import {Button,Popup} from 'mint-ui'


Vue.prototype.$echarts = echarts
Vue.component(Button.name,Button)
Vue.component(Popup.name, Popup)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
