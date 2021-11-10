
<template>
<!-- <table class="table table-hover p-table"> -->
        <!-- <tbody class="projects"> -->
        <tr>
            <td class="p-name">
                {{projectName}}
            </td>
            <td class="p-team">
                {{projectAssignees}}
            </td>
            <td class="p-assignedDate">
                {{projectAssigned}}
            </td>
            <td class="p-Due">
                {{projectDue}}
            </td>
            <td class="p-status">
                {{projectStatus}}
            </td>
            <td class="p-reward">
                {{projectReward}}
            </td>
            <td>
                <a href="#" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> View </a>
                <a href="#" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> Delete </a>
            </td>
        </tr> 
    <!-- </tbody>  -->
<!-- </table> -->
</template>
<script>
// import EmployerProject from "./EmployerProject.vue"
// import Navbar from  "./Navbar.vue"
// import AddItem from "./AddItem.vue"
import mixin from "../mixin"
export default {
    name:"EmployerProject",
    mixins:[mixin],
    props:["projectName","projectAssignees","projectAssigned","projectDue","projectStatus",'projectReward'],
      //     beforeMount(){
      //  this.getUserType()
      //   if(this.usertype != "employer"){
      //       this.$router.push("/")
      //   }
        // else{
        //     this.$router.push("/authenticate")
        // }
  // },
    methods: {
        project() {
            this.$router.push('/projects/project')
        }
    }
}
</script>
<style scoped>
.table {
    margin: auto;
}
th{
    width:50%;
    text-align: right;
}
td{
    width:100%;
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