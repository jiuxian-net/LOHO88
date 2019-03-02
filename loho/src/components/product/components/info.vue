<template>
  <div class="info">
    <div class="title">
      <div class="goodsName">对方hi递四方速递兰蔻粉水打款发货速度快见风使舵</div>
      <div class="share">分享</div>
    </div>
    <ul class="price">
      <li>￥599</li>
      <li>对方的发生的</li>
      <li>大幅度发</li>
    </ul>
    <ul class="serve">
      <li>￥599</li>
      <li>对方的发生的</li>
      <li>大幅度发</li>
      <li>dddd</li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.info {
  width: 100%;
 
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
    padding: .3rem 0;
    border-bottom: 1px solid #e2e2e2;
    background: #fff;
  }
  .serve {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: .2rem 0;
  
  }
}
</style>