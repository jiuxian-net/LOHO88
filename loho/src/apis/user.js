import http from "../utils/http"
export const login = (params) =>http("post","/users/user/login",params);
export const register = (params) =>http("post","/users/user/register",params);
