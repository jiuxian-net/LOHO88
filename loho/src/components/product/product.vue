<template>
  <div class="product">
    <Header-com/>
   <div class="wrapper">
      <ul class="content">
        <Banner-com/>
        <Info-com/>
       </ul>
    </div> 
  </div>
</template>
<script>
import Header from "./components/header";
import Banner from "./components/banner";
import Info from "./components/info"
import Vuex from "vuex"
export default {
  created(){
    this.handleProductGoodsData()
  },
  components: {
    "Header-com": Header,
    "Banner-com": Banner,
    "Info-com" : Info,
    
  },
  methods: {
    ...Vuex.mapActions({
      handleProductGoodsData : "product/handleProductGoodsData"
    })
  },
  
  
};
</script>
<style lang="scss" scoped>
.product{
    width: 100%;
    height: 100%;
    background: #f2f2f2;
    .wrapper{
        padding-top: 1.2rem;
        height: 100%;
        .content{
            padding: 0;
            border: none;
        }
        
    }
}
</style>