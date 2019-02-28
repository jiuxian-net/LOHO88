<template>
  <div class="guesslike">
    <div class="toggle">
      <div class="guessBtn">
        <a href="#" @click="handleToggle()">
          你可能喜欢
          <i class="iconfont">&#xe638;</i>
        </a>
      </div>
      <div class="getmore content" ref="getmore" v-show="flag" @click="handlemore();handlemoreToggle()" >
        <a href="##">点击加载更多</a>
      </div>
      <ul class="goods_list" v-show="goodsflag">
        <li v-for="(item) in goods" :key="item.id">
          <a href="##">
            <div class="goods_img">
              <img :src="'http://image.loho88.com/' + item.img" alt>
            </div>
            <p>{{item.title}}</p>
            <span>¥ {{item.price}}</span>
          </a>
        </li>
        <div class="last"  >
        <a href="##">已经到底部了</a>
      </div>
      </ul>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  // created() {
  //     this.handlemore();
  // },
  computed: {
    ...Vuex.mapState({
      goods: state => state.home.goods
    })
  },
  data() {
    return {
      flag: true,
      goodsflag: false
    };
  },
  methods: {
    ...Vuex.mapActions({
      handlemore: "home/handleHomeDataGoods"
    }),
    handleToggle() {
        this.goodsflag = !this.goodsflag;
    },
    handlemoreToggle(){
         if(this.goodsflag == false){
             
              this.goodsflag = !this.goodsflag;
              this.flag = false;
         }
        
    }
  }
};
</script>
<style lang="scss" scoped>
.guesslike {
  width: 100%;
  .toggle {
    width: 100%;
    .guessBtn {
      width: 100%;
      height: 1.2rem;
      border-top: 1px solid #e2e2e2;
      border-bottom: 1px solid #e2e2e2;
      background: #ffffff;
      line-height: 1.2rem;
      text-align: center;
      font-size: 0.4rem;
      color: #000000;
      font-weight: 600;
    }
    .getmore {
      width: 100%;
      height: 1.2rem;
      background: #f2f2f2;
      line-height: 1rem;
      text-align: center;
      font-size: 0.26rem;
      a {
        color: #ababab;
      }
    }
    .goods_list {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-content: center;
      flex-wrap: wrap;
      .last{
      width: 100%;
      height: 1.2rem;
      background: #f2f2f2;
      line-height: 1.2rem;
      text-align: center;
      font-size: 0.26rem;
      a {
        color: #ababab;
      }
    }
      li:nth-of-type(2n + 1) {
        border-right: 1px solid #e1e1e1;
      }
      li {
        width: 50%;
        padding: 0.1rem;
        border-top: 1px solid #e1e1e1;
        background: #ffffff;

        a {
          width: 100%;
          .goods_img {
            display: table-cell;
            height: 3rem;
            width: 100%;
            text-align: center;
            vertical-align: middle;
            img {
              width: 100%;
            }
          }
          p {
            width: 100%;
            margin-top: 0.2rem;
            line-height: 0.4rem;
            font-size: 0.3rem;
            overflow: hidden;
            -webkit-line-clamp: 2;
            display: -webkit-box;
            -webkit-box-orient: vertical;
          }
          span {
            margin: 0.2rem 0;
            display: inline-block;
            width: 100%;
            text-align: center;
            font-size: 0.28rem;
            color: #e51c23;
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>