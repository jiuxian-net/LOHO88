<template>
	<div class = "citys">
		<div class = "citys_A-city" v-for = "(item) in letters" :key="item.id">
			<p>{{item}}</p>
			<div class = "citys_city">
				<ul>
					<li v-for="(a) in list[item]" :key="a.id" @click="handleBtn(a.cityId)">{{a.cityName}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		computed:{
			...Vuex.mapState({
				list:state=>state.city.list,
				
			}),
			...Vuex.mapState({
				letters:state=>state.city.letters,
			})
		},
		methods: {
			handleBtn(cityId){
				console.log(cityId)
				if(cityId){
					this.$router.push({path:"/shop",query:{
						cityId:cityId
					}})
				}
			}
		},	

	}
</script>

<style lang="scss" scoped>
	.citys{
		width:100%;
		height:100%;
		.citys_A-city{
			width:100%;
			height:100%;
			p{
				width:100%;
				padding:0 .2rem;
				height:.6rem;
				line-height:.6rem;
				font-size:.3rem;
				font-weight:600;
			}
			.citys_city{
				width:100%;
				background:#fff;
				ul{
					width:100%;
					display: flex;
					flex-wrap:wrap;
					justify-content: start;
					li{
						height:1.2rem;
						width:33.33%;
						background:#fff;
						border-bottom:1px solid #f2f2f2;
						border-right:1px solid #f2f2f2;
						text-align:center;
						line-height:1.2rem;
						a{
							display: inline-block;
							width:100%;
							height:100%;
						}
					}
				}
			}
		}
	}
</style>
