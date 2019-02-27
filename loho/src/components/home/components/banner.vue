<template>
  <div class="swiper-container banner-container" ref="bannerContainer">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item) in focus" :key="item.id">
        <img :src="item.pic">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination pagination"></div>
  </div>
</template>
<script>
import Vuex from "vuex";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  computed: {
    ...Vuex.mapState({
      focus: state => state.home.focus
    })
  },
  updated() {
    if (!this.swiper) {
      this.swiper = new Swiper(this.$refs.bannerContainer, {
        autoplay: { disableOnInteraction: false },
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.banner-container {
  width: 100%;
  height: 3.75rem;
  _background: yellow;
  .swiper-wrapper,
  .swiper-slide {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>