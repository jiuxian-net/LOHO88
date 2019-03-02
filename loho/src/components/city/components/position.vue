<template>
	<div class="position">
		<div class = "current_city">
			<span><i class = "iconfont">&#xe615;</i>
				当前城市：北京市
			</span>
			<span><a href="##">
					<i class="iconfont">&#xe64c;
					</i></a></span>
		</div>
		<div class = "hot_city">
			<p>热门城市</p>
			<div class = "hot_citys">
				<ul>
					<li v-for = "(item,index) in hot"><a href="##">{{item.cityName}}</a></li>
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
				hot:state=>state.city.hot,
			})
		}
	}
</script>

<style lang="scss" scoped>
	.position {
		width: 100%;
		margin: .2rem 0;
		.current_city{
			wdith:100%;
			height: .86rem;
			background: #fff;
			padding: .1rem .2rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			span {
				font-size: .28rem;
			
				a {
					color: #000;
			
					i {
						font-weight: 600;
					}
				}
			
				span {
					color: #e8343b;
				}
			}
		}
		.hot_city{
			width:100%;
			height:1.7rem;
			margin-top:.2rem;
			font-size:.26rem;
			p{
				height:.7rem;
				border-bottom:1px solid #f2f2f2;
				line-height:.7rem;
				padding-left:.2rem;
				background:#fff;
			}
			.hot_citys{
				width:100%;
				height:1rem;
				ul{
					display:flex;
					justify-content: space-between;
					width:100%;
					height:100%;
					background:#fff;
					li{
						width:25%;
						hieght:100%;
						a{
							display: inline-block;
							width:100%;
							height:100%;
							text-align: center;
							line-height:1rem;
						}
					}
				}
			}
		}
	}
</style>
