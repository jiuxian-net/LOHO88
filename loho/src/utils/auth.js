import Cookie from "js-cookie"
export const setCookie = (key='X-Token',val)=>{
    Cookie.set(key,val)
}

export const getCookie = (key="X-Token")=>{
   return  Cookie.get(key);
}

export const removeCookie = (key="X-Token")=>{
    Cookie.remove(key)
}