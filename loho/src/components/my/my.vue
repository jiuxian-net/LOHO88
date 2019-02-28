<template>
  <div id="my">
    <Myheader-com/>
    <Mybanner-com/>
  </div>
</template>

<script>
import Myheader from "./components/myheader"
import Mybanner from "./components/mybanner"
export default {
  components : {
    "Myheader-com" : Myheader,
    "Mybanner-com" : Mybanner,
    
  }
}
</script>


<style scoped>

</style>