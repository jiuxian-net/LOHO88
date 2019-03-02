<template>
    <div class="register">
        <Registerheader-com/>
        <Registerinput-com/>
    </div>
</template>
<script>
import Registerheader from "./registerheader"
import Registerinput from "./registerinput"
export default {
    
    components : {
        "Registerheader-com" : Registerheader,
        "Registerinput-com" : Registerinput,
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