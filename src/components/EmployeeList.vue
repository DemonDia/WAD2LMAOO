<template>
<div class = "page">
    <Navbar/>
    <div class = "employeeContainer">
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
                        <!-- <option>Date employed</option> -->
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
                <!-- <div class="col-xl-3 col-lg-4 col-md-6 w-auto m-0"> -->
                <!-- <div class="col-xl-3 col-lg-3 col-md-6">
                    <div class = "card employee-box">
                        <h3>Thomas Tan</h3>
                        <table class = "table employee-table">
                            <tr>
                                <th>Employee Name:</th>
                                <td>Thomas Tan</td>
                            </tr>
                            <tr>
                                <th>Employee ID:</th>
                                <td>1</td>
                            </tr>
                            <tr>
                                <th>Date onboarded:</th>
                                <td>21/5/2021</td>
                            </tr>
                            <tr>
                                <th>Points:</th>
                                <td>21/5/2021</td>
                            </tr>
                        </table>
                        <div class="row m-1">
                            <button class = "btn view-btn col">Edit</button>
                            <button class = "btn fire-btn col">Remove</button>
                        </div>
                    </div>
                </div> -->
                <!-- <div class="col-xl-3 col-lg-4 col-md-6 w-auto m-0"> -->
                <!-- <div class="col-xl-3 col-lg-3 col-md-6">
                    <div class = "card employee-box">
                        <h3>Thomas Tan</h3>
                        <table class = "table employee-table">
                            <tr>
                                <th>Employee Name:</th>
                                <td>Thomas Tan</td>
                            </tr>
                            <tr>
                                <th>Employee ID:</th>
                                <td>1</td>
                            </tr>
                            <tr>
                                <th>Date onboarded:</th>
                                <td>21/5/2021</td>
                            </tr>
                            <tr>
                                <th>Points:</th>
                                <td>21/5/2021</td>
                            </tr>
                        </table>
                        <div class="row m-1">
                            <button class = "btn view-btn col">Edit</button>
                            <button class = "btn fire-btn col">Remove</button>
                        </div>
                    </div>
                </div> -->

                <!-- <div class="col-xl-3 col-lg-4 col-md-6 w-auto m-0"> -->
                <!-- <div class="col-xl-3 col-lg-3 col-md-6">
                    <div class = "card employee-box">
                        <h3>Thomas Tan</h3>
                        <table class = "table employee-table">
                            <tr>
                                <th>Employee ID:</th>
                                <td>1</td>
                            </tr>
                            <tr>
                                <th>Date onboarded:</th>
                                <td>21/5/2021</td>
                            </tr>
                            <tr>
                                <th>Points:</th>
                                <td>21/5/2021</td>
                            </tr>
                        </table>
                        <div class="row m-1">
                            <button class = "btn view-btn col">Edit</button>
                            <button class = "btn fire-btn col">Remove</button>
                        </div>
                    </div>
                </div> -->

                <!-- <div class="col-xl-3 col-lg-4 col-md-6 w-auto m-0"> -->
                <div class="col-xl-3 col-lg-4 col-md-6 " v-for="employee in filteredRows" v-bind:key="employee.user_id">
                    <div class = "card employee-box" >
                        <h3>{{employee.name}}</h3>
                        <table class = "table employee-table">
                            <!-- <tr>
                                <th>Employee Name:</th>
                                <td>Thomas Tan</td>
                            </tr> -->
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
                        </table>
                        
                        <div class="row m-1">
                             <!-- Modal -->
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
                            <button class = "btn view-btn col" @click="edit(employee)" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                            <button class = "btn fire-btn col" @click="delete_user(employee.user_id)">Remove</button>
                        </div>
                        
                    </div>
                </div>
                <div class="add-emp col-xl-3 col-lg-4 col-md-6 m-0">
                    <div>
                        <router-link to ="/employees/add"
                            style = "text-decoration: none;">
                            <AddItem :itemType="'employee'" />
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>
    
</template>
<script>
import Navbar from "./Navbar.vue"
import AddItem from "./AddItem.vue"
import mixin from "../mixin"
import firebase from "firebase/compat"
export default {
    name:"EmployeeList",
    components:{
        Navbar,
        AddItem
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
.add-emp{
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
    /* display: flex; */
}

/* filter */
.filter-container{
    width:100%;
    display: flex;
    justify-content: space-between;

}
.filter-container div{
    margin:5px;
    /* padding:10px; */
}

/* employee container */
.employeeContainer{
    margin-top:80px;
    
    
}

.employee-container{
    margin:10px;
    background: white;
    display: flex;
    flex-wrap: wrap;
}

/* individual employee */
.employee-box{
    width:288px;
    height:360px;
    /* background:red; */
    /* display: flex; */
    padding:10px;
    margin:10px;
    background: linear-gradient(57.11deg, #86B0FF -4.9%, #6461FF 101.23%, rgba(133, 175, 255, 0.61) 101.24%, rgba(52, 97, 184, 0.64) 101.24%);
    color: white;
    /* align-items: center; */
    }
.employee-table{
    width:100%;
    background:white;
    /* align-self: center; */
}
tr th{
    width:40%;
    text-align: right;
}
.view-btn{
    /* background: #6360FF; */
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
}


</style>