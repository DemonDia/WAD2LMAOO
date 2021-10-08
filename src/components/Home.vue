<template>
<div class = "page">
<Navbar :usertype ="usertype"/>
<div class = "pageContent">
  <!-- {{usertype}} -->
  <div v-if="usertype ==='employer'">
GG
  </div>
  <div v-else>
  </div>
</div>
</div>
    
</template>
<script>
// import { onBeforeMount } from '@vue/runtime-core'
import Navbar from "./Navbar.vue"
export default {
    name:"Home",
      components: {
    Navbar
  },
  props:["usertype"],
  data(){
    return{
    }
  },
}
</script>
<style>
.page{
    min-height: 100vh;
    width:100%;
    /* display: flex; */
}
.pageContent{
  min-height:100vh;
  margin-top:60px;
  background:grey;
}
</style>