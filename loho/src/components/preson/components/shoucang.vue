<template>
	<div class = "xinxi">
		<div class = "header">
			<i class = "iconfont" @click="handleBack()">&#xe64b;</i>
			<span>我的收藏</span>
		</div>
		<div class = "content">
			<div class = "neirong">
				<p>您还没有相关收藏</p>
				<p class = "tiao" @click="handleGoods()">去挑选商品</p>
			</div>
		</div>
		<div class = "footer">
			<a href="##">去购买</a>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		handleBack(){
			this.$router.back()
		},
		handleGoods(){
			this.$router.push("/home")
		}
	}
}
</script>

<style lang="scss" scoped>
	.xinxi{
		width:100%;
		height:100%;
		background:#f2f2f2;
		.header{
			width:100%;
			height:1rem;
			background:#fff;
			font-size:.4rem;
			padding-left:.3rem;
			display: flex;
			align-items: center;
			span{
				margin-left:2.3rem;
			}
		}
		.content{
			width:100%;
			height:100%;
			.neirong{
				width:100%;
				height:3rem;
				margin-top:4rem;
				text-align: center;
				font-size:.3rem;
				.tiao{
					height:.6rem;
					width:2.4rem;
					margin:1rem auto;
					background:#e84e40;
					line-height:.6rem;
					color:#fff;
					border-radius: 10px;
				}
			}
		}
		.footer{
			height:1rem;
			width:100%;
			background:#ccc;
			position: absolute;
			bottom:0;
			left:0;
			a{
				display: block;
				width:100%;
				height:100%;
				text-align: center;
				line-height:1rem;
				color:#fff;
				font-size:.34rem; 
			}
		}
	}
</style>

