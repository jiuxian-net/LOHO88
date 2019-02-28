<template>
	<div class = "map">
		<Swiper-com/>
	</div>
</template>

<script>
	import Swiper from "./swipe";
	export default {
		components:{
			"Swiper-com" : Swiper
		}
	}
</script>

<style lang="scss" scoped>
	.map{
		width:100%;
		height:550px;
		background:url("../../../assets/img/map.jpg") no-repeat;
		background-size:cover;
	}
</style>
