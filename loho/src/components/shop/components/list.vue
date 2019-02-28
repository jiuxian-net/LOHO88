<template>
	<div class = "shop">
		<Beijing-com/>
		<div class = "shops" v-for = "(item,index) in stores">
			<div class = "shop_name">
				<a href="##">
					<span>{{item.catName}}</span>
					<i class= "iconfont">&#xe64a;</i>
				</a>
			</div>
			<div class = "shop_content">
				<div class = "km">
					<i class = "iconfont">&#xe612;</i>
					<span>17.76km</span>
				</div>
				<div class = "shop_img">
					<img :src="'http://image.loho88.com/'+item.store_image">
				</div>
				<div class = "shop_site">
					地址：{{item.direction}}
				</div>
				<div class = "shop_call">
					<a href="##" class = "yan">免费预约直营店验光</a>
					<a href="##" class = "iconfont">&#xe616;</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Beijing from "./beijing";
	import Vuex from "vuex";
	export default{
		computed:{
			...Vuex.mapState({
				stores:state=>state.shop.stores,
			})
		},
		components:{
			"Beijing-com" : Beijing
		}
	}
</script>

<style lang="scss" scoped>
	.shops{
		width:100%;
		background:#fff;
		.shop_name{
			width:100%;
			height:.86rem;
			padding:.1rem .2rem;
			background:#fff;
			a{
				display:inline-block;
				width:100%;
				height:100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size:.26rem;
				color:#000;
				span{
					font-weight:600;
				}
				i{
					color:#e8343b;
					font-weight:600;
				}
			}
		}
		.shop_content{
			width:100%;
			padding:.1rem .2rem;
			border-bottom:1px solid #f2f2f2;
			.km{
				width:100%;
				font-size:.25rem;
				display:flex;
				align-items:center;
				margin-bottom:.12rem;
				i{
					font-size:12px;
					margin-right:.1rem;
				}
			}
			.shop_img{
				width:100%;
				img{
					width:100%;
					height:100%;
					border-radius: 10px;
				}
			}
			.shop_site{
				width:100%;
				font-size:.25rem;
				margin-top:.2rem;
			}
			.shop_call{
				margin-top:.3rem;
				display:flex;
				justify-content: space-between;
				margin-bottom:.2rem;
				a{
					display:inline-block;
					width:50%;
					font-size:.28rem;
					height:.9rem;
					line-height:.9rem;
				}
				.yan{
					background:#e8343b;
					color:#fff;
					text-align:center;
					border-radius:10px;
				}
				.iconfont{
					background:#fff;
					text-align:center;
					color:#e8343b;
					font-size:.6rem;
				}
			}
		}
	}
</style>
