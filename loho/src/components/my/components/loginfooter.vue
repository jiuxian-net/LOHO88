<template>
  <div class="loginfooter">
    <routerLink to= "/register" class="register_btn">
      <div>注册</div>
    </routerLink >
    <div class="login_btn">登录</div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.loginfooter {
  width: 100%;
  height: 1.2rem;
  background: red;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .register_btn {
    width: 50%;
    height: 100%;
    background: #ffffff;
    display: block;
    div {
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 1.2rem;
      font-size: .3rem;
      color: #000;
    }
  }
  .login_btn {
    width: 50%;
    height: 100%;
    text-align: center;
    line-height: 1.2rem;
    font-size: .3rem;
  }
}
</style>