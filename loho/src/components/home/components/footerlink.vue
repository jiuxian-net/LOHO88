<template>
    <div class="footer">
        <div class="welcom">
            <div class="right">
                <a href="##"><i class="iconfont">&#xe612;</i><span>欢迎到体验店试戴</span></a>
            </div>
            <div class="left">
                <a href="##"><i class="iconfont">&#xe616;</i><span>预约热线:400-887-1920</span></a>
            </div>
        </div>
        <div class="footer_logo">
            <div class="img_box">
                <img src="assets/images/logo.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .footer{
        width: 100%;
        background: #1d1d1d;
        .welcom{
            width: 100%;
            height: 1.6rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: .5rem 0;
            border-bottom: 1px solid #000;
            .left{
                border-right: 1px solid #000;
                
            }
            div{
                width: 50%;
                height: 1.6rem;
                text-align: center;
                line-height: 1.6rem;
                a{
                    i{
                        color: red;
                        font-size: .35rem;
                        
                    }
                    span{
                        color: #ffffff;
                        
                    }
                }

            }
        }
    }
</style>