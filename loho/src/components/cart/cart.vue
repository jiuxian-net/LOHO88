<template>
	<div class="cart" ref="cartWrapper">
		<div class="cart-content">
			<Cartheader-com />
			<Login-com @handleClick="handleClick()" />
			<keep-alive>
				<Component :is="cart"></Component>
			</keep-alive>
			
			<Loginmask-com />
		</div>
		<Count-com v-show="status"></Count-com>

	</div>
</template>

<script>
	import Vuex from 'vuex'
	import BScroll from "better-scroll";
	import Cartheader from "./components/cartheader"
	import Login from "./components/login"
	import Cartbody from "./components/cartbody"
	import Loginmask from "./components/loginmask"
	import List from "./components/list"
	import Count from "./components/count"
	export default {
		data() {
			return {
				bflag: false,
				cart: "Cartbody",
				status : false
			}
		},
		created(){
			this.handleAddcart();
			if(this.info.length != 0){
				this.cart = "List-com";
				this.status = !this.status
			}else{
				this.cart = "Cartbody-com";
			}
		},
		computed: {
			...Vuex.mapState({
				info: state => state.cart.info,
				show : state => state.cart.show,
			}),
			
		},
		components: {
			"Cartheader-com": Cartheader,
			"Login-com": Login,
			"Cartbody-com": Cartbody,
			"Loginmask-com": Loginmask,
			"List-com": List,
			"Count-com": Count
		},
		methods: {
			...Vuex.mapActions({
				handleAddcart: "cart/handleAddcart"
			}),
			handleClick() {
				this.bflag = !this.bflag;
			},
			flag(flag) {
				this.bflag = flag;
				console.log(this.bflag)
			},


		},
		mounted() {
			this.scroll = new BScroll(this.$refs.cartWrapper, {
				pullUpLoad: true,
				click: true,
				tag: true,

			});
		},
		
	}
</script>


<style scoped lang="scss">
	.cart {
		height: 100%;
		background: #f5f5f5;

		.cart-content {
			width: 100%;
			// height: 100%;
			// padding-bottom: 1rem;
		}
	}
</style>
