<template>
  <div class="normal">
    <mt-field label="用户名" placeholder="请输入用户名" :attr="{ maxlength: 10 }" :value="userName" @input="handleChange({type:1,event:$event})"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" :value="passWord" @input="handleChange({type:2,event:$event})"></mt-field>
    <div class="failed" v-show="flag" @click="handleClose()">登录失败</div>
  </div>
</template>
<script>
import Vuex from "vuex"
export default {
  computed: {
    ...Vuex.mapState({
      userName : state=>state.user.username,
      passWord : state=>state.user.password,
      flag : state=>state.user.flag,
    })
  },
  methods: {
    ...Vuex.mapMutations({
      handleChange : "user/handleChange",
      handleCloseFlag : "user/handleCloseFlag"
    }),
     handleClose(){
    this.handleCloseFlag();
  }
  },
 
};
</script>
<style lang="scss" scoped>
.normal {
  .mint-cell {
    border-bottom: 1px solid #f5f5f5;
  }
  .failed{
    width: 5rem;
    height: 1.5rem;
    background: #fff;
    opacity: .8;
   
    font-size: .4rem;
    font-weight: 800;
    text-align: center;
    line-height: 1.5rem;
    position: fixed;
    top: 3rem;
    left: 1.25rem;
    border-radius: .1rem;
    
    
  }
}
</style>