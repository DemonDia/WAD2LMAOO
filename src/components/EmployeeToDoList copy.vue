<template>
<div class = "page">
    <Navbar/>
    
    <div class=  "container">
        <h3 style="color: black">To-do list</h3>
        <!-- {{completed}}
        <br>
        {{tasks}}
        <br>
        {{incompleteTasks}} -->
        <table class = "table table-bordered">
            <thead>
                <tr>
                    <th scope = "col">Task Name</th>
                    <th scope = "col">Task Due</th>
                    <th scope = "col">Complete</th>

                </tr>
                
            </thead>

            <tbody>

            <!-- <tr>
                <td class = "task-name">IRM Proposal</td>
                <td class = "task-due-date">22/12/2021</td>
                <td class = "status"><input type = "checkbox" value = "task1" v-model = "completed"/></td>
            </tr>
            <tr>
                <td class = "task-name">IRM Proposal</td>
                <td class = "task-due-date">22/12/2021</td>
                <td class = "status"><input type = "checkbox" value = "task2" v-model = "completed"/></td>
            </tr>
            <tr>
                <td class = "task-name">IRM Proposal</td>
                <td class = "task-due-date">22/12/2021</td>
                <td class = "status"><input type = "checkbox" value = "task3" v-model = "completed"/></td>
            </tr>
            <tr>
                <td class = "task-name">IRM Proposal</td>
                <td class = "task-due-date">22/12/2021</td>
                <td class = "status"><input type = "checkbox" value = "task4" v-model = "completed"/></td>
            </tr> -->
            <tr v-for= "task in incompleteTasks" v-bind:key="task.id">
                <td class = "task-name">{{task.name}} </td>
                <td class = "task-due-date">{{task.due}}</td>
                <!-- {{task.id}} -->
                <td class = "status"><input type = "checkbox" v-bind:value = task.id  v-model = "completed"/></td>
            </tr>


            
            </tbody>
        </table>
          <button class = "btn btn-primary" v-if = "completed.length !== 0" @click="submit">Submit</button>
          <button class = "btn btn-primary" disabled v-else>Submit</button>
    </div>

</div>
    
</template>
<script>
import mixin from "../mixin"
import Navbar from "./Navbar.vue"
// import "firebase/compat";
export default {
 name:"EmployeeToDo",
 mixins:[mixin],
 components:{
     Navbar
 },
   beforeMount(){
       this.usertype = this.getUserType()
        if(this.usertype != "employee"){
            this.$router.push("/")
        }
  },
 data(){
     return{
         completed:[],
         tasks:[
             {"id":1,"name":"IRM Proposal", "due":"22/12/2021","status":"incomplete"},
             {"id":2,"name":"IRM Proposal", "due":"22/12/2021","status":"incomplete"},
             {"id":3,"name":"IRM Proposal", "due":"22/12/2021","status":"incomplete"}
         ]
     }
 },
 methods:{
     submit(){
         this.tasks = this.tasks.map(
             task =>{
                 if(this.completed.includes(task.id)){
                     return {task,status:"review"}
                 }
                 else{
                     return task
                 }
             }
         )
         this.completed = [];
//          for (var i = this.completed.length -1; i >= 0; i--)
//    completed.splice(completed[i],1);
     }
 },
 computed:{
     incompleteTasks(){
         let curr_task = this.tasks.filter(task => task.status ==="incomplete")
         return curr_task
     }
     
 }
}
</script>
<style>
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
.container h3{
        box-shadow: 0px 5px 0px rgba(83, 90, 249, 0.81);
        width:max-content;
        margin: 20px auto;
}
table th{
    text-align: start;
}
</style>