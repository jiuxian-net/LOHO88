export default{
    handleProductGoodsData(state,params){
        state.info = params.info;
        state.models = params.models;
        state.arguments = params.arguments;
        state.unioned = params.unioned;
        state.txtcontent = params.txtcontent;
        console.log(params)
        state.txtcontent = params.txtcontent.replace(/src=".+src="/g,'src="http://image.loho88.com');
         
       
        

    },
    handleProductPeddleData(state,params){
        state.list = params;
        console.log(params)
    }
}