<template>
  <div  class = "employer-projects page-bg mb-4"> 
    <Navbar/>
    
    <section class="panel mx-4">
      <div><h1 class="heading">Projects</h1></div>
    <a href="#" class=" btn btn-success btn-xs mb-3" style="float:right" @click="create()"> Create New Project</a>
    <table class="table table-hover p-table">
        <thead>
        <tr>
            <th>Project Name</th>
            <th>Team Member</th>
            <th>Assigned Date</th>
            <th>Project Due</th>
            <th>Project Status</th>
            <th>Rewarded Points</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody style="width:100%">
          <!-- <div class = "contentz container-fluid"> -->
            <!-- <div class= "row"> -->

              <tr v-for="(proj, index) in projs" v-bind:key="index">
                <!-- {{proj.project_id}} -->
                <!-- <router-link to ="/projects/project" v-for="(proj, index) in projs" v-bind:key="index"
                  style = "text-decoration:none">
                  <EmployerProject :projectName="proj.project_name" :projectAssignees ="proj.assignee" :projectAssigned ="proj.assigned_date"
                  :projectDue ="proj.due_date" :projectStatus ="proj.project_status"  :projectReward ="proj.reward"/>
                </router-link> -->
                <td class="p-name">
                  {{proj.project_name}}
                    <!-- {{proj.project_name}} -->
                </td>
                <td class="p-team">
                    {{proj.assignee}}
                </td>
                <td class="p-assignedDate">
                    {{proj.assigned_date}}
                </td>
                <td class="p-Due">
                    {{proj.due_date}}
                </td>
                <td class="p-status">
                    {{proj.project_status}}
                </td>
                <td class="p-reward">
                    {{proj.reward}}
                </td>
                <td>
                    <a href="#" class="btn btn-primary btn-xs" @click="project(proj.project_id)"><i class="fa fa-folder"></i> View </a>
                    <a href="#" class="btn btn-danger btn-xs" @click="delete_proj(proj.project_id)"><i class="fa fa-trash-o"></i> Delete </a>
                </td>
              </tr>

            <!-- </div> -->
          
          <!-- </div> -->
        </tbody>
    </table>
</section>
          
        <!-- <div class="col-xl-3 col-lg-4 col-md-6">
          <AddItem :itemType="'project'"/>
        </div>  -->
       



    <!-- Modal -->
    <!-- <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
    </div> -->
  </div>
</template>
<script>
// import EmployerProject from "./EmployerProject.vue"
import Navbar from  "./Navbar.vue"
// import AddItem from "./AddItem.vue"
import mixin from "../mixin"
import firebase from "firebase/compat"
export default {
    name:"Projects",
    components: {
      // EmployerProject,
      Navbar}, //AddItem,
    // data(){
    //   return{
    //     projectName:"",
    //     projectDate:null      
    //   }

    // },
    mixins:[mixin],
      //     beforeMount(){
      //  this.getUserType()
      //   if(this.usertype != "employer"){
      //       this.$router.push("/")
      //   }
        // else{
        //     this.$router.push("/authenticate")
        // }
  // },
    data () {
      return {
        projs: []
      }
    },
    methods: {
      project(projId) {
        this.$router.push('/projects/project/'+projId)
      },
      create() {
        this.$router.push('/projects/add')
      },
      delete_proj(projID) {
        firebase.database().ref('projects/' + projID).remove()
            .then(function() {
                alert("Project Deleted")
            })
      }
    },
    created() {
      firebase.database().ref('projects/' ).on('value', (snapshot) => {
        this.projs = []
        snapshot.forEach((childSnapshot) => {
          var proj = childSnapshot.val();
          this.projs.push(proj);
        })
        console.log(this.projs)
      }); 
    }
}
</script>
<style scoped>

.btn {
  margin-right: 10px;
}

th{
    width:50%;
    text-align: center;
}
td{
    width:100%;
    text-align: center;
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

.member{
    height: 50px;
    width: 50px;
}

section{
  margin-top: 100px;
}

.panel{
  margin-top: 80px;
}

.heading{
    box-shadow: 0px 5px 0px rgba(83, 90, 249, 0.81);
    width: max-content;
    margin: auto;
} 
</style>