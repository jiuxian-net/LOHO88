<template>
  <div class="registerinput">
    
    <mt-field label="用户名" placeholder="请输入用户名" :attr="{ maxlength: 10 }" :value="userName" @input="handleAdd({type : 1,e :$event})"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" :value="passWord" @input="handleAdd({type : 2,e :$event})"></mt-field>
  </div>
</template>
<script>
import Vuex from "vuex"
export default {
  computed: {
    ...Vuex.mapState({
      userName : state=>state.user.username,
      passWord : state=>state.user.password,
    })
  },
  methods: {
    ...Vuex.mapMutations({
      
      handleAdd : "user/handleAdd",
    })
  },
};
</script>
<style lang="scss" scoped>
.registerinput {
    margin-top: .4rem;
  .mint-cell {
    border-bottom: 1px solid #f5f5f5;
  }
}
</style>