<template>
  <div class="loginfooter">
    <routerLink to= "/register" class="register_btn">
      <div>注册</div>
    </routerLink >
    <div class="login_btn" @click="handlebtn()" :class="color">登录</div>
  </div>
</template>
<script>
import Vuex from "vuex"
export default {
   computed: {
    ...Vuex.mapState({
      // userName : state=>state.user.username,
      // passWord : state=>state.user.password,
       color : state=>state.user.color,
     
    })
  },
  methods: {
    
    handlebtn(){
      this.handleLogin(this.$router);
    },
    ...Vuex.mapActions({
      handleLogin : "user/handleLogin",
      handlecolor : "user/handlecolor"
    }),
    
  },
  // updated () {
  //   this.handlecolor()
  // }

};
</script>
<style lang="scss" scoped>
.loginfooter {
  width: 100%;
  height: 1.2rem;
  background: gray;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: .4rem;
  font-weight: 700;
  .color{
    background: red!important;
    color: #fff!important;
  }
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