import {CityData} from "../../apis/city";
export default {
   async handleCityData({commit}){
        let data = await CityData({});
        console.log(data.result);
        commit("handleCityData",data.result)
    }
}