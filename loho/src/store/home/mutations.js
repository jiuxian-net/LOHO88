export default {
    handleHomeData(state,params){
        state.focus = params.focus;
        state.cates = params.cates;
		// console.log(state.cates)
        state.popular = params.popular;
        state.classify = params.classify;
        
        console.log(state.classify[0].img)
    },
    handleHomeDataGoods(state,params){
        
        state.goods = params.data;
        // console.log(state.goods)

    },
	
}