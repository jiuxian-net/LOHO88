<template>
    <div class="cartbody">
        <div class="cart_logo"><i class="iconfont">&#xe600;</i></div>
        <p>您的购物车尚未添加商品</p>
        <p>去<a href="http://localhost:8080/#/home">Loho88眼镜生活</a>购买商品</p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .cartbody{
        width: 95%;
        height: 2.8rem;
        border: 1px solid #ddd;
        border-radius: 5px;
        background: #ffffff;
        margin: .3rem auto;
        .cart_logo{
            margin: .3rem auto;
            text-align: center;
            i{
                font-size: 1rem;
            }

        }
        p{
            margin-top: .1rem;
            text-align: center;
            font-size: .26rem;
            a{
                text-decoration: underline;
                color: orchid;
                
            }
        }
    }
</style>