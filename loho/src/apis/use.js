import http from "../utils/use";

export const Use = (params)=>http("post","/bms/login",params)
