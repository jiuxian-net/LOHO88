<template>
  <div class="normal">
    <mt-field label="用户名" placeholder="请输入用户名" :attr="{ maxlength: 10 }"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.normal {
  .mint-cell {
    border-bottom: 1px solid #f5f5f5;
  }
}
</style>