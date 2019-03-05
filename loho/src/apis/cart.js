import http from  '../utils/http.js';

const cartAdd=()=>{http("get","/api/cart/list/all")};
	
export default {
	cartAdd
}