<template>
  <div id="footer">
    <ul>
      <li v-for="(item) in tabBar" :key="item.id">
        <router-link :to="{name:item.name}">
          <i class="iconfont" v-html="item.icon"></i>
          <span>{{item.title}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tabBar: [
        {
          name: "home",
          title: "首页",
          icon: "&#xe6d3;"
        },
        {
          name: "group",
          title: "团购",
          icon: "&#xe618;"
        },
        {
          name: "cart",
          title: "购物车",
          icon: "&#xe600;"
        },
        {
          name: "shop",
          title: "附近体验店",
          icon: "&#xe63b;"
        },
        {
          name: "my",
          title: "我的",
          icon: "&#xe61a;"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#footer {
  width: 100%;
  height: 1.08rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  border-top: 0.01rem solid #c1c1c1;
  z-index: 10;
  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    li {
      width: 100%;
      height: 100%;
      a {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        i {
          font-size: 0.5rem;
          font-weight: 900;
        }
      }
    }
  }
}


</style>