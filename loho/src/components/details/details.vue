<template>
	<div class="details">
		<Header-com></Header-com>
		<div  class="wrapper  detailswrapper " ref="detailsWrapper">
			<List-com :list="list"> </List-com>
			<a @click="pulltop()"  class="iconfont">&#xe610;</a>
		</div>
		
	</div>
</template>

<script>
	import BScroll from "better-scroll";
	import Vuex from "vuex";
	import Header from './components/header';
	// import NavBar from './components/navbar';
	import List from './components/listbetter';
	export default {
		data() {
			return {
				id:{}
			}
		},
		created() {
			//console.log(this.$route.query)
			let {tid,cid}=this.$route.query;
			console.log({tid,cid},this)
			this.handleDetails({tid,page:1})
			
		},
		components: {
			"Header-com": Header,

			"List-com": List
		},
		computed: {
			...Vuex.mapState({
				list: state => state.details.list,
				page: state => state.details.page,
			})
		},
		watch: {
			list(newval, oldval) {
				//重新计算content高度
				this.scroll.refresh();
				//数据加载完毕允许进行下次加载
				this.scroll.finishPullUp();
			}
		},
		methods: {
			...Vuex.mapActions({
				handleDetails: "details/handleDetails",
				
			}),
			pulltop(){
				this.$router.go(0);
			}
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.detailsWrapper,{
				pullUpLoad : true,
				click : true,
				tag : true
			});
			
			this.scroll.on('pullingUp',() => {
				let {tid,cid}=this.$route.query;
			if(this.page<=4){
				this.handleDetails({tid,page:this.page});
				
			}
			})

		}

	}
</script>

<style lang="scss">
	.details {
		width: 100%;
		height: 100%;
		
		background:#fff;
		z-index: 100;
		.detailswrapper{
			width: 100%;
			height: 100%;
			background:#fff;
			z-index: 100;
			.iconfont{
				position: fixed;
				bottom: .3rem;
				right: .3rem;
				display: block;
				width: 1rem;
				height: 1rem;
				border-radius:50%; 
				border: .01rem solid #ccc;
				z-index: 100;
				line-height: 1rem;
				text-align: center;
				font-size: .5rem;
			}
// 			overflow: hidden;
// 			position: relative;
		}
	}
</style>
