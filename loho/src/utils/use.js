import axios from "axios";
import qs from "qs";


const use = axios.create({
	// responseType: 'json',
// 	proxy: {
//     host: '127.0.0.1',
//     port: 9000,
//     auth:{
//       username: 'mikeymike',
//       password: 'rapunz3l'
//     }
  // },
})


//请求拦截
use.interceptors.request.use((config)=>{
	console.log(config)
    return config;
},(err)=>{
	console.log(err)
    return Promise.reject(err);
})



//响应拦截

use.interceptors.response.use((res)=>{   
	return  res.data
},(err)=>{  
	return Promise.reject(err);
})


export default (method,url,data=null)=>{
    if(method == "post"){
        return use.post(url,data);
    }else if(method == "get"){
        return use.get(url,{params:data});
    }else{
        return;
    }
}