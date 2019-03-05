import Home from '../../apis/details';
//import axios from 'axios';
export default {
	async handleDetails({commit,state},params){
		// let sign = await Home.Details("/api/classify/32",{});		
		state.page +=params.page;
		console.log(params)
		let	data = await  Home.Details("/api/search/?e="+params.tid+"&page="+params.page++,{
		})
		let list = data.result.data
		commit("handleDetails",list);
	},
// 	async addpage({commit},page){
// 		let	data = await  Home.Details("/api/search/?e=222&page="+page,{
// 		})
// 		let list = data.result.data
// 		commit("addpage",list)
// 	}
	
}
