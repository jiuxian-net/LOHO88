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
import state from '../store/user/state'
import store from "../store/index"
import Preson from "../components/preson/preson"
import Xinxi from "../components/preson/components/xinxi"
import Mytuangou from "../components/preson/components/mytuangou"
import Shoucang from "../components/preson/components/shoucang"
import Yanguang from "../components/preson/components/yanguang"
import Dizhi from "../components/preson/components/dizhi"
import Password from "../components/preson/components/password"
Vue.use(Router)

const router =  new Router({
  routes: [
    
    {
      path:"/",
      redirect:"/home"
    },
    {
      path: '/home',
      name: 'home',
      component: (resolve)=>require(["@/components/home/home"],resolve),
      meta : {
        auth : true,
      }
    },
		{
			path:'/details',
      component : (resolve)=>require(["../components/details/details"],resolve),
      meta : {
        auth : true,
      }
		},
    {
      path: '/group',
      name: 'group',
      component: (resolve)=>require(["../components/group/group"],resolve),
      meta : {
        auth : true,
      }
    },
    {
      path: '/shop',
      name: 'shop',
      component: (resolve)=>require(["../components/shop/shop"],resolve),
      meta : {
        auth : true,
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: (resolve)=>require(["../components/cart/cart"],resolve),
      meta : {
        auth : true,
      }
    },
    {
      path: '/my',
      name: 'my',
      component:(resolve)=>require(["../components/my/my"],resolve),
      meta : {
        auth : false,
      }
    },
		{
			path : '/city',
			name : 'city',
      component : City,
      meta : {
        auth : true,
      }
		},
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta : {
        auth : true,
      }
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
      meta : {
        auth : true,
      }
    },
		{
			path: '/preson',
			name: 'preson',
      component: Preson,
      meta : {
        auth : true,
      }
		},
		{
			path: '/xinxi',
			name: 'xinxi',
      component: Xinxi,
      meta : {
        auth : true,
      }
		},
		{
			path: '/mytuangou',
			name: 'mytuangou',
      component: Mytuangou,
      meta : {
        auth : true,
      }
		},
		{
			path: '/shoucang',
			name: 'shoucang',
      component: Shoucang,
      meta : {
        auth : true,
      }
		},
		{
			path: '/yanguang',
			name: 'yanguang',
      component: Yanguang,
      meta : {
        auth : true,
      }
		},
		{
			path: '/dizhi',
			name: 'dizhi',
      component: Dizhi,
      meta : {
        auth : true,
      }
		},
		{
			path: '/password',
			name: 'password',
      component: Password,
      meta : {
        auth : true,
      }
		},
    {
      path:"**",
      component:(resolve)=>require(["../components/error"],resolve)
    }
  ]
})
console.log(router)
 router.beforeEach((to,from,next)=>{
   
   if(to.meta.auth){
     
     
     if(store.state.user.token){
       next()
     }
   }
 })


export default router;