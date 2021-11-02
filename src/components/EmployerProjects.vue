<template>
  <div  class = "employer-projects page-bg mb-4"> 
    <Navbar/>
    <h1 id = "projects-header"  class="mb-4">Projects</h1>
    <div class = "contentz container-fluid">
      <div class= "row">

        <div class="col-xl-3 col-lg-4 col-md-6">
          <router-link to ="/projects/project"
            style = "text-decoration:none">
            <EmployerProject :projectName ="'Proj2'" :projectAssignees = "'Karin'" :projectAssigned = "'11/6/2021'"
            :projectDue ="'12/10/2021'" :projectStatus = "'incomplete'"  :projectReward = "'460'"/>
          </router-link>
        </div>
        
        <div class="col-xl-3 col-lg-4 col-md-6">
          <router-link to ="/projects/project"
            style = "text-decoration:none">
            <EmployerProject :projectName ="'Proj2'" :projectAssignees = "'Karin'" :projectAssigned = "'11/6/2021'"
            :projectDue ="'12/10/2021'" :projectStatus = "'incomplete'"  :projectReward = "'460'"/>
          </router-link>
        </div>
          
        <div class="col-xl-3 col-lg-4 col-md-6">
          <router-link to ="/projects/project"
            style = "text-decoration:none">
            <EmployerProject :projectName ="'Proj2'" :projectAssignees = "'Karin'" :projectAssigned = "'11/6/2021'"
            :projectDue ="'12/10/2021'" :projectStatus = "'incomplete'"  :projectReward = "'460'"/>
          </router-link>
        </div>
          
        <div class="col-xl-3 col-lg-4 col-md-6">
          <router-link to ="/projects/project"
            style = "text-decoration:none">
            <EmployerProject :projectName ="'Proj2'" :projectAssignees = "'Karin'" :projectAssigned = "'11/6/2021'"
            :projectDue ="'12/10/2021'" :projectStatus = "'incomplete'"  :projectReward = "'460'"/>
          </router-link>
        </div>
        
        <div class="col-xl-3 col-lg-4 col-md-6">
          <router-link to ="/projects/project"
            style = "text-decoration:none">
            <EmployerProject :projectName ="'Proj2'" :projectAssignees = "'Karin'" :projectAssigned = "'11/6/2021'"
            :projectDue ="'12/10/2021'" :projectStatus = "'incomplete'"  :projectReward = "'460'"/>
          </router-link>
        </div>
        

        <div class="col-xl-3 col-lg-4 col-md-6">
          <router-link to ="/projects/project"
            style = "text-decoration:none">
            <EmployerProject :projectName ="'Proj2'" :projectAssignees = "'Karin'" :projectAssigned = "'11/6/2021'"
            :projectDue ="'12/10/2021'" :projectStatus = "'incomplete'"  :projectReward = "'460'"/>
          </router-link>
        </div>   
          
        <div class="col-xl-3 col-lg-4 col-md-6">
          <AddItem :itemType="'project'"/>
        </div> 
       
      </div>
    
    </div>


    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title" id="exampleModalLabel" align="center">Add new project</h2>
          </div>
          <div class="modal-body">
            <table class="table">
              <tr>
                <th scope = "row">Project Name</th>
                <td><input type = "text" class = "form-control" /></td>
              </tr>
              <tr>
                <th scope = "row">Rewarded points:</th>
                <td><input type = "number" class = "form-control" /></td>
              </tr>
              <tr>
                <th scope = "row">Project due:</th>
                <td><input type = "date" class = "form-control" /></td>
              </tr>
              <tr>
                <th scope = "row">Add assignees:</th>
                <td><input type = "text" class = "form-control" /></td>
              </tr>
            </table>
            <button class = "btn new-project-btn" data-dismiss="modal">Assign project</button>
          </div>
        
        </div>
        <h5>Click anywhere to cancel</h5>
      </div>
    </div>
  </div>
</template>
<script>
import EmployerProject from "./EmployerProject.vue"
import Navbar from  "./Navbar.vue"
import AddItem from "./AddItem.vue"
import mixin from "../mixin"
export default {
    name:"Projects",
    components: {EmployerProject,AddItem,Navbar},
    mixins:[mixin],
          beforeMount(){
       this.getUserType()
        if(this.usertype != "employer"){
            this.$router.push("/")
        }
        // else{
        //     this.$router.push("/authenticate")
        // }
  },
}
</script>
<style scoped>
.contentz{
    margin-top:80px;
    padding: auto;
}
/* .employer-projects{
      display: flex;
    flex-wrap: wrap;
} */

#projects-header{
  width: max-content;
  margin: auto;
  margin-top: 80px;
  box-shadow: 0px 5px 0px rgba(83, 90, 249, 0.81);
}
.new-project-btn{
  background: linear-gradient(0deg, #504DFF, #504DFF), rgba(78, 74, 255, 0.61);
  border-radius: 5px;
  color: white;
}
.contentz{
  margin-top: 10px;
}
.modal-title{
  margin: auto;
}
.modal-dialog h5{
  color:white;
}
.page{
    min-height: 100vh;
    width:100%;
    /* display: flex; */
}
.pageContent{
  min-height:100vh;
  /* margin-top:60px; */
  background:rgba(248, 248, 248, 1)
;
  padding-top:60px;
  padding-bottom:60px;
}

</style>