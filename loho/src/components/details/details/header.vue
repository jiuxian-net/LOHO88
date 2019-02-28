<template>
  <div>
    <div class="page-header-main">
      <mt-header fixed title="新品上市">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button class="iconfont s5" slot="right">
				&#xe600;
				</mt-button>
				<mt-button slot="right" class="iconfont" >
					&#xe606;
				</mt-button>
      </mt-header>

      
    </div>

  </div>
</template>

<script>
export default {
  // name: 'header',

  data() {
    return {

    };
  },

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
		height: 60px;
		.mint-header {
			height:60px;
			background:#fff;
			border-bottom:1px solid #ccc;
			// margin:0 0 1.0625rem -1.375rem;
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

//   @component-namespace page {
//     @component header {
//       @descendent main {
//         margin-top: 50px;
//         min-height: 120vh;
// 
//         > * {
//           margin-bottom: 15px;
//         }
//       }
//     }
//   }
</style>
