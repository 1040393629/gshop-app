import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home/Home'
import Order from '../pages/Order/Order'
import Personal from '../pages/Personal/Personal'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/login'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home,meta:{isShow:true} },
    { path: '/order', component: Order,meta:{isShow:true} },
    { path: '/personal', component: Personal,meta:{isShow:true} },
    { path: '/search', component: Search,meta:{isShow:true} },
    { path: '/login', component: Login },
  ]
})
