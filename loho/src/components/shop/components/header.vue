<template>
	<div class = "header">
		<a href="##" @click="handleBack()"><i class = "iconfont">&#xe64b;</i></a>
		<span>查找体验店</span>
		<routerLink to = "/cart">
			<a href="##"><i class = "iconfont">&#xe600;</i></a>
		</routerLink>
		<a href="##"><i class = "iconfont" @click="handeleClickVip()" :class = "this.flag == true ? 'pink' : ''">&#xe606;</i></a>
		<div class = "vip" v-show="flag">
			<ul>
				<li>
					<a href="##">
						<i class = "iconfont">&#xe629;</i>
						<span class = "vip_v">会员中心</span>
					</a>
				</li>
				<li>
					<a href="##">
						<i class = "iconfont">&#xe6d3;</i>
						<span class = "vip_v">首页</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			flag : false
		}
	},
	methods: {
		handleBack(){
			this.$router.back();
		},
		handeleClickVip(){
			this.flag = !this.flag
			
		}
	}
}
</script>

<style lang="scss" scoped>
	.header{
		width:100%;
		height:1.2rem;
		background:#fff;
		display:flex;
		justify-content: space-between;
		align-items: center;
		padding:0 .4rem;
		border-bottom:2px solid #f2f2f2;
		position:fixed;
		z-index:5;
		top:0;
		left:0;
		.pink{
			color:#e8343b;
		}
		span{
			font-size:.3rem;
			font-weight:600;
			margin-left:1.3rem;
		}
		.iconfont{
			font-size:.55rem;
			.pink{
				color:#e8343b
			}
		}
		.vip{
			wdith:3rem;
			height:1.6rem;
			position: absolute;
			top:1.3rem;
			right:.2rem;
			background:#fff;
			ul{
				width:100%;height:100%;
				border:1px solid #f2f2f2;
				li{
					width:3rem;
					height:.8rem;
					display: flex;
					text-align: center;
					line-height:.8rem;
					justify-content: space-between;
					padding-left:.4rem;
					.vip_v{
						float:left;
						margin: 0;
						font-weight:100
					}
					.iconfont{
						float: left;
						font-weight:100;
						font-size:.37rem;
						margin-right:.3rem
					}
				}
			}
		}
	}
</style>
