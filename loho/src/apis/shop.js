import http from "../utils/http";

export const ShopData = (params)=>http("get","/api/store/302",params)
