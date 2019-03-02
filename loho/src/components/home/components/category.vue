<template>
  <div class="category">
    <ul>
      <li v-for="(item) in cates" :key="item.id">
			<button @click="handleClick(item.tid,item.cid)">
				<div class="cate_img"><img :src="item.pic" alt=""/></div>
				<span>{{item.tag}}</span>
			</button>
	</li> 
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
	methods: {
		handleClick(tid,cid) {
			this.$router.push({path :'/details',query:{
				 tid,cid
			}});
		},
		
	},
};
</script>
<style lang="scss" scoped>
.category {
  width: 100%;
  height: 5rem;
  margin-bottom: .3rem;
  ul{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li{
          width: 25%;
          height:50%;
          button{
			  background: #ffffff;
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
			  border-width: 0;
			  border-color:#fff;
			   border-style:inset; 
			  padding: 0;
			  
              span{
				  width: 100%;
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