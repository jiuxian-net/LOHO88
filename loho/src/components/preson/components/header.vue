<template>
	<div class = "header">
		<a href="##" @click="handleBack()"><i class = "iconfont">&#xe64b;</i></a>
		<span>会员中心</span>
		<div>
			<routerLink to = "/home">
				<a href="##"><i class = "iconfont">&#xe614;</i></a>
			</routerLink>
			<a href="##"><i class = "iconfont">&#xe643;</i></a>
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
		height:1rem;
		background:#fff;
		display:flex;
		justify-content: space-between;
		align-items: center;
		padding:0 .4rem;
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
			margin-left:.8rem;
		}
		.iconfont{
			font-size:.4rem;
			margin-left:.3rem;
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
