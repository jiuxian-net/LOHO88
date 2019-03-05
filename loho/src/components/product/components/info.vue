<template>
  <div class="info">
    <div class="title">
      <div class="goodsName">{{info.goodsName}}</div>
      <div class="share">分享</div>
    </div>
    <ul class="price">
      <li>￥<span>{{info.shopPrice}}</span></li>
      <li>快递:免运费</li>
      <li><span>{{info.salesNum}}</span>人已购买</li>
    </ul>
    <ul class="serve">
      <li v-for="(item) in info.promiseTag" :key="item.id">{{item}}</li>
      
    </ul>
    <div class="color">
      <p>颜色选择</p>
      <div class="select">
        <ul>
          <li v-for="(item) in models" :key="item.id">{{item.color}}</li>
        </ul>
      </div>
    </div>
    
    <div class="shop">
      <div class="shopName">花都广百店</div>
      <div class="distance"> <i class="iconfont">&#xe639;</i>ddddddddddddddddddddd <span>fdsfdsfsdf</span></div>
      <div class="address"> <p>地址:对方的手机发的是开发商的地方就开始对方辅导辅导</p><i class="iconfont">&#xe616;</i></div>
    </div>
    <div class="find">
     <span>fdfdfdsfffffffffffffffffffffffffffffsdfds </span> <i class="iconfont">&#xe731;</i>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex"
export default {
computed: {
  ...Vuex.mapState({
    info : state=>state.product.info,
    models : state=>state.product.models,


  })
},

};
</script>
<style lang="scss" scoped>
.info {

  width: 100%;
  margin-bottom: .3rem;
  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 0 0.2rem 0.2rem 0.2rem;
    line-height: 0.4rem;
    border-bottom: 1px solid #e2e2e2;
    background: #fff;
    .goodsName {
      width: 70%;
      padding: 0 0.2rem;
      text-align: left;
      font-size: 0.3rem;
    }
    .share {
      width: 15%;
      border-left: 2px solid #eee;
      text-align: right;
      background: #fff;
    }
  }
  .price {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.3rem 0;
    border-bottom: 1px solid #e2e2e2;
    background: #fff;
    li:nth-of-type(1){
      font-size: .3rem;
      color: red;
      font-weight: 700;
    }
  }
  .serve {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.2rem 0;
  }
  .color {
    width: 100%;
    background: #fff;
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
    p {
      padding: 0.15rem 0.2rem;
    }
    .select {
      ul {
        width: 100%;
        padding: 0.2rem 0;
        li {
          display: inline-block;
          height: .6rem;
          padding: 0 .2rem;
          text-align: center;
          line-height: .6rem;
          background: orange;
          border-radius: .1rem;
          margin-left: .2rem;
        }
      }
    }
  }

  .shop{
    width: 100%;
    padding: 0 .2rem;
    border-bottom: 1px solid #e1e1e1;
    background: #ffffff;
    .shopName{
      width: 100%;
      padding: .2rem 0;
      font-size: .3rem;
      font-weight: 700;
      color: #000;
    }
    .distance{
      padding: .15rem 0;

    }
    .address{
      display: flex;
      padding: .2rem 0;
      justify-content: space-between;
      p{
        width: 80%;
      }
      i{
        margin-right: 0;
      }
    }
  }
  .find{
    padding: .3rem .2rem;
    border-bottom: 1px solid #e1e1e1;
    background: #fff;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
}
</style>