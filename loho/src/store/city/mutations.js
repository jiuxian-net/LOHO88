export default {
    handleCityData(state,params){ 
		console.log(params)
       state.hot = params.hot;
	   state.letters = params.letters;
	   console.log(state.hot)
    }
}