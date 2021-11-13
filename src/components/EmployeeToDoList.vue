<template>
<div class = "page" style="background:#FFFAFA">
     <Navbar :usertype="'employee'" :pageType = "'To-do'"/>
    
    <div class=  "container">
        <h1 style="color: black" class="mb-4">To-do List</h1>
        <!-- {{completed}}
        <br>
        {{tasks}}
        <br>
        {{incompleteTasks}} -->
        <table class = "table table-bordered">
            <thead>
                <tr>
                    <th style="background: #AED4FF;" scope = "col">Task Name</th>
                    <th style="background: #AED4FF;" scope = "col">Due Date</th>
                    <th style="background: #AED4FF;" scope = "col">Completed</th>

                </tr>
                
            </thead>

            <tbody>
                <tr v-for="(row, index) in tasks" :key="`task-${index}`">
                    <td class = "task-name">{{ row.task_name }}</td>
                    <td class="task-due-date">{{ row.due_date }}</td>
                    <td class = "status"><input type = "checkbox" v-bind:value = row.task_id  v-model = "completed"/></td>
                </tr>
            </tbody>
        </table>
        <button class = "btn btn-primary" v-if="completed.length !== 0" @click="submit()">Submit</button>
          <button class = "btn btn-primary" v-else disabled >Submit</button>
    </div>
</div>

</template>

<script>
import Navbar from "./Navbar.vue"
import mixin from "../mixin"
import firebase from "firebase/compat"
import "firebase/compat/auth"

export default {
    name:"EmployeeToDo",
    mixins:[mixin],
    components:{
        Navbar
    },
    data(){
        return {
            tasks: [],
            completed: []
        }

    },
  beforeMount(){
    //    console.log("why"+this.usertype)
  },
   methods:{
     submit(){
        //  var num = 0;
         
         this.tasks = this.tasks.map(
             task =>{
                 if(this.completed.includes(task.task_id)){
                    //  var ele = (task.task_id)-1;
                    //  this.tasks.splice(num,1);
                    //  var updates = {};
                    //  updates['tasks/' + ele + '/task_status'] = "Review"
                    //  firebase.database().ref().update(updates);

                            firebase.database().ref('tasks/' + task.task_id).update(
                            {"task_status":"Review"}
                            )
                                .then(function() {
                                    alert("Submitted")
                                })
                  



                 }
                 else{
                     return task
                 }
                //  num++
             },
         )
          window.location.reload();   

        
        // .on('value', (snapshot) => {
        // snapshot.forEach((childSnapshot) => {
            // var task = childSnapshot.val();
            // if (this.completed.includes(task.task_id)) {
            //     task.task_status: "review"
            // }
        // });
    // })
    }

},
  created() {
      firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.database().ref('tasks/').on('value', (snapshot) => {
                    this.tasks = []
                    snapshot.forEach((childSnapshot) => {
                        var task = childSnapshot.val();
                        if (task.user_id === user.uid) {
                            if (task.task_status != "Completed" && task.task_status != "Review") {
                                this.tasks.push(task);
                            }
                        } 
                    });
                }); 

            } else {
                this.user = null;
            }
        });  
  }
    
}
</script>
<style scoped>
.task-name{
    width:60%;
}
.task-due-date{
    width:40%;
}
 .page{
        min-height: 100vh;
        width:100%;
        background:rgba(248, 248, 248, 1);
        /* display: flex; */
    }
.container{
    margin-top: 80px;
}
.container h1{
        box-shadow: 0px 5px 0px rgba(83, 90, 249, 0.81);
        width:max-content;
        margin: 20px auto;
}
table th{
    text-align: start;
}
</style>