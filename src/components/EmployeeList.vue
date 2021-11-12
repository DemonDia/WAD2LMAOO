<template>
<div class = "page">
    <Navbar/>
      <h1 id = "emp">List of Employees</h1>

    <div class = "employeesPage">
        <div class="search">
            <input type = "text" class = "form-control" placeholder="Search by name" v-model="filter"/>
        </div>
        <a href="#" class=" btn btn-dark btn-xs mt-3" @click="create()">Add Employee</a>
        <div class="album">                    
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-6 " v-for="employee in filteredRows" v-bind:key="employee.user_id">
                        <div class=" card shadow-sm">
                            <img :src="employee.image" width="100%" height="225" background="#55595c" color="#eceeef" class="card-img-top rounded" text="Thumbnail" >
                            <div class="inline pt-3">
                                <h6>{{employee.name}}</h6>
                            </div>

                            <div class="card-body details d-block ">
                                <p class="card-text"> 
                                    <small><b>User ID:</b></small> <br> <small> {{employee.user_id}}</small><br>
                                    <small><b>Department:</b></small> <br><small>{{employee.department_id}}</small><br>         
                                    <small><b>Points:</b></small> <br> <small>{{employee.current_pts}}</small>         
                                </p>
                                <div class="buttons">
                                    <button class = "btn border border-dark view-btn col" @click="edit(employee)" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                                    <button class = "btn border border-dark fire-btn col" @click="delete_user(employee.user_id)">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>

                        
    <div class="row m-1"> 
            
        <!-- Modal-->    
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-dark text-start" id="exampleModalLabel">Edit Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <table class ="table table-bordered w-75 align-center">
                            <tr>
                                <th class="text-start">Name:</th>
                                <td><input type  ="text" placeholder = "Employee Name" class = "form-control" v-model="this.employee.name"/></td>
                            </tr>
                            <tr>
                                <th class="text-start">Position:</th>
                                <td><input type  ="text" placeholder = "Position" class = "form-control" v-model="this.employee.position"/></td>
                            </tr>
                            <tr>
                                <th class="text-start">Points:</th>
                                <td><input type  ="text" placeholder = "Position" class = "form-control" v-model="this.employee.current_pts"/></td>
                            </tr>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="update(this.employee.user_id)" >Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- <button class = "btn view-btn col" @click="edit(employee)" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
        <button class = "btn fire-btn col" @click="delete_user(employee.user_id)">Remove</button> -->
    </div>


</div>
    
</template>
<script>
import Navbar from "./Navbar.vue"
// import AddItem from "./AddItem.vue"
import mixin from "../mixin"
import firebase from "firebase/compat"
export default {
    name:"EmployeeList",
    components:{
        Navbar,
        // AddItem
    },
    mixins:[mixin],
    // beforeMount(){
    //     this.getUserType()
    //     if(this.usertype != "employer"){
    //         this.$router.push("/")
    //     }
    // }
    data() {
        return {
            type: "",
            employees: [],
            filter: "",
            isOpen: false,
            involved_reviews:[],
            involved_projects:[],
            involved_tasks:[],
            employee: {
                user_id: null,
                name: null,
                position: null,
                current_pts: null
            },
        }
    },
    methods: {
        create() {
        this.$router.push('/employees/add')
        },
        edit(employee) {
            console.log(employee)
            this.employee = employee;
            // console.log(this.employee)
        },
        delete_user(userID) {
            // delete employee
            firebase.database().ref('users/' + userID).remove()
            .then(function() {
                alert("Employee Deleted")
            })

            // get reviews associated 

      firebase.database().ref('reviews/' ).on('value', (snapshot) => {
        this.involved_reviews = []
        snapshot.forEach((childSnapshot) => {
          var review = childSnapshot.val();
        //   console.log(review)
          if(review.user_id ==  userID){
          
            this.involved_reviews.push(review.review_id);
          }
          
        })
        // console.log(this.involved_reviews)
      }); 

            // delete reviews associated to employee
            this.involved_reviews.forEach(review=>{
                console.log(review)
                firebase.database().ref('reviews/' + review).remove()
                    .then(function() {
                        console.log("Review Deleted")
                    })
            })
            // get tasks associated

      firebase.database().ref('tasks/' ).on('value', (snapshot) => {
        this.involved_tasks = []
        snapshot.forEach((childSnapshot) => {
          var task = childSnapshot.val();
        //   console.log(task)
          if(task.user_id ==  userID){
          
            this.involved_tasks.push(task.task_id);
          }
          
        })
        // console.log(this.involved_tasks)
      }); 



            // delete tasks associated to employee
            this.involved_tasks.forEach(task=>{
                console.log(task)
                firebase.database().ref('tasks/' + task).remove()
                    .then(function() {
                        console.log("Task Deleted")
                    })



            })
            // get projects associated


      firebase.database().ref('projects/' ).on('value', (snapshot) => {
        this.involved_projects = []
        snapshot.forEach((childSnapshot) => {
          var project = childSnapshot.val();
        //   console.log(project)
          if(project.user_id ==  userID){
          
            this.involved_projects.push(project.project_id);

            
          }
          
        })
        // console.log(this.involved_projects)
      }); 


            // delete projects associated to employee

            this.involved_projects.forEach(project=>{
                console.log(project)

                firebase.database().ref('projects/' + project).remove()
                    .then(function() {
                        console.log("Project Deleted")
                    })

                
            })

        },
        update(userID){
            // var newData = {
            //     current_pts: this.points,
            //     department_id: this.current_pts,
                // email: this.email,
                // employment_type: "Full Time",
                // name: this.name,
                // password: this.password,
                // phone_no: this.phone_no,
                // position: this.position,
                // user_type: "employee"
            // }

            var updates = {};
            updates['/users/' + userID] = this.employee;

            firebase.database().ref().update(updates)

            // this.num++
            this.$router.push("/employees")
        }
    },
    created() {
        // firebase.auth().onAuthStateChanged((user) => {
        //     if (user) {
                firebase.database().ref('users/' ).on('value', (snapshot) => {
                    this.employees = [];
                    snapshot.forEach((childSnapshot) => {
                        var user = childSnapshot.val();
                        // if (user.user_type == "employee") {
                            // console.log(user)
                            this.employees.push(user);
                        // }
                    })
                }); 
            },
    //     });
        
    // },
    computed: {
        filteredRows() {
                return this.employees.filter(row => {
                const name = row.name.toLowerCase();
                const searchTerm = this.filter.toLowerCase();

                return name.includes(searchTerm);
            });
        },
  },

}
</script>
<style scoped>

#emp{
    width: max-content;
    margin: auto;
    margin-top: 80px;
    box-shadow: 0px 5px 0px rgba(83, 90, 249, 0.81);
}

.employeesPage{
    margin-top: 50px;
}

.search{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}

.card {
    width: 270px;
    margin: 20px auto;
    height: 500px;
}

.details{
    text-align: left;
}

.card-img-top {
    width: 268px;
    object-fit: cover;
}

.view-btn {
    margin-right: 10px ;
    margin-left: 5px;
    width: 100px;
}

.fire-btn {
    margin-right: 5px ;
    margin-left: 5px;
    width: 100px;
}

.buttons {
    margin: 0 auto;
}

.container{
    margin-top: 20px;
}

</style>