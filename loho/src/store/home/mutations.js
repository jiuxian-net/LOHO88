export default {
    handleHomeData(state,params){
        state.focus = params.focus;
        state.cates = params.cates;
        state.popular = params.popular;
        state.classify = params.classify;
        
        console.log(state.classify[0].img)
    }
}