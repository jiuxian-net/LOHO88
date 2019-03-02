<template>
	<div class = "city">
		<Header-com/>
		<div class = "wrapper shopWrapper" ref= "shopWrapper">
			<div class = "content">
				<Position-com/>
				<Allcity-com/>
				<Citys-com/>
			</div>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	import Header from "./components/header";
	import Position from "./components/position";
	import Allcity from "./components/allcity";
	import Citys from "./components/citys";
	import BScroll from "better-scroll";
	export default{
		components : {
			"Header-com" : Header,
			"Position-com" : Position,
			"Allcity-com" : Allcity,
			"Citys-com" : Citys
		},
		created(){
			this.handleCityData();
		},
		methods:{
			...Vuex.mapActions({
				handleCityData : "city/handleCityData"
			})
		},
		mounted(){
			if(!this.scroll){
				this.scroll = new BScroll(this.$refs.shopWrapper,{
					tap:true,
					click:true
				})
			}
			console.log(this.scroll)
		}
	}
</script>

<style>
	.city{
		width:100%;
		height:100%;
		background:#f2f2f2;
		padding-top:.7rem;
		
	}
	.shopWrapper{
		width:100%;
		height:100%;
		
	}
</style>
