<template>
  <div class="footer">
    <div class="service">
      <i class="iconfont">&#xe61f;</i>
      <span>客服</span>
    </div>
    <div class="collect">
      <i class="iconfont">&#xe633;</i>
      <span>收藏</span>
    </div>
    <div class="ok">预约到店享95折</div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 1.2rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .service {
    width: 25%;
    height: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    font-size: .3rem;
    align-items: center;
    i{
        font-size: .45rem;
    }
  }
  .collect {
    width: 25%;
    height: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
     font-size: .3rem;
      i{
        font-size: .45rem;
    }
  }
  .ok {
    width: 50%;
    height: 100%;
    text-align: center;
    line-height: 1.2rem;
    background: red;
    color: #fff;
    font-size: .3rem;
  }
}
</style>