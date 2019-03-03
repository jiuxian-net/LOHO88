import http from "../utils/http"
export const login = (params) =>http("post","/api/login",params);
export const register = (params) =>http("post","/api/register",params);
