<template>
  <div class="header">
    <mt-header title="登录">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button @click="handleClose">关闭</mt-button>
      <router-link to="/" slot="right">
        <mt-button class="iconfont">&#xe600;</mt-button>
      </router-link>
      <mt-button class="iconfont list" slot="right">&#xe60a;</mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    handleClose() {
      alert("close this page");
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 1.2rem;
  background: #ffffff;
  
  .mint-header {
    font-size: 0.35rem;
    height: 1.2rem;
     background: #ffffff;
     color: #000000;
    .is-right{
      a{
         margin-right: .6rem;
         font-size: .5rem;
      }
     .list{
       margin-right: .3rem;
       font-size: .5rem;
     }
    }
  }
}
</style>
