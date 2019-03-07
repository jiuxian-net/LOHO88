<template>
	<div class="imgtext">
		<div class="imgtext-content" v-html="text"></div>
	</div>
</template>
<script>
import Vuex from "vuex"
export default {
    computed:{
    	...Vuex.mapState({
    	    text : state=>state.product.txtcontent,
    	})
    },
}
</script>
<style lang="scss" scoped>
    .imgtext{
		width: 100%;
		height: 100%;
		.imgtext-content{
		width: 100%
		p{
			width: 100%;
// 			img{
// 				width: 100%;
// 			}
		}
		}
	}
</style>