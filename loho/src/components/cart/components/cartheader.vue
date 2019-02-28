<template>
  <div class="cartheader">
    <mt-header title="购物车">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
     
      
      <mt-button class="iconfont list" slot="right">&#xe6a3;</mt-button>
    </mt-header>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
.cartheader {
  width: 100%;
  height: 1rem;
  background: #ffffff;
 
  
  .mint-header {
    font-size: 0.35rem;
    height: 1rem;
     background: #ffffff;
     color: #000000;
      box-shadow: 0 0 4px rgba(0,0,0,.4);
    .is-right{
      a{
         margin-right: .6rem;
         font-size: .5rem;
      }
     .list{
       margin-right: .3rem;
       font-size: .5rem;
     }
    }
  }
}
</style>