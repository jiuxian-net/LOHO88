<template>
  <div class="cart">
    <Cartheader-com/>
    <Login-com @handleClick="handleClick"/>
    <Cartbody-com/>
    <Loginmask-com/>
  </div>
</template>

<script>
import Cartheader from "./components/cartheader"
import Login from "./components/login"
import Cartbody from "./components/cartbody"
import Loginmask from "./components/loginmask"
export default {
  data(){
    return{
      bflag : false,
    }
  },
 components : {
   "Cartheader-com" : Cartheader,
   "Login-com" : Login,
   "Cartbody-com" : Cartbody,
   "Loginmask-com" : Loginmask,
 },
 methods: {
   handleClick(){
     console.log(2)
     this.bflag = !this.bflag;
   },
   flag(flag){
     this.bflag = flag;
     console.log(this.bflag)
   }
   
 }
}
</script>


<style scoped lang="scss">
  .cart{
    height: 100%;
    background: #f5f5f5;
  }
</style>