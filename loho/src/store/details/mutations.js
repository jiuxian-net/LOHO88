export default{
	handleDetails(state,params){
		let list = params.list.result
		state.list = params.list.result;
		console.log(state.list,params.list.result)
	}
}