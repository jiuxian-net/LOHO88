<template>
	<div class = "xinxi">
		<div class = "header">
			<i class = "iconfont" @click="handleBack()">&#xe64b;</i>
			<span>会员信息</span>
		</div>
		<div class = "content">
			<div class = "input">
				<label>姓名</label>
				<input type="text" placeholder="请输入姓名">
			</div>
			<div class = "input">
				<label>手机</label>
				<input type="text" placeholder="15094869969">
			</div>
			<div class = "input">
				<label>性别</label>
				<input type="text" placeholder="保密">
			</div>
			<div class = "input">
				<label>QQ</label>
				<input type="text" placeholder="请输入QQ">
			</div>
			<div class = "input">
				<label>生日</label>
				<input type="text" placeholder="2019-03-05">
			</div>
		</div>
		<div class = "footer">
			<a href="##">保存领积分</a>
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
			background:#fff;
			margin-top:.2rem;
		}
		.input{
			width:100%;
			height:1.08rem;
			display: flex;
			align-items: center;
			padding-left:.3rem;
			label{
				width:20%;
				display: inline-block;
				font-size:.3rem;
				color:#2b2b2b;
			}
			input{
				border:none;
				height:100%;
				flex: 1;
				border-bottom:1px solid #f2f2f2;
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
