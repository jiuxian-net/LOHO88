<template>
  <div class="banner">
    <div class="swiper-container swiperContainer" ref="swiperContainer">
      <div class="swiper-wrapper swiperWrapper">
        <div class="swiper-slide" v-for="(item) in info.pics" :key="item.id">
          <img :src=" 'http://image.loho88.com/' + item" alt>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import Vuex from "vuex";
export default {
  computed: {
    ...Vuex.mapState({
      info: state => state.product.info
    })
  },
  updated() {
    var mySwiper = new Swiper(this.$refs.swiperContainer, {
      loop: true,
      pagination: {
      el: '.swiper-pagination',
    },
    });
  }
};
</script>
<style lang="scss" >
.banner {
  width: 100%;
  background: #fff;
  
  .swiperContainer{
    width: 100%;
    height: 100%;
    .swiper-pagination{
      width: 100%;
      height: 3rem;
      position: inherit;
      background: -webkit-linear-gradient(bottom,#c8c8c8,rgba(255,255,255,0));
      border-bottom: 5px solid #eeeeee;
      .swiper-pagination-bullet-active{
        background: red;
        margin-top: 120px;
      }
    }
    .swiperWrapper{
      width: 100%;
      .swiper-slide{
        width: 100%;
        img{
          width: 100%;
        }
      }
    }

  }

}

</style>
