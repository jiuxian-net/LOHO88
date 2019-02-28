<template>
	<div class = "selectcard">
		<Tabbar-com @handleClick = "click"/>
<!-- 		<List-com v-if = "flag == 0"/>
		<Map-com v-if = "flag == 1"/> -->
		<Component :is = "com"></Component>
	</div>
</template>

<script>
	import Tabbar from "./tabbar";
	import List from "./list";
	import Map from "./map";
	
	export default{
		components:{
			"Tabbar-com" : Tabbar,
			"List-com" : List,
			"Map-com" : Map
		},
		data(){
			return{
				com:"List-com"
			}
		},
		methods:{
			click(params){
				switch(params){
					case 0 : 
						this.com = "List-com";
					break;
					case 1 : 
						this.com = "Map-com";
					break;
					default:404
					
				}
			}
		}
	}
</script>

<style>
</style>
