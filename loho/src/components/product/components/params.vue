<template>
    <div class="params">
     <ul>
         <li v-for="(item) in argument" :key="item.id"><p class="name">{{item.tname}}</p><p>{{item.val}}</p></li>
     </ul>
    </div>
</template>
<script>
import Vuex from "vuex"
export default {
    created () {
        console.log()
    },
    computed: {
        ...Vuex.mapState({
            argument : state=>state.product.arguments
        })
    },
}
</script>

<style lang="scss" scoped>
    .params{
        width: 100%;
        ul{
            width: 100%;
            background: #fff;
            li{
                padding: .4rem .3rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-top: 1px solid #e1e1e1;
               
                font-size: .3rem;
                .name{
                    color: #c1c1c1;
                }
            }
        }
    }
</style>