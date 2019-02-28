<template>
	<div class = "group">
        <Header-com/>
		<Content-com/>
    </div>
</template>
<script>
import Header from "./components/header";
import Content from "./components/content"

export default {
    components:{
		"Header-com" : Header,
		"Content-com" : Content
	}
}
</script>
<style lang="">
	.group{
		height:100%;
	}
</style>