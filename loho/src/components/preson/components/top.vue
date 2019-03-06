<template>
	<div class="top">
		<div class = "url">
			<img src="http://img.loho88.com/images/loho-m/index_logo.png">
			<span class="top_name">{{user}}</span>
		</div>
		<div class = "order">
			<a href="##" v-for= "(item) in presons" :key="item.id">
				<i class= "iconfont" v-html = "item.iconfont"></i>
				<p>{{item.name}}</p>
			</a>
			<div class = "wire"></div>
		</div>
	
	</div>
</template>

<script>
import Vuex from "vuex"
	export default{
		computed: {
			...Vuex.mapState({
				user : state=>state.user.user,
			})
		},
		data(){
			return{
				presons:[
					{
						iconfont:"&#xe66a;",
						name:"待付款"
					},
					{
						iconfont:"&#xe60b;",
						name:"待收货"
					},
					{
						iconfont:"&#xe63c;",
						name:"全部评价"
					},
					{
						iconfont:"&#xe603;",
						name:"全部订单"
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top {
		width: 100%;

		.url {
			width: 100%;
			height: 2.97rem;
			background: url(http://img.loho88.com/images/loho-m/bg1.jpg) no-repeat;
			background-size: 100% 100%;
			padding: .3rem 0;
			text-align: center;

			img {
				display: block;
				margin: 0 auto;
				width: 22%;
				margin-bottom: .15rem;
			}

			.top_name {
				display: inline-block;
				color: #FFF;
				margin: 0 auto;
				padding: 4px 15px;
				background-color: rgba(0, 0, 0, .33);
				border-radius: 20px;
				font-size: .3rem;
				font-weight: inherit;
				font-family: 'Microsoft Yahei','helvetica','arial';
			}
		}
		.order{
			width:100%;
			height:1.56rem;
			display: flex;
			justify-content: space-around;
			text-align: center;
			background:#fff;
			position: relative;
			a{
				display: inline-block;
				wdith:25%;
				height:100%;
				padding:.28rem;
				p{
					margin-top:.15rem;
					font-size:.26rem;
				}
				i{
					font-size:.5rem;
					font-weight:600
				}
			}
			.wire{
				width:1px;
				height:.6rem;
				background:#f2f2f2;
				position:absolute;
				top:22px;
				left:188px;
			}
		}
	}
</style>
