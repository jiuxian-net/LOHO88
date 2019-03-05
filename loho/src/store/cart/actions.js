import cart from   "../../apis/cart";

export default{
    async handleAddcart(){
		let data = await cart.cartAdd();
		console.log(data);
	}
}