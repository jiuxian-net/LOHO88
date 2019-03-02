<template>
  <div id="header">
    <div class="left">
      <routerLink to = "/city">
        北京市
        <i class="iconfont">&#xe695;</i>
      </routerLink>
    </div>
    <div class="nav_logo"></div>
    <div class="right">
      <router-link to="/cart">
        <i class="iconfont cart">&#xe670;</i>
      </router-link>
      <a href="##">
        <i class="iconfont my">&#xe61a;</i>
      </a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#header {
  width: 100%;
  height: 1.2rem;
  background: #ffffff;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  .left{
      width: 2.4rem;
      height: 100%;
      font-size: .3rem;
      a{
          width: 100%;
          height: 100%;
          line-height: 1.2rem;
          i{
              font-size: .4rem;
          }
      }
  }
  .nav_logo {
    background-image: url("../../assets/img/logo_head.png");
    background-position: center;
    background-repeat: no-repeat;
    margin: auto;
    width: 72px;
    height: 31px;
    background-size: contain;
  }
  .right{
      width: 2.4rem;
      height: 100%;
      a{
          width: 100%;
          height: 100%;
          line-height: 1.2rem;
          text-align: center;
          i{
              font-size: .4rem;   
              font-weight: 600;
          }
          .cart{
              padding-left: .6rem;
          }
          .my{
              padding-left: .5rem;
          }
      }
  }
}
</style>