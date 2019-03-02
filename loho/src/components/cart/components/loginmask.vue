<template>
  <div class="mask" v-show="flag">
    <div class="dialog">
      <div class="header">
        登录
        <i class="iconfont" @click="handleClose()">×</i>
      </div>
      <div class="content">
        <mt-field label="用户名" placeholder="请输入用户名" :attr="{ maxlength: 10 }"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
        <div class="login_btn">登录</div>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  computed: {
    ...Vuex.mapState({
      flag: state => state.cart.flag
    })
  },
  methods: {
      ...Vuex.mapMutations({
          handleClose : "cart/handleClose"
      })
  },
};
</script>
<style lang="scss" scoped>
.mask {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: #000;
  opacity: 0.7;
  .dialog {
    width: 100%;
    height: 5.2rem;
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    .header {
      width: 100%;
      height: 0.6rem;
      text-align: center;
      font-size: 0.4rem;
      line-height: 0.6rem;
      color: #000;
      i {
        float: right;
        font-size: 0.5rem;
      }
    }
    .content {
      .mint-cell {
       
          border: 1px solid #e2e2e2;
       
      }
      .login_btn {
        width: 95%;
        height: 0.8rem;
        background: #d02;
        font-size: 0.4rem;
        color: #fff;
        margin: 0.1rem auto;
        text-align: center;
        line-height: 0.8rem;
      }
    }
  }
}

</style>