<template>
  <div id="app">
    <router-view/>
    <Footer-com/>
  </div>
</template>

<script>
import Footer from "./components/common/footer";
export default {
  name: 'App',
  components:{
    "Footer-com":Footer
  }
}
</script>

<style>

</style>
