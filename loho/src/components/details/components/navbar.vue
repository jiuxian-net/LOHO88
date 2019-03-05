<template>
	<div>
		<ul class="navBar">
			<li class="navBar-list">
				<a class="navBar-list-btn" @click="handleClick(index,$event)"  v-for="(item,index) in navBar">
					{{item}}
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	import  Vuex  from 'vuex';
	export default {
		name: 'page-navbar',

		data() {
			return {
				navBar: ['综合', '销量', '价格', '筛选'],
				index : 0,
				url : ""
			};
		},
		computed:{
			...Vuex.mapState({
				url1 : state=>state.details.url1,
				url2 : state=>state.details.url2,
				
			})
		},
		methods: {
			...Vuex.mapActions({
					handleDetailspage:"details/handleDetailspage"
			}),
			handleClick(index,e) {
				let target = e.target || e.srcElement
				let  parent = e.offsetParent//获取该元素父节点
				
				
				let params = {
				tid : this.$route.query.tid,
				cid : this.$route.query.cid,
				sort : "",
				page : 1
				} 
				switch(index){
					case 0 : 
						this.url = this.url2;
						
					break;
					case 1 : params.sort="o1";
						this.url = this.url1;
					break;
					case 2 : params.sort= "o5";
						this.url = this.url1;
					break;
					case 3 : break;
					default : 
						// this.handleDetailspage(params);
					break;
					
				}
				this.$emit("handleclick",{params,index:index,parent});
				
			}
		}
	};
</script>
<style lang="scss">
	.navBar {
		width: 100%;
		height: 1rem;
		border-bottom: .06rem solid #F2F2F2;
		z-index: 10011111;

		.navBar-list {
			width: 100%;
			height: 1rem;
			display: flex;
			justify-content: space-around;
			align-items: center;

			.navBar-list-btn {
				display: block;
				width: 25%;
				line-height: 1rem;
				text-align: center;
				font-size: .28rem;
				color: #333;
				border-color: #333;
			}
		}

	}
</style>
