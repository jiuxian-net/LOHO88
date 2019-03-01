<template>
	<div class = "header">
		<a href="##"><i class = "iconfont">&#xe64b;</i></a>
		<span>选择城市</span>
		<a href="##"><i class = "iconfont">&#xe600;</i></a>
		<a href="##"><i class = "iconfont">&#xe606;</i></a>
	</div>
</template>

<script>
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
		span{
			font-size:.3rem;
			font-weight:600;
			margin-left:1.3rem;
		}
		.iconfont{
			font-size:.55rem;
		}
	}
</style>
