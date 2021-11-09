<template>
  <div  class = "employer-projects page-bg mb-4"> 
    <Navbar/>
    <h1 id = "projects-header"  class="mb-4">Projects</h1>
    <div class = "contentz container-fluid">
      <div class= "row">
        <!-- {{projects}} -->
        <div class="col-xl-3 col-lg-4 col-md-6" v-for = "project in projects" :key = "project.project_id">
          <div
            style = "text-decoration:none">
            <EmployerProject :projectName ="project.project_name" :projectAssigned = "project.assigned_date"
            :projectDue = "project.due_date"  :projectStatus = "project.project_status" :projectId = "project.project_id"/>
          </div>
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
                <td><input type = "text" class = "form-control" v-model = "projectName"/></td>
                <!-- {{projectName}} -->
              </tr>
              <!-- <tr>
                <th scope = "row">Rewarded points:</th>
                <td><input type = "number" class = "form-control" /></td>
              </tr> -->
              <tr>
                <th scope = "row">Project due:</th>
                <td><input type = "date" class = "form-control" v-model = "projectDate" /></td>
              </tr>
              <tr>
                <td>
                  <!-- {{projectDate}} -->
                </td>
                </tr>
              <!-- <tr>
                <th scope = "row">Add assignees:</th>
                <td><input type = "text" class = "form-control" /></td>
              </tr> -->
            </table>
            <button class = "btn new-project-btn" data-dismiss="modal"
            v-on:click = "addProject">Assign project</button>
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
    data(){
      return{
        projectName:"",
        projectDate:null      
      }

    },
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
  methods:{
    addProject(){
      var date = new Date() 
      var refinedDate = date.toLocaleString()
      console.log(date)
      console.log(Date(this.projectDate))
      if(this.projectName === ""){
        alert("Project name cannot be empty!")
      }
      else if(this.projectDate === null){
        alert("Project due cannot be empty!")
      }
      else if(Date(this.projectDate)< date){
        alert("Project due cannot be before today's date!")
      }
      else{
        
        refinedDate = refinedDate.split(",").join(" ")
        // var dueDate = date.toLocaleString()
        this.projects.push(
          {
"project_id": 1,
 "project_name": this.projectName, 
 "project_status": "New", 
 "assigned_date": refinedDate, 
 "due_date": this.projectDate
 , "completion_date": null

          }
        )
      }
    }
  }
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