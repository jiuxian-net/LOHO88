<template>
  <div class="list">
    <ul class="content">
      <li v-for="(item) in list" class="content-list">
        <span v-if="item.isNew">NEW</span>
        <p>
          <img :src="'http://image.loho88.com/'+item.img" alt>
        </p>
        <p>{{item.title}}</p>
        <p>
          <span>￥{{item.price}}</span>
          <span>{{item.salesNum}}人已买</span>
        </p>
      </li>
    </ul>
    <div v-if="true" class="loading-wrapper">已经到底部了</div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
	data(){
		return{
			
		}
	},
	
  computed: {
    ...Vuex.mapState({
      list: state => state.product.list
    })
  }
};
</script>
<style lang="scss" scoped>
.list {
  width: 100%;
  padding-bottom: 1rem; 
  .loading-wrapper{
      text-align: center;
      height: 1rem;
      line-height: 1rem;
      font-size: .3rem;
      color: #c1c1c1;
  }
  .content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    .content-list {
      width: 50%;
      height: 5.14rem;
      border: 0.03rem solid #f2f2f2;
      padding: 0.3rem;
      background: #fff;

      span {
        color: #e51c23;
        font-size: 0.28rem;
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
        height: 0.8rem;
        line-height: 0.4rem;
        letter-spacing: 0.02rem;
        overflow: hidden;
        font-size: 0.28rem;
        text-overflow: ellipsis;
        -webkit-box-pack: center;
        -webkit-line-clamp: 2;
      }

      p:nth-of-type(3) {
        height: 0.6rem;
        display: flex;
        justify-content: space-between;
        margin-top: 0.01rem;
        align-items: center;

        span:nth-of-type(2) {
          color: #c1c1c1;
          font-size: 0.24rem !important;
        }
      }
    }
  }
}
</style>
