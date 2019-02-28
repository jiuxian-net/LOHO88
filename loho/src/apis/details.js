import http from "../utils/http";

const Details = (url,params) =>http("get",url,params)
export default{
	Details
}
