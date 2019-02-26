import {HomeData} from "../../apis/home";
export default {
   async handleHomeData(){
        let data = await HomeData({os:3});
        console.log(data);
    }
}