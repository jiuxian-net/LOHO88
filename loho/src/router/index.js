import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Shop from "../components/shop/shop";
import Cart from "../components/cart/cart";
import My from "../components/my/my";
import Group from "../components/group/group"
import ErrorCom from "../components/error"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
		{
			path:'/details',
			component : (resolve)=>require(["../components/components/details"],resolve)
		},
    {
      path: '/group',
      name: 'group',
      component: Group
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path:"**",
      component:ErrorCom
    }
  ]
})
