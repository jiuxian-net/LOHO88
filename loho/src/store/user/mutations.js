import {getCookie,setCookie} from "../../utils/auth"
export default{
    //username，password状态改变
    handleChange(state,params){
        console.log(params)
        if(params.type == 1){
            state.username = params.event;
            //console.log(state.username)
        }else{
            state.password = params.event;
            //console.log(state.password)
        }
    },
    //登录
    handleLogin(state,params){
        state.user = params;
        state.token = getCookie();
        setCookie("user",state.user)
        console.log(state.token)
        
    },
    //消息框
    handleCloseFlag(state){
        state.flag = false;
    },
    //登录失败
    handleFailed(state){
        state.flag = true;
    },
    // handlecolor(state){
    //     state.color = "color";
    // },
    //注册添加状态改变
    handleAdd(state,params){
        
        if(params.type == 1){
            state.username = params.e;
            console.log(state.username)
        }else{
            state.password = params.e;
            console.log(state.password)
        }
        
    },
    //注册
    handleRegister(state,params){
      state.user = params;
      state.token = getCookie();
      console.log(state.token)
      setCookie("user",state.user)
    }
}