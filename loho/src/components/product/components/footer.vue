<template>
  <div class="footer">
		<div class="service">
				<div>
				  <i class="iconfont">&#xe61f;</i>
				  <span>客服</span>
				</div>
				<div>
				  <i class="iconfont">&#xe633;</i>
				  <span>收藏</span>
				</div>
		</div>
    <div class="ok"><span>预约到店享95折</span><span v-show="flag"  @click="handlegocart(index);gocart(index)">加入购物车</span></div>
		
  </div>
</template>
<script>
	import Vuex from "vuex";
export default {
	data(){
		return{
			flag:true,
			index:0
		}
	},
	computed:{
		...Vuex.mapState({
			button : state=>state.product.tag_en,
	    info : state=>state.product.info,
	    models : state=>state.product.models,
	  })
	},
	methods:{
		...Vuex.mapActions({
			handlegocart : "product/handlegocart"
		}),
		gocart(index){
				this.index++
			this.$router.push("/cart");
		}
	}
};
</script>
<style lang="scss" scoped>
	@mixin flex($flex : flex, $content : space-between, $align : center, $inline : row) {
		display: $flex;
		justify-content: $content;
		align-items: $align;
		flex-direction: $inline;
	
	}
	
.footer {
  width: 100%;
  height: 1.2rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  @include flex();

  .service {
    width: 2.5rem;
    height: 100%;
		@include flex();
    
    font-size: .3rem;
    align-items: center;
		div{
			width: 50%;
			font-size: .28rem;
			@include flex($inline:column);
			
		}
		div:nth-of-type(1){
			i{
			    font-size: .35rem;
					color: #333;
			}
		}
		div:nth-of-type(2){
			i{
			    font-size: .4rem;
					color: #333;
			}
		}
    
  }
  .ok {
    width:75%;
    height: 100%;
    text-align: center;
    line-height: 1.2rem;
    background: red;
    color: #fff;
    font-size: .3rem;
		@include flex();
		span{
			width: 50%;
			opacity: .8;
		}
		span:nth-of-type(2){
			background: #ff9500;
		}
  }
}
</style>