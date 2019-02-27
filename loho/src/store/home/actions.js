import {HomeData} from "../../apis/home";
export default {
   async handleHomeData({commit}){
        let data = await HomeData({});
        console.log(data.result);
        commit("handleHomeData",data.result)
    }
}