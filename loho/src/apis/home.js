import http from "../utils/http";

export const HomeData = (params)=>http("get","/api/index",params)
export const HomeDataGoods = (params) =>http("get","/api/search/?sort=o6&e=249&page=2",params)
