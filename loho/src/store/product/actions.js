import {handleProductGoodsData} from "../../apis/product"
import {handleProductInfoData} from "../../apis/product"
import {handleProductPeddleData} from "../../apis/product"
export default{
    async handleProductGoodsData({commit}){
        let data = await handleProductGoodsData({})
        console.log(data)
        commit("handleProductGoodsData",data.result)
        console.log(data.result)
    }
}