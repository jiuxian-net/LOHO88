export default{
	handleDetails(state,params){
		state.list.push(...params)
		console.log(state.list)
	},
	addpage(state,page){
		
		console.log(page)
	}
	
}