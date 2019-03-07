<template>
  <div class="classify">
    <!-- <div class="pooular_item classify_kind">
            <h2><span>{{popular.title.word}}</span><a href="">{{popular.more.word}}</a></h2>
            <div class="banner_img">
                <img :src="popular.img.pic" alt="">
            </div>
            <ul class="banner_item" >
                <li v-for="(item) in popular.show" :key="item.id"><a href="##" ><p class="title">{{item.tag}}</p><p class="english">{{item.tag_en}}</p><p class="item_img"><img :src="item.pic" alt=""></p></a></li>
            </ul>
    </div>-->
    
      <div class="classify_kind" v-for="(item) in classify" :key="item.id" >
        <h2>
          <span>{{item.title.word}}</span>
          <a href>{{item.more.word}}</a>
        </h2>
        <div class="banner_img">
          <img :src="item.img.pic" alt>
        </div>
        <ul class="banner_item">
          <li v-for="(item) in item.show" :key="item.id" >
            <a href="##" @click="handleClick(item.gid)">
              <p class="title">{{item.tag}}</p>
              <p class="english">{{item.tag_en}}</p>
              <p class="item_img">
                <img :src="item.pic" alt>
              </p>
            </a>
          </li>
        </ul>
      </div>
    
  </div>
</template>
<script>
import Vuex from "vuex";

export default {
  computed: {
    ...Vuex.mapState({
      popular: state => state.home.popular,
      classify: state => state.home.classify
    })
  },
  methods: {
    handleClick(gid){
      console.log(gid)
      
        this.$router.push({path : "/product",query:{
          gid:gid
        }})
      
        
    }
  }

};
</script>
<style lang="scss" scoped>
.classify {
  width: 100%;
  .classify_kind {
    width: 100%;
    margin-bottom: 0.3rem;
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
    h2 {
      padding: 0.2rem 0.2rem;
      border-left: 4px solid red;
      background: #ffffff;
      span {
        color: #000000;
      }
      a {
        float: right;
        font-size: 0.26rem;
        color: #999999;
      }
    }
    .banner_img {
      width: 100%;
      height: 2rem;
      img {
        width: 100%;
      }
    }
    .banner_item {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      background: #ffffff;
      li:nth-of-type(2n + 1) {
        border-right: 1px solid #e1e1e1;
      }
      li {
        width: 50%;
        flex-direction: column;
        padding: 0.2rem;
        align-items: center;
        justify-content: space-around;
        border-bottom: 1px solid #e1e1e1;
        .title {
          text-align: center;
          margin-top: 0.12rem;
          font-size: 0.26rem;
          color: #000000;
        }
        .english {
          margin-top: 0.1rem;
          text-align: center;
          height: 0.8rem;
          color: #999999;
          font-size: 0.36rem;
        }
        .item_img {
          margin-top: 0.2rem;
          margin-bottom: 0.2rem;
          img {
            max-width: 100%;
            vertical-align: middle;
          }
        }
      }
    }
  }
}
</style>