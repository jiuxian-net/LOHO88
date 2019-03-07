export default{
    handleProductGoodsData(state,params){
        state.info = params.info;
        state.models = params.models;
        state.arguments = params.arguments;
        state.unioned = params.unioned;
        state.txtcontent = params.txtcontent;
        state.txtcontent = params.txtcontent.replace(/\<p\>\<img ([\s\S]*?)\/>\<\/p\>/g,(match)=>{
			return match.replace(/<img src=".+src="/g,'<img style="width:100%;" src="http://image.loho88.com');
		});
    },
    handleProductPeddleData(state,params){
        state.list = params;
    },
	handlegocart(state){
		state.info.flag = "true";
		var info = JSON.parse(localStorage.getItem("info")||'[]');
		info.push(state.info)
		localStorage.setItem("info",JSON.stringify(info))
		
		
		
		
	}
}