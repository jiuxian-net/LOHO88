import http from "../utils/http";

export const CityData = (params)=>http("get","/api/store/clist",params)
