import axios from "axios";
import qs from "qs";


const http = axios.create({})


//请求拦截
http.interceptors.request.use((config)=>{
    return config;
},(err)=>{
    return Promise.reject(err);
})



//响应拦截

http.interceptors.response.use((res)=>{   
	return  res.data
},(err)=>{  
	return Promise.reject(err);
})


export default (method,url,data=null)=>{
    if(method == "post"){
        return http.post(url,data);
    }else if(method == "get"){
        return http.get(url,{params:data});
    }else{
        return;
    }
}