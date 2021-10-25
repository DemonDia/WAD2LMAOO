<template>
<div class="card projectCard" style="width: 18rem;">
  <div class="card-header project-title">
    {{projectName}}
  </div>
  <div class = "card-body">
      <!-- <AccountCheckIcon/> -->
  <!-- <div class = "iconContainer">
        <span class="material-icons">
build
</span>
  Edit</div> -->

      <div class = "project-details">
    <table class="table">
        <tr>
            <th scope = "row" align="end">Assigned to:</th>
            <td>{{projectAssignees}} </td>
        </tr>
        <tr>
            <th scope = "row">Assigned date:</th>
            <td>{{projectAssigned}} </td>
        </tr>
        <tr>
            <th scope = "row">Project due:</th>
            <td>{{projectDue}} </td>
        </tr>
        <tr>
            <th scope = "row">Status:</th>
            <td>{{projectStatus}} </td>
        </tr>
        <tr>
            <th scope = "row">Reward:</th>
            <td>{{projectReward}} </td>
        </tr>

    </table>
    <button class = "btn project-btn">Project Details</button>
      </div>


      </div>

  </div>

    
</template>
<script>
// import { AccountCheckIcon } from '@icons/material'
import mixin from "../mixin"
export default {
    name:"EmployerProject",
    mixins:[mixin],
    props:["projectName","projectAssignees","projectAssigned","projectDue","projectStatus",'projectReward'],
      beforeMount(){
       this.getUserType()
        if(this.usertype !== "employer"){
            this.$router.push("/")
        }
  },
}
</script>
<style>
th{
    width:50%;
    text-align: right;
}
td{
    width:50%;
    text-align: left;
}
.projectCard{
   
    margin:10px;
    border: none;
    height:360px;
}
.project-title{
    background: linear-gradient(57.11deg, #6D9DF8 -4.9%, #6461FF 101.23%, rgba(109, 157, 248, 0.64) 101.24%, rgba(109, 157, 248, 0) 101.24%);
     color: white;
}
.project-btn{
background: linear-gradient(0deg, #504DFF, #504DFF), rgba(78, 74, 255, 0.61);
border-radius: 5px;
color: white;
}
.iconContainer{
    display: flex;
    align-items: center;
    justify-content:center;
}
</style>