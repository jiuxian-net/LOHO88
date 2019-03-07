import {ShopData} from "../../apis/shop";
export default {
    async handleCity({commit,},params = 302){
			let data = await ShopData("/api/store/"+params,{});
			console.log(data)
			commit("handleCity",data.result)
         
       

    }
}