<template>
  <div class="product">
    <Header-com/>
   <div class="wrapper" ref="wrapper">
      <ul class="content">
        <Banner-com/>
        <Info-com/>
        <Select-com/>
        <List-com/>
       </ul>
    </div> 
    <Footer-com/>
  </div>
</template>
<script>
import Header from "./components/header";
import Banner from "./components/banner";
import Info from "./components/info"
import Vuex from "vuex"
import BScroll from "better-scroll"
import Select from "./components/select"
import List from "./components/list"
import Footer from "./components/footer"
export default {
  created(){
    let {gid} = this.$route.query;
		console.log(gid)
    this.handleProductGoodsData(gid)
    this.handleProductPeddleData(gid)
  },
  components: {
    "Header-com": Header,
    "Banner-com": Banner,
    "Info-com" : Info,
    "Select-com" : Select,
    "List-com" : List,
    "Footer-com" : Footer,
		
    
  },
	
  methods: {
    ...Vuex.mapActions({
      handleProductGoodsData : "product/handleProductGoodsData",
      handleProductPeddleData: "product/handleProductPeddleData"
    })
  },
  mounted() {
    if(!this.scroll){
      this.scroll = new BScroll(this.$refs.wrapper,{
        tap: true,
        click:true,
        scrollbar:true,
      })
    }
  },
  
};
</script>
<style lang="scss" scoped>
.product{
  padding-top:1.2rem; 
    width: 100%;
    height: 100%;
    background: #f2f2f2;
    .wrapper{
        padding-top: 1.2rem;
        height: 100%;
        padding-bottom: 1.2rem;
        .content{
            padding: 0;
            border: none;
        }
        
    }
}
</style>