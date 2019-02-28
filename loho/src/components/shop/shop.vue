<template>
  <div class = "shop">
		<Header-com/>
		<Selectcard-com/>
  </div>
</template>

<script>
	import Header from "./components/header";
	import Selectcard from "./components/selectcard"
export default {
	components:{
		"Header-com" : Header,
		"Selectcard-com" : Selectcard
	}
}
</script>


<style lang="scss" scoped>
	.shop{
		background:#f2f2f2;
	}
</style>