import { login } from "../../apis/user"
import { register } from "../../apis/user"
export default {
    //登录
    async handleLogin({ commit, state }, params) {
        let obj = {
            username: state.username,
            password: state.password
        }
        let data = await login(obj);
        if (data.status) {

            params.push("/home");
            commit("handleLogin", data.userName)
            console.log(data.userName)
        } else {
            commit("handleFailed")
        }

    },
    //注册
    async handleRegister({ commit, state }, params) {
        let obj = {
            username: state.username,
            password: state.password
        }
        let data = await register(obj);
        console.log(data.status)
        if (data.status) {
            params.push("/preson");
            commit("handleRegister", data.userName)
            console.log(data)
        } else {
            alert("用户名已被注册")
        }

    },
    // handlecolor({commit,state}){
    //     if(state.username = "ddd"){
    //         commit("handlecolor")
    //     }
            
        
    // }
}