<template>
  <div class="tapbar">
    <div class="mobilephone" v-for="(item,index) in tapbar" :key="item.id" @click="handleClick(index)" :class="afterIndex == index ? 'after' :''"><a href="##">{{item}}</a></div>
    
  </div>
</template>
<script>
export default {
    data(){
        return {
            tapbar :[
                "手机号码快速登录",
                "账号密码登录"
            ],
            afterIndex : 0,
        }
    },
    methods: {
        handleClick(index){
            this.$emit("handleToggle",index);
            this.afterIndex = index;

        }
        
    }
};
</script>
<style lang="scss" scoped>
.tapbar {
  width: 100%;
  height: 1rem;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .after{
      
      border-bottom: 2px solid red;
  }
  div{
      width: 50%;
      height: 100%;
      text-align: center;
      line-height: 1rem;
      a{
          color: #000;
          font-size: .3rem;
      }
  }
}
</style>