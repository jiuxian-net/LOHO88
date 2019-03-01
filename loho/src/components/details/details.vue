<template>
	<div class="details">
		<Header-com></Header-com>
		<NavBar-com></NavBar-com>
		<List-com></List-com>
	</div>
</template>

<script>
	import  Vuex from "vuex";
	import Header from './components/header';
	import NavBar from './components/navbar';
	import List from './components/infinite-scroll';
	
	export default {
		components:{
			"Header-com" : Header,
			"NavBar-com" : NavBar,
			"List-com" : List
		},
		created() {
			this.handleDetails()
		},
		methods: {
			...Vuex.mapActions({
				handleDetails : "details/handleDetails"
			})
		},
	}
</script>

<style>
	.details{
			width: 100%;
			height: 100%;
	}
</style>
