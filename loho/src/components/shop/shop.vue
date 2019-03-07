<template>
  <div class = "shop">
		<Header-com/>
		<div class = "wrapper shopWrapper" ref= "shopWrapper">
			<div class = "content">
				<Selectcard-com/>
			</div>
		</div>
		
  </div>
</template>

<script>
	import Vuex from "vuex";
	import BScroll from "better-scroll";
	import Header from "./components/header";
	import Selectcard from "./components/selectcard"
export default {
	created(){
			let {cityId}=this.$route.query;
			
			this.handleCity(cityId);
			console.log(cityId)
			
		},
	components:{
		"Header-com" : Header,
		"Selectcard-com" : Selectcard
	},
	
	methods: {
	  ...Vuex.mapActions({
			//handleShopData:"shop/handleShopData",
			handleCity:"shop/handleCity"
	  })
	},
	mounted(){
		if(!this.scroll){
			this.scroll = new BScroll(this.$refs.shopWrapper,{
				tap:true,
				click:true,
				scrollbar:true,
			})
		}
		console.log(this.scroll)
	}
}
</script>


<style lang="scss" scoped>
	.shop{
		background:#f2f2f2;
		width:100%;
		height:100%;
		padding-top:.7rem;
		.shopWrapper{
			width:100%;
			height:100%;
			
		}
	}
</style>