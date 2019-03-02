export default {
    handleCityData(state,params){ 
       state.hot = params.hot;
	   state.letters = params.letters;
	   state.list = params.list;
	   console.log(state.list)
    }
}