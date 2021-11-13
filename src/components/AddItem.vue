<template>
    <div class = "page">
         <Navbar :usertype="'employee'" :pageType = "'Projects'"/>
        <div class = "add-employee-container">
            <h1 id = "add-emp-header"  class="mb-4">Add Task</h1>
            <div class="row">
            <div class = "col-12 col-md-9 col-lg-7 card onboarding-form mb-5">
                <table class = "form-table">
                    <tr>
                        <td id = "impt-info">
                            <table class ="input-table">
                                <tr>
                                    <th>Task Name:</th>
                                    <td><input type  ="text" placeholder = "Task Name" class = "form-control" v-model="taskName"/></td>
                                </tr>

                              <tr>
                                    <th>Assigned To:</th>
                                    <td class="text-start">
                                        <select v-model="selected" >
                                            <option disabled value="">Please select an assignee</option>
                                            <option v-for="user in users" v-bind:key="user.user_id">{{user.name}}</option>
                                        </select>
                                    </td>
                                </tr>

                                <tr>
                                    <th>Description:</th>
                                    <td><textarea placeholder = "Task description" v-model="desc"/></td>
                                </tr>
                                <tr>
                                    <th>Reward:</th>
                                    <td>
                                        <input type  ="number" placeholder = "Reward" class = "form-control" v-model="reward"/>
                                    </td>
                                </tr>

                                <tr>
                                    <th>Due Date:</th>
                                    <td><input type ="date" maxlength="10" placeholder = "YYYY-MM-DD" class = "form-control" v-model="dueDate"></td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                </table>
                <div class = "button-container justify-content-center">
                    <button  
                    v-on:click ="cancel()"
                    
                    class = "btn fire-btn">Cancel</button>
                    <!-- <button class = "btn fire-btn">Cancel</button> -->
                    <button class = "btn view-btn" v-on:click ="add()">Add</button>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import Navbar from "./Navbar.vue"
import firebase from "firebase/compat"
import "firebase/compat/auth"
// task due
// task name
// reward

export default {
    name:"AddItem",
    props:["itemType"],
    components:{
    Navbar
    },

    data(){
        return{
            dueDate:"",
            taskName:"",
            selected:"",
            desc:"",
            reward:0,
            users:[],
            projectName:"",
            userID:"",
            projDue:""
            
        }
    },
    created() {
        firebase.database().ref('users/').on('value', (snapshot) => {
            this.users = []
            snapshot.forEach((childSnapshot) => {
                var user = childSnapshot.val();
                // console.log(user)
                this.users.push(user);
            });
        }); 
    },

    methods: {
        currentDateTime() {
            const current = new Date();
            const date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
            const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
            const dateTime = date +' '+ time;
            return dateTime;
        },

      cancel(){
          this.$router.push("/projects/project/"+this.$route.params.id)
      },
        add() {
// get project name
        this.projDue = ""
      firebase.database().ref("projects/").on('value',(snapshot)=>{
                snapshot.forEach((childSnapshot) => {
          var project = childSnapshot.val();
        //   console.log(project.project_id)
          // console.log(this.projectName == project.project_name)
          if(project.project_id ==  this.$route.params.id ){
            this.projectName = project.project_name
            this.projDue = project.due_date
            // this.tasks.push(task);
          }
          console.log(this.projectName)
          console.log(this.projDue)
        })
      }),
// get user id
      firebase.database().ref("users/").on('value',(snapshot)=>{
                snapshot.forEach((childSnapshot) => {
          var user = childSnapshot.val();
        //   console.log(project.project_id)
          // console.log(this.projectName == project.project_name)
          if(user.name ==  this.selected){
            this.userID = user.user_id
            // this.tasks.push(task);
          }
          console.log(this.userID)
        })
      })





            // add new date into the project
            let date = this.dueDate.split("-");
            console.log(this.dueDate)
            date = new Date(date[0],date[1]-1,date[2])
            console.log(date)

            // current date
            this.projDue = this.projDue.split("-")
            this.projDue = new Date(this.projDue[0],this.projDue[1]-1,this.projDue[2])
            console.log(this.projDue)


            console.log(date.getTime()  > new Date().getTime() )
            if(this.taskName ===""){
                alert("Task name cannot be empty")
            }
            else if(this.selected ===""){
                alert("Please select an employee")
            }
            else if(this.dueDate ===""){
                alert("Please select a due date.")

            }
            else if(date > this.projDue){
                alert("Cannot exceed project deadline")
            }
            else if(date.getTime()  < new Date().getTime() ){
                alert("Due date cannot be earlier than today or due today!")
            }

            else if(this.reward < 0){
                alert("Points cannot be negative!")
            }
            else{
                





    


                
            var myref = firebase.database().ref("tasks/").push()
            var key = myref.key;
            
            var input_data = {
                completion_date:"",
                created_at: this.currentDateTime(),
                description:this.desc,
                due_date:this.dueDate,
                project_id: this.$route.params.id,
                project_name:this.projectName ,
                reward:this.reward,
                task_id: key,
                task_name:this.taskName,
                task_status:"Incomplete",
                user_id:this.userID ,
                user_name:this.selected
            }
            console.log(input_data)
            // var updates = {};
            // updates['/tasks/' + key] = input_data;
            // console.log(updates)
            // firebase.database().ref().update(updates)
            myref.set(input_data)
            alert("Done")

            this.$router.push("/projects/project/"+this.$route.params.id)

            }

        }
    },




}
</script>
<style scoped>

table {
  /* border: 1px solid black; */
  table-layout: fixed;
  width: 200px;
}

td {
  /* border: 1px solid black; */
  width: 100px;
  overflow: hidden;
}
th{
    /* border: 1px solid black; */
    width: 20px;
    overflow: hidden;
}
.card{
    /* max-width: 100%; */
    height: auto;
}


#add-emp-header{
    width: max-content;
    margin: auto;
    /* margin-top: 80px; */
    box-shadow: 0px 5px 0px rgba(83, 90, 249, 0.81);
}
.page{
    min-height: 100vh;
    width:100%;
    background:rgba(248, 248, 248, 1);
    overflow: hidden;
    /* display: flex; */
}
.add-employee-container{
    margin-top:80px;
    display: grid;
    align-content: center;
}
.onboarding-form{
    background:#F8F8F8;
    margin: auto;
    /* width: 50%; */
    /* padding:10px; */
    align-items: center;
}

/* form */
.form-table{
    width:90%;
}
#impt-info{
    width:60%;
}
.form-table tr td{
    padding:10px;
}
/* impt data */
.input-table{
/* width: 60%; */
width: 100%;
/* background:purple; */

}
textarea{
        width: 100%;

}
.input-table tr th{
    text-align: right;
    padding-right: 8px;
    /* width: 40px; */
}

/* photo */
.add-photo{
    background:white;
    height: 200px;
}
#add-photo{
    height:100%;
    /* background:purple; */
}

/* buttons */
.button-container{
    display: flex;
    justify-content:space-evenly;
    width:100%;
    margin:10px;

}
/* #exampleFormControlFile1{
    text-align: right;
} */

/* .view-btn{
    background: #6360FF;
border-radius: 5px;
width:200px;
padding:10px;
color: white;
margin: 5px;
}
.fire-btn{
  border-radius: 5px;
width:200px;
padding:10px;
color: white;
background:  rgba(147, 7, 7, 1);
margin: 5px;

} */
.view-btn{
    /* background: #6360FF; */
    background: rgb(253, 198, 97);
    border-radius: 5px;
    width:100px;
    padding:10px;
    color: black;
    margin: 15px;
    border: 1px solid black;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.19);
}
.fire-btn{
    border-radius: 5px;
    width:100px;
    padding:10px;
    color: black;
    background:  rgb(255, 153, 153);
    margin: 15px;
    border: 1px solid black;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.19);

}
</style>