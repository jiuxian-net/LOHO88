import axios from "axios";
import qs from "qs";


const http = axios.create({
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
http.interceptors.request.use((config)=>{

   

    return config;

},(err)=>{
	console.log(err)
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