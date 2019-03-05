<template>
    <div class="imgtext" v-html="text">
        
    </div>
</template>
<script>
import Vuex from "vuex"
export default {
    computed: {
        ...Vuex.mapState({
            text : state=>state.product.txtcontent,
        })
    },
}
</script>
<style lang="scss" scoped>
    
</style>