<template>
    <div class="registerfooter" @click="handlebtn()">
        注册
    </div>
</template>
<script>
import Vuex from "vuex"
export default {
    methods: {
        ...Vuex.mapActions({
            handleRegister : "user/handleRegister"
        }),
        handlebtn(){
            this.handleRegister(this.$router)
        }
    }    
}
</script>
<style lang="scss" scoped>
.registerfooter{
    width: 100%;
    height: 1.2rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background: red;
    font-size: .4rem;
    text-align: center;
    line-height: 1.2rem;
    color: #fff;
    font-weight: 700;
}
   
</style>