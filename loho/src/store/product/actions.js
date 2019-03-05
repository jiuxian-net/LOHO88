import {handleProductGoodsData} from "../../apis/product"
import {handleProductInfoData} from "../../apis/product"
import {handleProductPeddleData} from "../../apis/product"
export default{
    async handleProductGoodsData({commit,},params){
        console.log(params)
        let data = await handleProductGoodsData("/api/goods/"+params,{})
       
        commit("handleProductGoodsData",data.result)
       
    },
    async handleProductPeddleData({commit},params){
        console.log(11)
        let data = await handleProductPeddleData("/api/goods/peddle/"+params,{})
        commit("handleProductPeddleData",data.result)
       
    }
}