<template>
    <div class="register">
        <Registerheader-com/>
        <Registerinput-com/>
        <Registerfooter-com/>
    </div>
</template>
<script>
import Registerheader from "./registerheader"
import Registerinput from "./registerinput"
import Registerfooter from "./registerfooter"
export default {
    
    components : {
        "Registerheader-com" : Registerheader,
        "Registerinput-com" : Registerinput,
        "Registerfooter-com" : Registerfooter
    }
}
</script>
<style lang="scss" scoped>
    .register{
        height: 100%;
        width: 100%;
        background: #f5f5f5;
    }
</style>