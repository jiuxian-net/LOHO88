import http from "../utils/http"
export const handleProductGoodsData =(url,params)=>http("get",url,params)
export const handleProductInfoData =(url,params)=>http("get",url,params)
export const handleProductPeddleData =(url,params)=>http("get",url,params)
