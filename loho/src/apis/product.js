import http from "../utils/http"
export const handleProductGoodsData =(params)=>http("get","/api/goods/6671",params)
export const handleProductInfoData =(params)=>http("get","/api/goodsInfo/6671",params)
export const handleProductPeddleData =(params)=>http("get","/api/goods/peddle/6671",params)