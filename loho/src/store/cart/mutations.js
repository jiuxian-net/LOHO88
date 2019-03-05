export default{
    handleClick(state){
        state.flag = !state.flag
		// state.url = state.url.replace(/(src="|vip-src=")/,'src="http://image.loho88.com');
    },
    handleClose(state){
        state.flag = !state.flag
    }
}
