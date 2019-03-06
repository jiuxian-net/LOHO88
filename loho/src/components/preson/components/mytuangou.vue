<template>
	<div class = "xinxi">
		<div class = "header">
			<i class = "iconfont" @click="handleBack()">&#xe64b;</i>
			<span>我的团购</span>
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
	}
</style>
