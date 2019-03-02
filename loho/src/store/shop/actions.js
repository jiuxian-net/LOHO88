import {ShopData} from "../../apis/shop";
export default {
   async handleShopData({commit}){
        let data = await ShopData({});
		
        commit("handleShopData",data.result)
    }
}