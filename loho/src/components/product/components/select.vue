<template>
    <div class="selectCard">
        <Tabbar-com @handleToggle="handleToggle"/>
        <component :is="flag"></component>
    </div>
</template>
<script>
import Tabbar from "./tabbar"
import Imgtext from "./imgtext"
import Params from "./params"
import Eval from "./eval"
export default {
    data(){
        return {
            flag : "Imgtext-com"
        }
    },
    components : {
        "Tabbar-com" : Tabbar,
        "Imgtext-com" : Imgtext,
        "Params-com" : Params,
        "Eval-com" : Eval

    },
    methods: {
        handleToggle(index){
            switch(index){
                case 0:
                this.flag = "Imgtext-com";
                break;
                case 1:
                this.flag = "Eval-com";
                break;
                case 2:
                this.flag = "Params-com"
                
            }
        }
    }

}
</script>
<style lang="scss" scoped>
    
</style>