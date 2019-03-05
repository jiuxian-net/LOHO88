import {ShopData} from "../../apis/shop";
export default {
//    async handleShopData({commit}){
//         let data = await ShopData({});

//         console.log(data);
//         commit("handleShopData",data.result)
//     }
    async handleCity({commit,},params){
        console.log(params)
         let data = await ShopData("/api/store/"+params,{});
         console.log(data)
         commit("handleCity",data.result)
       

    }
}