<template>
    <div class="tabbar">
        <div class="select" v-for="(item,index) in tabs" :key="item.id" @click="handleClick(index)">{{item}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            tabs : [
                "图文详细",
                "商品评价",
                "商品参数",
            ]
        }
    },
    methods: {
        handleClick(index){
            this.$emit("handleToggle",index);
        }
    }
}
</script>
<style lang="scss" scoped>
    .tabbar{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 1rem;
        background: #fff;
        
         border-top: 1px solid #e1e1e1;
        .select{
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: 1rem;
        }
    }
</style>