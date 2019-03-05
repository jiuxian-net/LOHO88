<template>
	<div class="page-infinite">
		<div class="page-infinite-wrapper" :style="{height : (wrapperHeight*2/100)+'rem'}" ref="wrapper">
			<ul class="page-infinite-list"  v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"
			 infinite-scroll-distance="50">
				<li class="page-infinite-listitem"   v-for="item in list">
					<span v-if="item.isNew">NEW</span>
					<p><img v-lazy="'http://image.loho88.com/'+item.img" alt=""   class="page-lazyload-image"></p>
					<p>{{item.title}}</p>
					<p><span>￥{{item.price}}</span><span>{{item.salesNum}}人已买</span></p>
				</li>
			</ul>
			<p v-show="loading" class="page-infinite-loading">
				<!-- <mt-spinner type="fading-circle"></mt-spinner> -->
				加载中...
			</p>
		</div>
	</div>
</template>
<script>
import Vuex from "vuex"
export default {
	computed: {
		...Vuex.mapState({
			
		})
	},
}
</script>
<style lang="scss">
	
.page-infinite-list{
			width: 100%;
			height:100%;
			display:flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.page-infinite-listitem{	
					width:50%;
					height: 5.14rem;
					border: .03rem solid #f2f2f2;
					padding:.3rem;
					background:#fff;
					span{
						color:#E51c23;
						font-size: .28rem;
					}
					p{
						margin: 0 auto;
					}
					p:nth-of-type(1){
						width:3.2rem;
						height: 2.88rem;
						display: flex;
						align-items: center;
						.page-lazyload-image{
							width: 100px;
						}
					}
					p:nth-of-type(2){
						height: .8rem;
						line-height: .40rem;
						letter-spacing: .02rem;
						overflow: hidden;
						font-size: .28rem;
						text-overflow: ellipsis;
						-webkit-box-pack : center;
						-webkit-line-clamp : 2;
					}
					p:nth-of-type(3){
						height: .6rem;
						display: flex;
						justify-content: space-between;
						margin-top: .01rem;
						align-items: center;
						span:nth-of-type(2){
							color: #c1c1c1;
							font-size: .24rem!important;
						}
					}
			}
		}
	
	
					
	
		
  @component-namespace page {
    @component infinite {
     @descendent desc {
        text-align: center;
        color: #666;
        padding-bottom: 5px;
        border-bottom: solid 1px #eee;
      }
         
      @descendent listitem {
        height: 50px;
        line-height: 50px;
        border-bottom: solid 1px #eee;
        text-align: center;
        &:first-child {
          border-top: solid 1px #eee;
        }
      }
         
      @descendent wrapper {
        margin-top: -1px;
        overflow: scroll;
      }
         
      @descendent loading {
        text-align: center;
        height: 50px;
        line-height: 50px;
         
        div {
          display: inline-block;
          vertical-align: middle;
          margin-right: 5px;
        }
      }
    }
  }

	
</style>

<script type="text/babel">
	import Vuex from 'vuex';
	
  export default {
    data(){
      return {
        // list: [],
        loading: false,
        allLoaded: false,
        wrapperHeight: 0
      };
    },
		computed:{
				...Vuex.mapState({
					list:state=>state.details.list.data
				})
		},
    methods: {
      loadMore() {
        this.loading = true;
        setTimeout(()=> {
					
          let last = this.list[this.list.length - 1];
					console.log(this.list,last)
          for (var i in this.list) {
						// console.log(this.list[i])
            this.list.push(last+this.list[i]);
          }
          this.loading = false;
        }, 2500);
      }
    },

    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
      for (var i in this.list) {
      	console.log(this.list[i])
        this.list.push(this.list[i]);
      }
    }
  };
</script>
