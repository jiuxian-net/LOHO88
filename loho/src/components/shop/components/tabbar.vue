<template>
	<div class="tabbar">
		<ul>
			<li v-for="(item,index) in tabBar">
				<a href="##" @click = "handleClick(index)">{{item}}</a>
			</li>
			<div></div>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabBar: ["列表", "地图"]
			}
		},
		methods:{
			handleClick(index){
				this.$emit("handleClick",index)
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
