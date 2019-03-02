<template>
  <div class="registerinput">
    <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
    <mt-field label="用户名" placeholder="请输入用户名" :attr="{ maxlength: 10 }"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.registerinput {
    margin-top: .4rem;
  .mint-cell {
    border-bottom: 1px solid #f5f5f5;
  }
}
</style>