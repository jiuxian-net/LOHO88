import {ShopData} from "../../apis/shop";
export default {
   async handleShopData({commit}){
        let data = await ShopData({});
        console.log(data);
        commit("handleShopData",data.result)
    }
}