<template>
	<div class = "content">
		<h2>活动已结束</h2>
		<div class = "GoodsList">
			<div class = "Goods" v-for="(item,index) in goods">
				<div class = "Goods_img">
					<a href="##">
						<img :src = "item.img">
					</a>
				</div>
				<div class = "Goods_name"><a href="##">{{item.name}}</a></div>
				<div class = "Goods_price">
					<span class = "left"><a href="##">优惠价:{{item.leftPrice}}</a></span>
					<span class = "right"><a href="##">{{item.rightPrice}}</a></span>
				</div>
				<div class = "Goods_purchase"><a href="##">点击下单购买</a></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				goods:[
					{
						img:"http://img2.loho88.com/images/201901/G_1548285230138972907.jpg",
						name:"价值1600元配镜代金券，仅售1299",
						leftPrice:"$1299",
						rightPrice:"$1600",
					},
					{
						img:"http://img2.loho88.com/images/201901/G_1548285321937497026.jpg",
						name:"价值800元配镜代金券，仅售699",
						leftPrice:"$699",
						rightPrice:"$800",
					},
					{
						img:"http://img2.loho88.com/images/201901/G_1548285399141384697.jpg",
						name:"价值700元配镜代金券，仅售599",
						leftPrice:"$599",
						rightPrice:"$700",
					},
					{
						img:"http://img2.loho88.com/images/201901/G_1548285472763763688.jpg",
						name:"价值500元配镜代金券，仅售429",
						leftPrice:"$429",
						rightPrice:"$500",
					},
					{
						img:"http://img2.loho88.com/images/201901/G_1548285546679365976.jpg",
						name:"价值400元配镜代金券，仅售349",
						leftPrice:"$349",
						rightPrice:"$400",
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		width:100%;
		h2{
			width:100%;
			text-align: center;
			margin-top:.1rem;
		};
		padding-top:.7rem;
		.GoodsList{
			width:100%;
			display:flex;
			justify-content: space-between;
			flex-wrap: wrap;
			padding:.2rem;
			padding-top:0;
			.Goods{
				width:48%;
				margin:.2rem 0;
				.Goods_img{
					width:100%;
					padding-bottom:.3rem;
					img{
						width:100%;
					}
				}
				.Goods_name{
					height:.6rem;
					wdith:100%;
					background:#eee;
					padding:0 .3rem;
					a{
						color:#000;
					}
				}
				.Goods_price{
					padding:.2rem .2rem;
					display:flex;
					justify-content: space-between;
					.left>a{
						font-weight:600;
						color:#ff0000
					}
					.right>a{
						color:#999;
						text-decoration: line-through;
					}
				}
				.Goods_purchase{
					width:100%;
					height:.4rem;
					background:#FFB700;
					text-align: center;
					line-height:.4rem;
					font-weight:600;
					a{
						color:#000;
					}
				}
			}
		}
	}
</style>
