<template>
  <div class="page-swipe">
    <mt-swipe :auto="0">
      <mt-swipe-item class="slide" v-for = "(item) in mapinfo" :key="item.id">
				<div class = "top">
					<span class = "top_left">{{item.catName}}</span>
					<span>
						<i class = "iconfont">&#xe615;</i>32.83km
					</span>
				</div>
				<div class = "content">
					<span>{{item.chineseAddress}}</span>
				</div>
				<div class = "bottom">
					<ul>
						<li><a href="##">客服</a></li>
						<li><a href="##">导航</a></li>
						<li class = "now"><a href="##">立即预约</a></li>
					</ul>
				</div>
			</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		computed:{
			...Vuex.mapState({
				mapinfo:state=>state.shop.stores,
			})
		}
	}
</script>

<style lang = "scss" scoped>
  @component-namespace page {
    @component swipe {
     @descendent desc {
        text-align: center;
        color: #666;
        margin-bottom: 5px;
      }
			.page-swipe{
				height:30px;
				width:100%;
				padding-top:1000px;
				position: absolute;
				bottom:20px;
				left:0;
			}
      .mint-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
      }

      .mint-swipe-item {
        line-height: 200px;
      }
    }
  }
</style>
