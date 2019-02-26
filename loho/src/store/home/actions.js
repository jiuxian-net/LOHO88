import {HomeData} from "../../apis/home";
export default {
   async handleHomeData(){
        let data = await HomeData({});
        console.log(data);
    }
}