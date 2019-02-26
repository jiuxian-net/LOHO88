<template>
  <div id="home">
    <Header-com/>
  
  </div>
</template>

<script>
import Vuex from "vuex";
import Header from "../common/header"
export default {
  components: {
    "Header-com" : Header
  },
  created () {
    this.handleHomeData();
  },
  methods: {
    ...Vuex.mapActions({
      handleHomeData:"home/handleHomeData"
    })
  },
}
</script>


<style scoped>

</style>
