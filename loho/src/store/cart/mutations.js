export default{
	handleClick(state){
	    state.flag = !state.flag
	},
	handleClose(state){
	    state.flag = !state.flag
	},
    handleAddcart(state){
		var info = JSON.parse(localStorage.getItem("info")|| "[]");
		state.info = info;
    },
    changestatus(state,params){
		state.info[params].flag = !state.info[params].flag;
		var status = true;
		state.info.map((value,index)=>{
			if(!value.flag){
				status = false;
			}
		})
		
    },
	allchangestatus(state,Params){
		state.show = !state.show;
		if(state.show){
			state.info.map((value,index)=>{
				value.flag = true;
			})
		}else{
			state.info.map((value,index)=>{
				value.flag = false;
			})
		}
	},
	subtrack(state,index){
		let num = state.info[index].isOnSale
		let flag = state.info[index].flag;
		var count = 0;
		if(flag){
			if(num>1){
				num--
				count = num
			}
		}
		state.info[index].isOnSale =num
	},
	subadd(state,index){
		var  num = state.info[index].isOnSale
		var  flag = state.info[index].flag;
		var count = 0;
		if(flag){
			num++
		}
		state.info[index].isOnSale=num
		
	},
	delone(state,index){
		if(state.info[index].flag){
			let del = state.info[index];
			state.info.splice(index,1);
			var info = JSON.parse(localStorage.getItem("list") || '[]');
			localStorage.info = JSON.stringify(info.splice(index,1))
// 			if(state.info.length == 0){
// 				state.show = !state.show
// 			}
		}
		
	},	
}
