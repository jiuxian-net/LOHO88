<template>
	<div class = "all_city">
		<p>全部城市</p>
		<ul>
			<li v-for = "(item,index) in letters"><a href="##">{{item}}</a></li>
		</ul>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		computed:{
			...Vuex.mapState({
				letters:state=>state.city.letters,
			})
		}
	}
</script>

<style style lang="scss" scoped>
	.all_city{
		width:100%;
		height:100%;
		margin-top:.2rem;
		font-size:.26rem;
		p{
			width:100%;
			height:.7rem;
			background:#fff;
			padding-left:.2rem;
			line-height:.7rem;
			border-bottom:1px solid #f2f2f2;
		}
		ul{
			width:100%;
			height:100%;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			li{
				height:1.2rem;
				width:33.1%;
				background:#fff;
				border-bottom:1px solid #f2f2f2;
				text-align:center;
				line-height:1.2rem;
			}
		}
	}
</style>
