<template>
	<div class = "xinxi">
		<div class = "header">
			<i class = "iconfont" @click="handleBack()">&#xe64b;</i>
			<span>修改密码</span>
		</div>
		<div class = "content">
			<div class = "input">
				<label>原密码</label>
				<input type="text" placeholder="请输入原登录密码">
			</div>
			<div class = "input">
				<label>新密码</label>
				<input type="text" placeholder="请输入6-20位数字丶字母或符号组合">
			</div>
			<div class = "input">
				<label>确认密码</label>
				<input type="text" placeholder="请输入6-20位数字丶字母或符号组合">
			</div>
		</div>
		<div class = "footer">
			<a href="##">提交</a>
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

