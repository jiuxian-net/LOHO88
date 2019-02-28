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
                <img src="http://m.loho88.com/assets/images/logo.png" alt="">
            </div>
        </div>
        <div class="link">
            <p>ICP备案证书号：粤ICP备11106081</p>
            <p>©2005-2018 深圳市乐活电子商务有限公司-时尚眼镜品牌 版权所有，并保留所有权利</p>
            <p>公司地址：深圳市福田区彩田路彩虹新都彩虹大厦29B</p>
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
        .footer_logo{
            width: 100%;
            padding: .5rem 0;
            .img_box{
                border-bottom: 1px solid #000000;
                img{
                    width: 22.7%;
                    vertical-align: middle;
                    margin: 0 auto;
                }
            }
        }
        .link{
            width: 100%;
            p{
                width: 100%;
                text-align: center;
                color: #ffffff;
                padding: .1rem 0;
            }
        }
        
        
    }
    
</style>