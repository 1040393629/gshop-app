import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home/Home'
import Order from '../pages/Order/Order'
import Personal from '../pages/Personal/Personal'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/login'
import Shop from '../pages/Shop/shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopRating from '../pages/Shop/ShopRating/ShopRating'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home,meta:{isShow:true} },
    { path: '/order', component: Order,meta:{isShow:true} },
    { path: '/personal', component: Personal,meta:{isShow:true} },
    { path: '/search', component: Search,meta:{isShow:true} },
    { path: '/login', component: Login },
    { path:'/shop',name:'shop',component:Shop,children:[
      {path:'/shop/goods',name:'goods',component:ShopGoods},
      {path:'/shop/rating',component:ShopRating},
      {path:'/shop/info',component:ShopInfo},
      {path: '', redirect: '/shop/goods'}
    ] }
  ]
})
