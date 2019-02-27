<template>
  <div class="category">
    <ul>
      <li v-for="(item) in cates" :key="item.id"><a href="##"><div class="cate_img"><img :src="item.pic" alt=""/></div><span>{{item.tag}}</span></a></li>
      
      
    </ul>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
    computed: {
        ...Vuex.mapState({
            cates : state => state.home.cates,
        })
    },
};
</script>
<style lang="scss" scoped>
.category {
  width: 100%;
  height: 5rem;
  padding: 0 0 .6rem;
  background: #ffffff;
  border-bottom: 1px solid #e1e1e1;
  margin-bottom: .3rem;
  ul{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li{
          width: 25%;
          height: 2rem;
          a{
              width: 100%;
              height: 100%;
              _display: block;
              display: flex;
              flex-direction: column;
              span{
                  text-align: center;
                  display: block;
                  font-size: .28rem;
                  _font-weight: 600;
              }
              .cate_img{
                  height: 1.7rem;
                  width: 100%;
                  padding-top: .36rem; 
                  img{
                      width: 54%;
                      margin: 0 auto;
                  }
                  
              }

          }
      }
    
  }
}
</style>