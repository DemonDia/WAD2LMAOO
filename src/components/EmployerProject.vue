
<template>
<div class="card projectCard w-auto border border-secondary" style="width: 18rem;">
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
             {{projectId}}
            <table class="table">
                <!-- <tr>
                    <th scope = "row" align="end">Assigned to:</th>
                    <td>{{projectAssignees}} </td>
                </tr> -->
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
                <!-- <tr>
                    <th scope = "row">Reward:</th>
                    <td>{{projectReward}} </td>
                </tr> -->

            </table>
            <button class = "btn project-btn" v-on:click = "viewProject(projectId)">Project Details</button>
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
    props:["projectName","projectAssigned","projectDue","projectStatus","projectId"],
      beforeMount(){
       this.getUserType()
        if(this.usertype !== "employer"){
            this.$router.push("/")
        }
  },
    methods:{
    viewProject(id){
      this.$router.push("/projects/project/"+id)
    }
  }
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
    max-width: 100%;
}
.project-btn{
/* background: linear-gradient(0deg, #504DFF, #504DFF), rgba(78, 74, 255, 0.61); */
    background: rgb(253, 198, 97);
    border-radius: 5px;
    color: black;
    border: 1px solid black;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.19);
}
.iconContainer{
    display: flex;
    align-items: center;
    justify-content:center;
}
</style>