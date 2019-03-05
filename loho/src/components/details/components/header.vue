<template>
    <div class="page-header-main">
      <mt-header fixed :title="tag">
        <router-link to="/home" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
				<router-link to="/cart" slot="right">
        <mt-button class="iconfont s5"  >
				&#xe600;
				</mt-button>
				</router-link>
				<router-link to="/my"  slot="right">
				<mt-button  class="iconfont" >
					&#xe606;
				</mt-button>
				</router-link>
      </mt-header>

  

  </div>
</template>

<script>
export default {
  // name: 'header',

  data() {
    return {

    };
  },
	props :["tag"],
  methods: {
    handleClose() {
      alert('close this page');
    }
  }
};
</script>

<style lang="scss">
	
element.style {
}
.page-header-main{
	background: red;
		width: 100%;
		height: 1.2rem;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10011;
		.mint-header {
			height: 1.2rem;
			background:#fff;
			border-bottom:1px solid #ccc;
			color: #222;
			font-size:.32rem;;
			.mint-header-button.is-right {
		   display:flex;
			 justify-content: space-around;
			 align-items: center;
			 font-size: .4rem;
			 color: #222;
			 align-content: center;
			 .s5{
				 font-size: .5rem;
			 }
			 
				
			}
		}
}

</style>
