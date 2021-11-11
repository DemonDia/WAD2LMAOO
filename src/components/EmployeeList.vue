<template>
<div class = "page">
    <Navbar/>
      <h1 id = "emp">List of Employees</h1>

    <div class = "employeesPage">
        <div class="search">
            <input type = "text" class = "form-control" placeholder="Search by name" v-model="filter"/>
        </div>
        <a href="#" class=" btn btn-dark btn-xs mt-3" @click="create()">Add Employee</a>
        <div class = "employees justify-content-between">        
            <div v-for="employee in filteredRows" v-bind:key="employee.user_id">
            <div class="album">
            <div class="emp_card card shadow-sm">
                <img src="../assets/john.png" width="100%" height="225" background="#55595c" color="#eceeef" class="card-img-top rounded" text="Thumbnail" >
                <div class="inline pt-3">
                    <h6>{{employee.name}}</h6>
                </div>

                <div class="card-body details d-block ">
                <p class="card-text inlineDetails "> 
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
            <!-- <div class="card">               
            <div class="card-body">
                    <div>
                        <router-link to ="/employees/add"
                            style = "text-decoration: none;">
                            <AddItem :itemType="'employee'" />
                        </router-link>
                    </div>
                </div>
            </div> -->
            </div>
        </div>
    <!-- <div class = "employeeContainer">
        <h1 id = "emplist-header"  class="mb-4">Employee List</h1>
        <div class = "filter-container-fluid">
            <div class="row w-100 m-0">
                <div class = "col-lg-4 mb-3">
                    <label class="px-2">Search: </label><input type = "text" class = "form=control" placeholder="Search by name" v-model="filter"/>
                </div>

                <div class="col-lg-4 mb-3">
                    <label class="px-2">Sort by: </label>
                    <select id="sortby" class = "form=control">
                        <option>Name</option>
                        <option>ID</option>
                    </select>           
                </div>

                <div class="col-lg-4 mb-1">
                    <label class="px-2">Order: </label>
                    <select id="orderby" class = "form=control">
                        <option>Ascending</option>
                        <option>Descending</option>
                    </select>
                </div>
            </div>
            
        </div>
        <div class = "employee-container-fluid">
            <div class="row w-100 m-0">
                
                <div class="col-xl-3 col-lg-4 col-md-6 " v-for="employee in filteredRows" v-bind:key="employee.user_id">
                    <div class = "card employee-box" >
                        <h3>{{employee.name}}</h3>
                        <table class = "table employee-table">
                            <tr>
                                <th class="text-start">Employee ID:</th>
                                <td id="id">{{employee.user_id}}</td>
                            </tr>
                            <tr>
                                <th class="text-start">Department:</th>
                                <td>{{employee.department_id}}</td>
                            </tr>
                            <tr>
                                <th class="text-start">Points:</th>
                                <td>{{employee.current_pts}}</td>
                            </tr>
                        </table>-->
                        
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
                        <!-- add-emp col-xl-3 col-lg-4 col-md-6 m-0 -->


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
            console.log(this.employee)
        },
        delete_user(userID) {
            // console.log(userID)
            firebase.database().ref('users/' + userID).remove()
            .then(function() {
                alert("Employee Deleted")
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
                            console.log(user)
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

/* .add-emp{
    width: 330px;
}
#sortby{
    width: 150px;
    height: 29px;
}
#orderby{
    width: 150px;
    height: 29px;
}
#emplist-header{
    width: max-content;
    margin: auto;
    margin-top: 80px;
    box-shadow: 0px 5px 0px rgba(83, 90, 249, 0.81);
}
.page{
    min-height: 100vh;
    width:100%;
    background:white
}

.filter-container{
    width:100%;
    display: flex;
    justify-content: space-between;

}
.filter-container div{
    margin:5px;
}

.employeeContainer{
    margin-top:80px;
}

.employee-container{
    margin:10px;
    background: white;
    display: flex;
    flex-wrap: wrap;
}

.employee-box{
    width:288px;
    height:360px;
    padding:10px;
    margin:10px;
    background: linear-gradient(57.11deg, #86B0FF -4.9%, #6461FF 101.23%, rgba(133, 175, 255, 0.61) 101.24%, rgba(52, 97, 184, 0.64) 101.24%);
    color: white;
    }
.employee-table{
    width:100%;
    background:white;
}
tr th{
    width:40%;
    text-align: right;
}
.view-btn{
    background: rgb(253, 198, 97);
    border-radius: 5px;
    width:200px;
    padding:10px;
    color: black;
    margin: 5px;
    border: 1px solid black;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.19);
}
.fire-btn{
    border-radius: 5px;
    width:200px;
    padding:10px;
    color: black;
    background:  rgb(255, 153, 153);
    margin: 5px;
    border: 1px solid black;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.19);

}

.table {
    margin: auto;
} */


.employeesPage{
    margin-top: 100px;
}

.search{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    /* justify-content: center; */
}

.employees {
    display: flex;
    margin-top: 10px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    /* background: none; */
}

.card {
    width: 260px;
    margin: 20px;
}

.details{
    text-align: left;
}

.inlineDetails {
    display: block;
    width: 100%;
}

.emp_card {
    height: 500px;
    width: 260px;
}

.card-img-top {
    width: 258px;
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

</style>