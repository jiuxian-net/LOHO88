<template>
	<div class="cart-menu">
		<div class="cart-list">
			<ul class="cart-list-content">
				<li>
					<span>
						<input type="checkbox"><label>单品</label>
					</span>
					<span>￥299</span>
				</li>
				<li>

					<div> <img src="http://image.loho88.com/images/201711/G_1510598115410340254.jpg" alt=""></div>
					<div>
						<a>【超轻金属】LOHO儿童墨镜 绿色彩膜 防紫外线 LH6102-C2</a>
						<p>颜色：碳黑色（绿色彩膜)</p>
						<p><span>￥299</span> <span>x1</span></p>
					</div>
				</li>
				<li>
					<p>
						<i class="iconfont">&#xe77f;</i>
						<a href="">促销优惠</a>
					</p>

					<p><a href="">-</a><span>1</span><a href="">+</a></p>
				</li>
			</ul>
			<div class="cart-dele">
				<div>
					<label for="">
						<input type="checkbox"  checked="checked">
					</label>
					<a href="">删除选中</a>
				</div>
				<div><a href="">清空购物车</a></div>
			</div>
		</div>
		<div class="cart-sub">
			<p>合计(不含运费):<span>￥399</span></p>
			<button><div></div>结算<span>(1)</span></button>
		</div>
	</div>
</template>

<script>
	import Vuex from 'vuex';
	export default {
		created(){
			this.handleAddcart()
		},
		methods:{
			...Vuex.mapActions({
				handleAddcart : "cart/handleAddcart"
			})
		}
	}
</script>

<style lang="scss">
	@mixin flex($flex : flex, $content : space-between, $align : center, $inline : row) {
		display: $flex;
		justify-content: $content;
		align-items: $align;
		flex-direction: $inline;

	}

	.cart-menu {
		width: 100%;
		height: 8rem;
		padding: 0 .15rem;
		@include flex($inline: column) 
		.cart-list {
			width: 100%;
			height: 3.2rem;
			border: .01rem solid #ddd;
			background: #fff;
			margin: .15rem 0;

			.cart-list-content {
				width: 100%;
				height: 100%;

				>li {
					padding: 0 .15rem;
					@include flex();
				}

				li:nth-of-type(1) {
					width: 100%;
					height: .6rem;

					span {
						width: .82rem;
						height: .36rem;
						@include flex();

						input {
							margin: 0 0 .03rem 0;
						}
					}

					span:nth-of-type(2) {
						width: .68rem;
						color: red;
						font-size: .24rem;
						
					}
				}

				li:nth-of-type(2) {
					width: 100%;
					height: 1.74rem;
					border-top: 0.01rem dotted #ddd;
					border-bottom: 0.01rem dotted #ddd;
					padding-top: .2rem;
					@include flex($align: flex-start);

					>div:nth-of-type(1) {
						width: 1.8rem;
						border: .01rem solid #ddd;
						padding: .1rem;

						>img {
							width: 100%;
							height: 100%;

						}
					}

					div:nth-of-type(2) {
						width: 100%;
						padding: 0 .15rem;

						>a {
							display: block;
							line-height: .3rem;
							margin-bottom: .1rem;
							font-size: .26rem;
							color: #000;
							text-align: left;

						}

						>p {
							text-align: left;
							color: #aaa;
							line-height: .3rem;
							margin-bottom: .1rem;
						}

						>p {
							width: 100%;
							@include flex();

							span:nth-of-type(1) {
								color: #f80;
							}
						}
					}
				}

				li:nth-of-type(3) {
					height: .8rem;
					width: 100%;
					padding: 0 .15rem;

					p {
						>.iconfont {
							display: block;
							font-size: .32rem;
							width: .48rem;
							// margin-right: .2rem;
							height: .48rem;
							border: .01rem solid #ccc;
							border-radius: 10%;
							line-height: .40rem;
							text-align: center;
							background: linear-gradient(#fff 0, #f7f7f7 100%);
							color: #666;
						}

						a,
						span {
							width: 1.44rem;
							font-size: .26rem;
							line-height: .48rem;
							@extend .iconfont;
						}

					}

					p:nth-of-type(1) {
						width: 2.1rem;
						@include flex();


					}

					p:nth-of-type(2) {
						width: 1.44rem;
						text-align: right;
						@include flex();

						a,
						span {
							width: .48rem;
						}

						span {
							background: #fff;
							border-right: 0;
							border-left: 0;
						}

						// 					a,span{
						// 						display: block;
						// 						font-size: .32rem;
						// 						width: .48rem;
						// 						height: .48rem;
						// 						border: .01rem solid #ccc;
						// 						border-radius: 10%;
						// 						line-height: .40rem;
						// 						text-align: center;
						// 						background :linear-gradient(#fff 0,#f7f7f7 100%);
						// 						// background: rgba(255,255,255,0.4);
						// 						color: #666;
						// 					}
					}
				}
			}

			.cart-dele {
				width: 100%;
				height: .8rem;
				border: .01rem solid #ddd;
				border-radius:.1rem; 
				@include flex();
				background: #fff;
				line-height: .8rem;
				margin-top:.15rem;
				padding: 0 .15rem;
				div:nth-of-type(1){
					width: 2rem;
					@include flex();
					label{
						width: .5rem;
						height: 100%;
						display: block;
						border-right:.01rem solid #ddd; 
						text-align: left;
						line-height: .8rem;
					}
					a{
						color:blue;
					}
					
				}
				div:nth-of-type(2){
					a{
						color: red;
					}
					
				}
				
			}

		}
		.cart-sub {
			width: 100%;
			height: .8rem;
			@include flex();
			background: #fff;
			line-height: .8rem;
			// position: relative;
			font-size: .28rem;
			p{
				span{
					color: red;
					font-size: .32rem;
				}	
			}
			
			button{
				width:2rem;
				height: .92rem;
				background: #aaa;	
				color:#fff;
				font-size: .32rem;
				// box-shadow:-.1rem .1rem -.1rem .1rem  rgba(0,0,0,.3) ; 
			}
		}


	}
</style>
