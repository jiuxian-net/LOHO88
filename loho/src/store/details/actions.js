import Home from '../../apis/details';
import axios from 'axios';
export default {
	async handleDetails({commit}){
		let sign = await Home.Details("/api/classify/32",{});
		let list = await  Home.Details("/api/search/?e=222&page=1",{	
		})
		
		commit("handleDetails",{sign,list});

	}
}
