<template>
<div class = "page">
    <Navbar :usertype="'employee'"/>
    <!-- <h1 id = "project-name">Project Name</h1> -->
    <!-- <div class = "task-container">
        
    <ProjectDetail/>
    <AddItem :itemType = "'task'"/>

    <div v-for = "(task,id) in tasks" :key="id">

<EmployerTask :taskStatus ="task.task_status" :taskReward="'TBC'" :taskDue="task.due_date"/>
    </div>    
    </div>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title" id="exampleModalLabel" align="center">Add new task</h2>
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

        </table>
        <button class = "btn new-task-btn" data-dismiss="modal">Add task</button>
      </div>
    

    </div>
    <h5>Click anywhere to cancel</h5>
  </div>
</div> -->







<section class="panel mx-4" style = "margin-top:60px">
      <div><h1 class="heading">{{projectName}} </h1></div>
      <router-link to = "/projects" class=" btn btn-primary btn-xs mb-3" style="float:left">Back</router-link>
    <a href="#" class=" btn btn-success btn-xs mb-3" style="float:right" @click="create"> Create New Task</a>
    <table class="table table-hover p-table">
        <thead>
        <tr>
            <th>Task Name</th>
            <th>Task Created</th>
            <th>Assignee</th>
            <th>Description</th>
            <th>Task Due</th>
            <th>Task Status</th>
            <th>Rewarded Points</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody style="width:100%">
          <!-- <div class = "contentz container-fluid"> -->
            <!-- <div class= "row"> -->

              <tr v-for="(task, index) in tasks" v-bind:key="index">
                <!-- {{proj.project_id}} -->
                <!-- <router-link to ="/projects/project" v-for="(proj, index) in projs" v-bind:key="index"
                  style = "text-decoration:none">
                  <EmployerProject :projectName="proj.project_name" :projectAssignees ="proj.assignee" :projectAssigned ="proj.assigned_date"
                  :projectDue ="proj.due_date" :projectStatus ="proj.project_status"  :projectReward ="proj.reward"/>
                </router-link> -->
                <td class="p-name">
                  {{task.task_name}}
                    <!-- {{proj.project_name}} -->
                </td>
                <td class="p-created">
                  {{task.created_at}}
                    <!-- {{proj.assignee}} -->
                </td>
                <td class="p-assignee">
                  {{task.user_name}}
                    <!-- {{proj.assignee}} -->
                </td>
                <td class="p-description" v-if = "task.description === ''">
                    N/A
                </td>
                <td v-else>
                  {{task.description}}
                </td>
                <td class="p-Due">
                    {{task.due_date}}
                </td>
                <td class="p-status">
                    {{task.task_status}}
                </td>
                <td class="p-reward">
                    {{task.reward}}
                </td>
                <td>
                    <a v-if = "task.task_status === 'review'" href="#" class="btn btn-primary btn-xs" @click="project(task.task_id)"><i class="fa fa-folder"></i> Approve </a>
                    <a href="#" class="btn btn-danger btn-xs" @click="delete_task(task.task_id)"><i class="fa fa-trash-o"></i> Delete </a>
                </td>
                
              </tr>

            <!-- </div> -->
          
          <!-- </div> -->
        </tbody>
    </table>
</section>







</div>
</template>
<script>
// import ProjectDetail from "./ProjectDetail.vue"
import Navbar from "./Navbar.vue"
// import EmployerTask from "./EmployerTask.vue"
// import AddItem from "./AddItem.vue"
import mixin from "../mixin"
import firebase from "firebase/compat"
export default {
    name:"Project",
    mixins:[mixin],
    data(){
      return{
        tasks:[],
        projectName:""
      }
    },
    components:{

        Navbar,
    },
      beforeMount(){
        if(!sessionStorage.getItem("loggedUser")){
          this.$router.push("/")
        }
  },
  methods:{

      delete_task(taskID) {
        firebase.database().ref('tasks/' + taskID).remove()
            .then(function() {
                alert("Task Deleted")
            })
      },
    create(){
       this.$router.push("/projects/project/"+this.$route.params.id+"/addTask")
    },

  },
  created() {
      firebase.database().ref('tasks/' ).on('value', (snapshot) => {
        // this.tasks = []
        snapshot.forEach((childSnapshot) => {
          var task = childSnapshot.val();
          console.log(task)
          if(task.project_id ==  this.$route.params.id ){
          
            this.tasks.push(task);
          }
          
        })
        console.log(this.tasks)
      }); 
// name
      firebase.database().ref("projects/").on('value',(snapshot)=>{
                snapshot.forEach((childSnapshot) => {
          var project = childSnapshot.val();
          console.log(project.project_id)
          // console.log(this.projectName == project.project_name)
          if(project.project_id ==  this.$route.params.id ){
            this.projectName = project.project_name
            // this.tasks.push(task);
          }
          
        })
      })


    },

}
</script>
<style scoped>
h1{
    align-self: middle;
}
.task-container{
          display: flex;
    flex-wrap: wrap;
}
.page{
    min-height: 100vh;
    width:100%;
    background:rgba(248, 248, 248, 1);
    /* display: flex; */
}
.task-container{
      min-height:100vh;
  /* margin-top:60px; */
  /* background:grey; */
  padding-top:60px;
  padding-bottom:60px;
      justify-content: center;

}
#project-name{
    width: max-content;
    margin: auto;
    margin-top:60px;
    box-shadow: 0px 5px 0px rgba(83, 90, 249, 0.81);
}
.modal-title{
  margin: auto;
}
.new-task-btn{
background: linear-gradient(0deg, #504DFF, #504DFF), rgba(78, 74, 255, 0.61);
border-radius: 5px;
color: white;
}
</style>
<style>
</style>