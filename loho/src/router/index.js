import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Shop from "@/components/home/home";
import Cart from "../components/cart/cart";
import My from "../components/my/my";
import Group from "../components/group/group"
import ErrorCom from "../components/error";
import Details from "../components/details/details";
import Product from "../components/product/product"
import Register from "../components/my/components/register"
import City from "../components/city/city"
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
      component: (resolve)=>require(["@/components/home/home"],resolve)
    },
		{
			path:'/details',
			component : (resolve)=>require(["../components/details/details"],resolve)
		},
    {
      path: '/group',
      name: 'group',
      component: (resolve)=>require(["../components/group/group"],resolve)
    },
    {
      path: '/shop',
      name: 'shop',
      component: (resolve)=>require(["../components/my/my"],resolve)
    },
    {
      path: '/cart',
      name: 'cart',
      component: (resolve)=>require(["../components/cart/cart"],resolve)
    },
    {
      path: '/my',
      name: 'my',
      component:(resolve)=>require(["../components/my/my"],resolve)
    },
		{
			path : '/city',
			name : 'city',
			component : City
		},
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path:"**",
      component:(resolve)=>require(["../components/error"],resolve)
    }
  ]
})
