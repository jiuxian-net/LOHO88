<template>
    <div class="select">
        <Tapbar-com @handleToggle="handleToggle"/>
        <Component :is="com"></Component>
    </div>
</template>
<script>
import Tapbar from "./tapbar"
import Mobile from "./mobile"
import Normal from "./normal"

export default {
    data(){
        return {
            com : "Mobile-com"
        }
    },
    components : {
        "Tapbar-com" : Tapbar,
        "Mobile-com" : Mobile,
        "Normal-com" : Normal,        
    },
    methods: {
        handleToggle(index){
            switch(index){
                case 0:
                    this.com = "Mobile-com";
                    break;
                case 1:
                    this.com = "Normal-com"
                    break;
            }
        }
    },

    
}
</script>
<style lang="scss" scoped>
   
</style>