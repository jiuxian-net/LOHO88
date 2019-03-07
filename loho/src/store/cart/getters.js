export default{
    lenting(state){
		console.log(state)
		let pirce =0;
		let count = 0
		var status = true;
		state.info.map((value,index)=>{
			if(value.flag){
				count += (1*value.isOnSale);
				pirce += (value.shopPrice*value.isOnSale);
				
			}
		})
		return {count,pirce}
	},
	
}