<template>
    <div id="footer">
        <ul>
            <li v-for="(item) in tabBar" :key="item.id">
                <router-link :to="{name:item.name}">
                    <i class="iconfont" v-html="item.icon"></i>
                    <span>{{item.title}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    data(){
        return {
            tabBar:[
                {
                    name:"home",
                    title:"首页",
                    icon:"&#xe6d3;"
                },
                {
                    name:"group",
                    title:"团购",
                    icon:"&#xe618;"
                },
                {
                    name:"cart",
                    title:"购物车",
                    icon:"&#xe600;"
                },
                {
                    name:"shop",
                    title:"附近体验店",
                    icon:"&#xe63b;"
                },
                {
                    name:"my",
                    title:"我的",
                    icon:"&#xe61a;"
                }
            ]
        }
    }
}
</script>

<style>
    #footer{
        width: 100%;
        height: 1.08rem;
        position: fixed;
        left: 0;
        bottom: 0;
        background: #fff;
        border-top: .01rem solid #c1c1c1;
    }

    #footer>ul{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }
    #footer>ul>li,#footer>ul>li>a{
        width: 100%;
        height: 100%;
    }
    #footer>ul>li>a{
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
    }
     
     #footer>ul>li>a>i{
         font-size: .5rem;
         font-weight: 900;
     }
      #footer>ul>li>a>span{
          font-size: .26rem;
          font-weight: 500;
      }

</style>