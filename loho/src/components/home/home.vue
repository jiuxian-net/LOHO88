<template>
  <div id="home">
    <Header-com />
    <div class="homeWrapper wrapper" ref="homeWrapper">
      <div class="content">
        <Swiper-com/>
        <Category-com/>
        <Classify-com/>
        <Guesslike-com/>
        <Footerlink-com/>
      </div>
    </div>
     <Footer-com/>
  </div>
</template>

<script>
import Vuex from "vuex";
import Header from "../common/header"
import Swiper from "./components/banner"
import Category from "./components/category"
import Classify from "./components/classify"
import Guesslike from "./components/guesslike"
import Footerlink from "./components/footerlink"
import Footer from ".././common/footer"
import BSscroll from "better-scroll"

export default {
  components: {
    "Header-com" : Header,
    "Swiper-com" : Swiper,
    "Category-com" : Category,
    "Classify-com" : Classify,
    "Guesslike-com" : Guesslike,
    "Footerlink-com" : Footerlink,
    "Footer-com" : Footer,
  },
  created () {
    this.handleHomeData();
		
  },
  methods: {
    ...Vuex.mapActions({
      handleHomeData:"home/handleHomeData"
    })
  },
  mounted() {
        if(!this.scroll){
            this.scroll = new BSscroll(this.$refs.homeWrapper,{
              tap:true,
              click:true,
              scrollbar:true,
            })
            
        }
    },
}
</script>


<style lang="scss" scoped>
  #home,#home>.homeWrapper{
    width: 100%;
    height: 100%;
    .content{
      padding-top: 1.2rem;
      padding-bottom: 1.08rem;
      background: #f2f2f2; 
      
      
    }
  }
</style>
