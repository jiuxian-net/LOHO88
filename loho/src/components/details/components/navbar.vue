<template>
  <div class="page-navbar">
    <mt-navbar class="page-part" >
      <mt-tab-item id="1"
  				v-for="(item,index) in navBar"
  				:key ="item.id"
  		>
  				{{item}}
  		</mt-tab-item>
    </mt-navbar>
  </div>
</template>

<script>
export default {
  name: 'page-navbar',

  data() {
    return {
     selected: '1',
     navBar : ['综合','销量','价格','筛选']
    };
  }
};
</script>
<style lang="scss">
	.page-navbar{
		top:0;
		position: absolute;
		border-bottom: .06rem solid #F2F2F2;
		width: 100%;
		height: 1rem;
		.mint-navbar {
			width: 100%;
			height: 100%;
			.mint-tab-item-label{
					font-size:.28rem;
					color : #333;
					border-color : #333;
				}
			 .mint-tab-item.is-selected {
			  border-bottom: 0;
			 }
			}
		}
		
	
</style>
