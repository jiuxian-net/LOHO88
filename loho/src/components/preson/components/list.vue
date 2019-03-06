<template>
	<div class = "list">
		<div class = "money">
			<div class = "money_left">
				<i class = "iconfont">&#xe667;</i>
				<div class = "yue">
					<p class = "xianjin">我的现金券</p>
					<p class = "jifen">积分余额：0</p>
				</div>
			</div>
			<div class = "money_right">
				<p class = "zhang"><span class = "ling ">0</span><span>张</span></p>
				<i class = "iconfont">&#xe735;</i>
			</div>
			
		</div>
		<div class = "lists">
			<div class = "data" v-for = "(item,index) in lists" :key="item.id" @click="handleRouter(index)">
				<div class = "data_left">
					<i class = "iconfont" v-html = "item.icon"></i>
					<span>{{item.name}}</span>
				</div>
				<i class = "iconfont">&#xe735;</i>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				lists:[
					{
						icon:"&#xe631;",
						name:"个人资料"
					},
					{
						icon:"&#xe631;",
						name:"我的团购"
					},
					{
						icon:"&#xe631;",
						name:"我的收藏"
					},
					{
						icon:"&#xe62e;",
						name:"我的验光单"
					},
					{
						icon:"&#xe63b;",
						name:"收货地址"
					},
					{
						icon:"&#xe679;",
						name:"密码管理"
					}
				]
			}
		},
		methods: {
			handleRouter(index){
				switch(index){
					case 0:
					this.$router.push("/xinxi");
					break;
					case 1:
					this.$router.push("./mytuangou");
					break;
					case 2:
					this.$router.push("./shoucang");
					break;
					case 3:
					this.$router.push("./yanguang");
					break;
					case 4:
					this.$router.push("./dizhi");
					break;
					case 5:
					this.$router.push("./password");
					break;
				}
			}
		},
		

	}
</script>

<style lang="scss" scoped>
	.list{
		width:100%;
		.money{
			width:100%;
			height:1.2rem;
			background:#fff;
			margin-top:.2rem;
			display: flex;
			justify-content: space-between;
			padding:0 .4rem;
			align-items: center;
			font-size:.28rem;
			.money_left{
				display: flex;
				align-items: center;
			}
			.money_right{
				display: flex;
				align-items: center;
			}
			.zhang{
				display: inline-block;
				font-size:.3rem;
			}
			.ling{
				color:#db2727;
				font-size:.4rem;
			}
			.xianjin{
				font-weight:600;
				font-size:.3rem;
			}
			i{
				font-size:.47rem;
			}
			.yue{
				margin-left:.2rem;
			}
			.jifen{
				color:#757575;
				margin-top:.1rem;
			}
		}
		.lists{
			width:100%;
			margin-top:.2rem;
			background:#fff;
			.data{
				width:100%;
				height:1rem;
				border-top:1px solid #f2f2f2;
				display: flex;
				padding:0 .4rem;
				justify-content: space-between;
				align-items: center;
				font-size:.28rem;
				.data_left{
					display: flex;
					align-items: center;
				}
				i{
					font-size:.47rem;
				}
				span{
					margin-left:.2rem;
				}
			}
		}
	}
</style>
