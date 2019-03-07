import cart from   "../../apis/cart";

export default{
	changestatus({commit},index){
		commit("changestatus",index)
	},
     handleAddcart({commit}){
		commit("handleAddcart")
	},
	subtrack({commit},params){
		commit("subtrack",params)
	},
	subadd({commit},params){
		commit("subadd",params)
	},
	delone({commit},params){
		
		commit("delone",params)
	}
	
}