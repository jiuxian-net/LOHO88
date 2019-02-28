<template>
  <div class="cart">
    <Cartheader-com/>
    <Login-com/>
    <Cartbody-com/>
  </div>
</template>

<script>
import Cartheader from "./components/cartheader"
import Login from "./components/login"
import Cartbody from "./components/cartbody"
export default {
 components : {
   "Cartheader-com" : Cartheader,
   "Login-com" : Login,
   "Cartbody-com" : Cartbody,
 }
}
</script>


<style scoped lang="scss">
  .cart{
    height: 100%;
    background: #f5f5f5;
  }
</style>