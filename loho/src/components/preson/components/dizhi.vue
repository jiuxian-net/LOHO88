<template>
	<div class = "xinxi">
		
		<div class = "header">
			<i class = "iconfont" @click="handleBack()">&#xe64b;</i>
			<span>收货地址</span>
		</div>
		<div class = "content">
			<div class = "neirong">
				<p>您还没有相关收货地址</p>
			</div>
		</div>
		<div class = "footer">
			<a href="##">添加新地址</a>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		handleBack(){
			this.$router.back()
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
			}
		}
		.footer{
			height:1rem;
			width:100%;
			background:#ec1c24;
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
