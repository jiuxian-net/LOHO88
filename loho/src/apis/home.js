import http from "../utils/http";

export const HomeData = (params)=>http("post","/api/index",params)
