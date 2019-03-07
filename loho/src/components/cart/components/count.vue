<template>
	<div class="cart-sub">
		<p>合计(不含运费):<span> ￥{{lenting.pirce}}</span></p>
		<button @click="shoping()" :class="show?'color-two' :''" ><div></div>结算(<span>{{lenting.count}}</span>)</button>
	</div>
</template>

<script>
	import Vuex from 'vuex';
	export default{
		computed:{
			...Vuex.mapGetters({
				lenting : "cart/lenting"
			}),
			...Vuex.mapState({
				show : state =>state.cart.show,
				
			})
		},
		methods:{
			...Vuex.mapActions({
				shoping:"cart/shoping"
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
	.cart-sub {
		width: 100%;
		height: .8rem;
		@include flex();
		background: #fff;
		line-height: .8rem;
		position: fixed;
		bottom: 0;
		left: 0;
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
		.color-two{
			background: red;	
		}
	}
	
</style>
