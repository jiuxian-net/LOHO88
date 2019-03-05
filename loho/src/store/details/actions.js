import Home from '../../apis/details';

import axios from 'axios';
export default {
	
// 	async handleDetails({commit,state},params){
// 		// let sign = await Home.Details("/api/classify/32",{});		
// 		state.page +=params.page;
// 		let	data = await  Home.Details("/api/search/?e="+params.tid+"&page="+params.page++,{
// 		})
// 		let list = data.result.data
// 		commit("handleDetails",list);
// 	},
	async handleDetailspage({commit,state},params){
		console.log(params)
// 		if(!params.sort){
// 			
// 		}
		if(params.sort){//&& params.sort == "o1"
			console.log(params.tid)
			if(params.tid == "82"){
				params.page =1;
			}
			let	data = await  Home.Details("/api/search/?e="+params.tid+"&page="+params.page+"&sort="+params.sort,{})
			let url = "?e="+params.tid+"&page="+params.page+"&sort="+params.sort
			state.page +=params.page;
			state.url1 = url;
			console.log(data);
			let list = data.result.data
// 			state.listpage1.push(...list);
			commit("handleDetailspage",list)
		}else{//&& params.sort == "o5"
			if(params.tid == "82"){
				params.page =1;
			}
			let	data = await  Home.Details("/api/search/?e="+params.tid+"&page="+params.page,{})
			console.log(data);
			// console.log(params.tid)
			state.page +=params.page;
			let url = "?e="+params.tid+"&page="+params.page
			state.url2 = url;
			let list = data.result.data
			// state.listpage2.push(...list);
			commit("handleDetailspage",list)
		}		
	}
	
}
