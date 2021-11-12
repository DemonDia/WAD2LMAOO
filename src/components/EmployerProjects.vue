<template>
  <!-- <div  class = "mb-4">  -->
    <Navbar :pageType = "'Projects'"/>
    
    <section class="panel mx-2" >
      <div><h1 class="heading">Projects</h1></div>
      <a href="#" class=" btn btn-success btn-xs mb-3 btn_create container-fluid" style="float:right" @click="create()"> Create New Project</a>

      <div id="no-more-tables">
      <table class="table table-hover p-table">

        <thead>
        <tr class="text-break">
            <th>Project Name</th>
            <th>Team Member</th>
            <th>Assigned Date</th>
            <th>Due Date</th>
            <th>Project Status</th>
            <th>Rewarded Points</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
          <!-- <div class = "contentz container-fluid"> -->
            <!-- <div class= "row"> -->

              <tr v-for="(proj, index) in projs" v-bind:key="index">
                <!-- {{proj.project_id}} -->
                <!-- <router-link to ="/projects/project" v-for="(proj, index) in projs" v-bind:key="index"
                  style = "text-decoration:none">
                  <EmployerProject :projectName="proj.project_name" :projectAssignees ="proj.assignee" :projectAssigned ="proj.assigned_date"
                  :projectDue ="proj.due_date" :projectStatus ="proj.project_status"  :projectReward ="proj.reward"/>
                </router-link> -->
                <td class="p-name text-break">
                  {{proj.project_name}}
                    <!-- {{proj.project_name}} -->
                </td>
                <td class="p-team text-break">
                    {{proj.assignee}}
                </td>
                <td class="p-assignedDate text-break">
                    {{proj.assigned_date}}
                </td>
                <td class="p-Due text-break">
                    {{proj.due_date}}
                </td>
                <td class="p-status mw-100 text-break">
                    {{proj.project_status}}
                </td>
                <td class="p-reward text-break">
                    {{proj.reward}}
                </td>
                <td>
                    <a href="#" class="btn btn-primary btn-xs btn_view" @click="project(proj.project_id)"><i class="fa fa-folder"></i> View </a>
                    <a href="#" class="btn btn-danger btn-xs btn_delete" @click="delete_proj(proj.project_id)"><i class="fa fa-trash-o"></i> Delete </a>
                </td>
              </tr>

            <!-- </div> -->
          
          <!-- </div> -->
        </tbody>
    </table>
    </div>
</section>
  <!-- </div> -->
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
        projs: [],
        tasks:[]
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
        console.log(projID)
// find tasks
      firebase.database().ref('tasks/').on('value', (snapshot) => {
          this.tasks = []
          snapshot.forEach((childSnapshot) => {
              var task = childSnapshot.val();
              if(task.project_id ==projID){
                this.tasks.push(task.task_id)
              }
              // this.tasks.push(user);
          });
      }); 






        // delete project
        firebase.database().ref('projects/' + projID).remove()
            .then(function() {
                alert("Project Deleted")
            })

            // delete tasks

      console.log(this.tasks)
            // console.log(this.tasks)
      this.tasks.forEach((task)=>{
        // console.log(task)

        firebase.database().ref('tasks/' + task).remove()
            .then(function() {
                console.log("Task Deleted")
            })


      }
      )


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

.btn_create{
  width: 200px;
  margin-right: 20px;
}

.btn_view{
  width: 55px;
  height: 35px;
  margin-bottom: 5px;
  margin-left: 3px;
  margin-right: 3px;
  text-align: center;
  vertical-align: middle;
  padding: 0px;
  padding-top: 5px;
}
.btn_delete{
  width: 55px;
  height: 35px;
  margin-bottom: 5px;
  margin-left: 3px;
  margin-right: 3px;
  text-align: center;
  vertical-align: middle;
  padding: 0px;
  padding-top: 5px;
}

table{
  /* table-layout: auto; */
  width: 100%;
  overflow-x: auto;
}

th{
    width:50%;
    min-width: 250px;
    text-align: center;
}
td{
    text-align: center;
    min-width: 250px;
    
}

.panel{
  margin-top: 80px;
  width: 100%;
  direction: flex;
  justify-content: center;
}

.heading{
    box-shadow: 0px 5px 0px rgba(83, 90, 249, 0.81);
    width: max-content;
    margin: auto;
    margin-bottom: 20px;
} 

</style>