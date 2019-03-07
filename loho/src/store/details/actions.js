import Home from '../../apis/details';




export default {
	async handleDetailspage({commit,state},params){
		console.log(params)
		if(params.sort){//&& params.sort == "o1"
			console.log(params.tid)
			if(params.tid == "82"){
				params.page =1;
			}
			let	data = await  Home.Details("/api/search/?e="+params.tid+"&page="+params.page+"&sort="+params.sort,{})
			console.log(data);
			let list = data.result.data
			commit("handleDetailspage",list)
		}else{//&& params.sort == "o5"
			if(params.tid == "82"){
				params.page =1;
			}
			let	data = await  Home.Details("/api/search/?e="+params.tid+"&page="+params.page,{})
			console.log(data);
			state.page +=params.page;
			let list = data.result.data
			commit("handleDetailspage",list)
		}		
	}
	
}
