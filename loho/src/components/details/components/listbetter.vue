<template>
	<div class="wrapper details-wrapper"  ref="detailsWrapper" >
		<ul class="content" >
			<NavBar-com></NavBar-com>
			<li v-for="(item) in list" class="content-list">
				<span v-if="item.isNew">NEW</span>
				<p><img :src="'http://image.loho88.com/'+item.img" alt=""></p>
				<p>{{item.title}}</p>
				<p><span>￥{{item.price}}</span><span>{{item.salesNum}}人已买</span></p>
			</li>
		</ul>
		<div v-if="true" class="loading-wrapper">已经到底部了</div>
	</div>
	
</template>
<script>
	import BScroll from 'better-scroll';
	import Vuex from 'vuex';
	import NavBar from './navbar';
	export default {
		props:["list"],
		components: {
			"NavBar-com": NavBar,
		},
// 		computed: {
// 			...Vuex.mapState({
// 				page: state => state.details.page,
// 			}),
// 
// 		},
		mounted() {
			this.$nextTick(() => {
				this.scroll = new BScroll(this.$refs.detailsWrapper, {
					scrollY: true,
					pulldown: true,
					pullup: true
				})
				
			})
		},
	}
</script>
<style lang="scss">
	.details-wrapper {
		width: 100%;
		min-height: 6.67rem;
		overflow: hidden;
		position: absolute;
		padding-bottom: .5rem;
		background:#f2f2f2;
		z-index: 100;
		.content {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			padding-bottom: .9rem;
			.content-list {
				width: 50%;
				height: 5.14rem;
				border: .03rem solid #f2f2f2;
				padding: .3rem;
				background: #fff;

				span {
					color: #E51c23;
					font-size: .28rem;
				}

				p {
					margin: 0 auto;
				}

				p:nth-of-type(1) {
					width: 3.2rem;
					height: 2.88rem;
					display: flex;
					align-items: center;

					img {
						max-width: 100%;
						height: auto;
					}
				}

				p:nth-of-type(2) {
					height: .8rem;
					line-height: .40rem;
					letter-spacing: .02rem;
					overflow: hidden;
					font-size: .28rem;
					text-overflow: ellipsis;
					-webkit-box-pack: center;
					-webkit-line-clamp: 2;
				}

				p:nth-of-type(3) {
					height: .6rem;
					display: flex;
					justify-content: space-between;
					margin-top: .01rem;
					align-items: center;

					span:nth-of-type(2) {
						color: #c1c1c1;
						font-size: .24rem !important;
					}
				}
			}
		}
	}
</style>
