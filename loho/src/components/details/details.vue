<template>
	<div class="detailswrapper" ref="detailsWrapper">

		<div class="details" ref="details">
			<NavBar-com @handleclick="handleclick"></NavBar-com>
			<List-com :list="list"> </List-com>
			<a @click="pulltop()"  class="iconfont">&#xe610;</a>
			<p v-text="flag?'正在加载更多中...' : '已经到底了！'" class="loading-wrapper  loading-bottom"></p>
		</div>
		<Header-com :tag="tag"></Header-com>
	</div>
</template>

<script>
	import BScroll from "better-scroll";
	import Vuex from "vuex";
	import Header from './components/header';
	import NavBar from './components/navbar';
	import List from './components/listbetter';
	export default {
		data() {
			return {
				id: {},
				tag: {},
				flag: false,
				show: false,//控制显示隐藏
			}
		},
		created() {

			this.tag = this.$route.query.tag;
// 			let {tid,cid} = this.$route.query;
// 			console.log({tid,cid}, this)
// 			this.handleDetails({tid,page: 1}) //params
			let {tid,cid} = this.$route.query;
			this.handleDetailspage({tid,page: 1})
		},
		components: {
			"Header-com": Header,
			"NavBar-com": NavBar,
			"List-com": List
		},
		computed: {
			...Vuex.mapState({
				list: state => state.details.list,
				page: state => state.details.page,
				url1 : state=>state.details.url1,
				url2 : state=>state.details.url2,
				
			})
		},
		watch: {
			list(newval, oldval) {
				//重新计算content高度
				this.scroll.refresh();
				this.flag = !this.flag;
				//数据加载完毕允许进行下次加载
				this.scroll.finishPullUp();

			}
		},
		methods: {
			...Vuex.mapActions({
				handleDetails: "details/handleDetails",
				handleDetailspage: "details/handleDetailspage"
			}),
			pulltop() {
				this.scroll.scrollTo(0, 0, 500);
// 				this.$refs.details.style = {
// 					
// 						"transition-duration": 5 +'ms',
// 						"transform": "translate0(0,0) scale(1) translateZ(0)",
// 						"transition-timing-function":"cubic-bezier(0,0,1,1)"
// 				}
			},
			//点击navBar重新渲染页面
			handleclick(data){
				console.log(data)
				console.log(this)
				switch(data.index){
					case  0:
					console.log(data.params)
						this.handleDetailspage(data.params)
						this.$router.go(0);
						break;
					case 1 :
						this.handleDetailspage(data.params)
						this.$router.go();
						break;
					case 2 : 
						this.handleDetailspage(data.params)
						this.$router.go();
						break;
					case 3 :
						break;
					default : break;
				}
				console.log(this.listpage1,this.listpage2)
			}
		},
		
		mounted() {
			this.scroll = new BScroll(this.$refs.detailsWrapper, {
				pullUpLoad: true,
				click: true,
				tag: true,

			});

			this.scroll.on('pullingUp', () => {
				if (this.scroll.y < -100) {
					console.log(this.scroll.y)
					this.show = !this.show
				}
				this.flag = !this.flag;
				let {
					tid,
					cid
				} = this.$route.query;
				if (this.page <= 4) {
// 					this.handleDetails({
// 						tid,
// 						page: this.page
// 					});
			let {tid,cid} = this.$route.query;
// 			if(tid == "82"){
// 				this.page=1;
// 			}
			this.handleDetailspage({tid,page: this.page})
				}
			})
			this.scroll.on("scrollEnd", () => {
				this.flag = !this.flag;

			})

		}

	}
</script>

<style lang="scss">
	.detailswrapper {
		width: 100%;
		height: 100%;
		background: #fff;
		z-index: 100;
		position: relative;

		.details {
			width: 100%;
			background: #fff;
			z-index: 100;
			padding-top:1.2rem; 
			// position: absolute;
			top:1rem;
			left: 0;
			// height: 100%;
			overflow: hidden;
			.loading-bottom {
				width: 100%;
				background: #f2f2f2;
				text-align: center;
				line-height: 1rem;
				font-size: .3rem;
				color: #333;
				// position: absolute;
			}

			.iconfont {
				position: fixed;
				bottom: .3rem;
				right: .3rem;
				display: block;
				width: 1rem;
				height: 1rem;
				border-radius: 50%;
				border: .01rem solid #ccc;
				z-index: 100;
				line-height: 1rem;
				text-align: center;
				font-size: .5rem;
			}
		}
	}
</style>
