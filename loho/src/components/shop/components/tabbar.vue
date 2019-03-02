<template>
	<div class="tabbar">
		<ul>
			<li v-for="(item,index) in tabBar" :key="item.id">
				<a href="##" @click = "handleClick(index)" :class = "afterIndex == index ? 'after' : ''">{{item}}</a>

			</li>
			<div></div>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabBar: ["列表", "地图"],
				afterIndex:0
			}
		},
		methods:{
			handleClick(index){
				this.$emit("handleClick",index);
				this.afterIndex = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tabbar {
		width: 100%;
		height: 1rem;
		background: #fff;

		ul {
			display: flex;
			position: relative;
			width: 100%;
			height: 100%;

			li {
				width: 50%;
				text-align: center;
				line-height: 1rem;
				.after{
					border-bottom:2px solid #e8343b;
					color:#e8343b;
				}
				a {
					color: #000;
					font-size: .29rem;
					display:inline-block;
					width:100%;
					height:100%;
				}
			}

			div {
				position: absolute;
				width: 1px;
				height: 1em;
				display: block;
				background: #e1e1e1;
				right: 180px;
				top: 1.5em;
			}
		}
	}
</style>
