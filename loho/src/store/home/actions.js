import {HomeData} from "../../apis/home";
import {HomeDataGoods} from "../../apis/home";

export default {
   async handleHomeData({commit}){
        let data = await HomeData({});
        console.log(data.result);
        commit("handleHomeData",data.result)
    },
    async handleHomeDataGoods({commit}){
        let data = await HomeDataGoods({});
        console.log(data.result);
        commit("handleHomeDataGoods",data.result)
        
    },
	
}