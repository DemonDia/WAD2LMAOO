<template>
<div class = "page">
    <Navbar :usertype="'employee'"/>
    <h1 id = "project-name">Project Name</h1>
    <!-- {{ $route.params.id }} -->
    <div class = "task-container">
        
    <ProjectDetail/>
    <AddItem :itemType = "'task'"/>
    <!-- <EmployerTask :taskStatus = "'incomplete'" :taskReward="'1500'" :taskDue="'14/11/2021'"/> -->
    <div v-for = "(task,id) in tasks" :key="id">
      {{task}}
      {{task.task_status}}
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
</div>



</div>
</template>
<script>
import ProjectDetail from "./ProjectDetail.vue"
import Navbar from "./Navbar.vue"
import EmployerTask from "./EmployerTask.vue"
import AddItem from "./AddItem.vue"
import mixin from "../mixin"
import firebase from "firebase/compat"
export default {
    name:"Project",
    mixins:[mixin],
    data(){
      return{
        tasks:[]
      }
    },
    components:{
        ProjectDetail,
        Navbar,
        EmployerTask,
        AddItem
    },
      beforeMount(){
        if(!sessionStorage.getItem("loggedUser")){
          this.$router.push("/")
        }
        this.created()
      //  this.getUserType()
      //   if(this.usertype !== "employer"){
      //       this.$router.push("/")
      //   }
  },
  methods:{
        created() {
      firebase.database().ref('tasks/' ).on('value', (snapshot) => {
        this.tasks = []
        snapshot.forEach((childSnapshot) => {
          var task = childSnapshot.val();
          console.log(task)
          if(task.project_id ===  this.$route.params.id ){
            this.tasks.push(task);
          }
          
        })
        console.log(this.tasks)
      }); 
    }
  }
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