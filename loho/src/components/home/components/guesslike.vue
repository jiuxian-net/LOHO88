<template>
  <div class="guesslike">
    <div class="toggle">
        <div class="guessBtn"><a href="#"  @click="handleToggle()">你可能喜欢<i class="iconfont">&#xe638;</i></a></div>
        <div class="getmore content" ref="getmore" v-show="flag"><a href="##">点击加载更多</a></div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            flag : true
        }
    },
    methods: {
        handleToggle(){
            this.flag = !this.flag;
        }
    }
};
</script>
<style lang="scss" scoped>
.guesslike {
  width: 100%;
  .toggle{
      width: 100%;
      .guessBtn{
          width: 100%;
          height: 1.2rem;
          border-top: 1px solid #e2e2e2;
          border-bottom: 1px solid #e2e2e2;
          background: #ffffff;
          line-height: 1.2rem;
          text-align: center;
          font-size: .4rem;
          color: #000000;
          font-weight: 600;
      }
      .getmore{
          width: 100%;
          height: 1.2rem;
          background: #f2f2f2;
          line-height: 1.2rem;
          text-align: center;
          font-size: .26rem;
          a{
              color: #ababab;
          }
          
      }

  }
}
</style>