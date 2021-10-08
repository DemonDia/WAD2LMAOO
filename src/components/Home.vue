<template>
<div class = "page">
<Navbar :usertype ="usertype"/>
<div class = "pageContent">
  <!-- {{usertype}} -->
  <div v-if="usertype ==='employer'" class = "employer-projects">
<EmployerProject :projectName ="'Proj1'" :projectAssignees = "'Ruby Kurosawa'" :projectAssigned = "'14/7/2021'"
:projectDue ="'14/11/2021'" :projectStatus = "'incomplete'"  :projectReward = "'500'"/>
<EmployerProject :projectName ="'Proj2'" :projectAssignees = "'Karin'" :projectAssigned = "'11/6/2021'"
:projectDue ="'12/10/2021'" :projectStatus = "'incomplete'"  :projectReward = "'460'"/>
<EmployerProject :projectName ="'Proj2'" :projectAssignees = "'Karin'" :projectAssigned = "'11/6/2021'"
:projectDue ="'12/10/2021'" :projectStatus = "'incomplete'"  :projectReward = "'460'"/>
<EmployerProject :projectName ="'Proj2'" :projectAssignees = "'Karin'" :projectAssigned = "'11/6/2021'"
:projectDue ="'12/10/2021'" :projectStatus = "'incomplete'"  :projectReward = "'460'"/>
<EmployerProject :projectName ="'Proj2'" :projectAssignees = "'Karin'" :projectAssigned = "'11/6/2021'"
:projectDue ="'12/10/2021'" :projectStatus = "'incomplete'"  :projectReward = "'460'"/>
<AddItem/>

  </div>
  <div v-else>
  </div>
</div>
</div>
    
</template>
<script>
// import { onBeforeMount } from '@vue/runtime-core'
import Navbar from "./Navbar.vue"
import EmployerProject from "./EmployerProject.vue"
import AddItem from "./AddItem.vue"

export default {
    name:"Home",
      components: {
    Navbar,
    EmployerProject,
    AddItem
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
  padding-top:60px;
  padding-bottom:60px;
}
</style>