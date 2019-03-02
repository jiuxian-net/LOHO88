<template>
  <div id="my">
    <Myheader-com/>
    <Mybanner-com/>
    <Loginfooter-com/>
    <Selectcard-com/>
  </div>
</template>

<script>
import Myheader from "./components/myheader"
import Mybanner from "./components/mybanner"
import Loginfooter from "./components/loginfooter"
import Selectcard from "./components/selectcard"
export default {
  components : {
    "Myheader-com" : Myheader,
    "Mybanner-com" : Mybanner,
    "Loginfooter-com" : Loginfooter,
    "Selectcard-com" : Selectcard,
  }
}
</script>


<style scoped>
  #my{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
  }
</style>