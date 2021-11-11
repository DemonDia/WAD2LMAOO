<template>
<div class = "page">
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
    <Navbar/>
    <div class="container" id="main-container">
        <h1 style="color: black" class="mb-4 header">Profile Page</h1>
         <div class="container-fluid justify-content-center">
            <div class="row">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item mx-3" role="presentation">
                        <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#about" role="tab" aria-controls="about" aria-selected="true">About Me</a>
                    </li>
                    <li class="nav-item mx-3" role="presentation">
                        <a class="nav-link" id="tasks-tab" data-bs-toggle="tab" href="#tasks" role="tab" aria-controls="tasks" aria-selected="false">My Tasks</a>
                    </li>
                    <li class="nav-item mx-3" role="presentation">
                        <a class="nav-link" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
                    </li>
                    <!-- <li class="nav-item mx-3" role="presentation">
                        <a class="nav-link" id="settings-tab" data-bs-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">Settings</a>
                    </li> -->
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="about-tab">
                        <div class="container-fluid justify-content-center">
                            <div class="row justify-content-center">
                                <div class="col-sm-3 mt-4 mb-4 imagepos">
                                    <img src="../assets/john.png" id="image" class="img-fluid rounded float-start border-2 border-dark" alt="...">
                                </div>
                                <div class="card col-sm-9 mx-2 mt-4">
                                    <ul class="list-group list-group-flush" v-for="(details,index) in user_details" v-bind:key="index">
                                        <li class="list-group-item">
                                            <div class="my-1 row mx-3">
                                                <label class="col-sm-4 col-form-label"><b>Name:</b></label>
                                                <div class="col-sm-8 details">{{details.name}}</div>
                                            </div>
                                        </li>
                                        <li class="list-group-item bg-light">
                                            <div class="my-1 row mx-3 ">
                                                <label class="col-sm-4 col-form-label"><b>Department:</b></label>
                                                <div class="col-sm-8 details">{{details.department_id}}</div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="my-1 row mx-3">
                                                <label class="col-sm-4 col-form-label"><b>Position:</b></label>
                                                <div class="col-sm-8 details">{{details.position}}</div>
                                            </div>
                                        </li>
                                        <li class="list-group-item bg-light">
                                            <div class="my-1 row mx-3">
                                                <label class="col-sm-4 col-form-label"><b>Employment Type:</b></label>
                                                <div class="col-sm-8 details">{{details.employment_type}}</div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="my-1 row mx-3">
                                                <label class="col-sm-4 col-form-label"><b>Email:</b></label>
                                                <div class="col-sm-8 details">{{details.email}}</div>
                                            </div>
                                        </li>
                                        <li class="list-group-item bg-light">
                                            <div class="my-1 row mx-3">
                                                <label class="col-sm-4 col-form-label"><b>Password:</b></label>
                                                <div class="col-sm-8 details">{{details.password}}</div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="my-1 row mx-3">
                                                <label class="col-sm-4 col-form-label"><b>Current Points:</b></label>
                                                <div class="col-sm-8 details">{{details.current_pts}}</div>
                                            </div>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="tasks" role="tabpanel" aria-labelledby="tasks-tab">
                    <input type="text" placeholder=" Filter by task/status" class="w-100 mt-3" v-model="filter" />
                    <table class="table table-hover mt-3">
                        <thead>
                            <tr>
                                <th style="background: #b6cefb" class="text-center" scope="col">Task Status <button class="button" @click="sortTable('status', direction)"><img class="sort" src="../assets/sort.png"></button></th>
                                <th style="background: #b6cefb" class="text-center" scope="col">Task Name <button class="button" @click="sortTable('task', direction)"><img class="sort" src="../assets/sort.png"></button></th>
                                <th style="background: #b6cefb" class="text-center" scope="col">Project Name <button class="button" @click="sortTable('proj', direction)"><img class="sort" src="../assets/sort.png"></button></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, index) in filteredRows" :key="`task-${index}`">
                                <td class="text-center">{{ row.task_status }}</td>
                                <td class="text-center">{{ row.task_name }}</td>
                                <td class="text-center">{{ row.project_name }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                    <div class="height-100 container mt-3">
                        <div class="card p-3">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="ratings"> 
                                    <i class="fa fa-star rating-color" v-for="index in averageReviews" :key="index"  ></i> 
                                    <!-- <i class="fa fa-star rating-color"></i> 
                                    <i class="fa fa-star rating-color"></i> 
                                    <i class="fa fa-star rating-color"></i> 
                                    <i class="fa fa-star rating-color"></i> 
                                    <i class="fa fa-star"></i>  -->
                                    <i class="fa fa-star" v-for="index in 5-averageReviews" :key="index" ></i> 
                                </div>
                                <h5 class="review-count"> {{user_reviews.length}} Reviews</h5>
                            </div>
                            <div class="mt-5 card">
                                <div class="card-body d-flex flex-column align-items-center" v-for ="(review, index) in user_reviews" v-bind:key="index">
                                    <h5 class="review-stat card-title">Anon</h5>
                                    <!-- {{review}} -->
                                    <div class="small-ratings card-subtitle"> 
                                        <i v-for="index in review.ratings" :key="index" class="fa fa-star rating-color"></i> 
                                        <i v-for="index in 5-review.ratings" :key="index"  class="fa fa-star"></i> 
                                    </div>
                                    <p class="card-text">{{review.comments}} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">...</div>
                </div>
                <!-- <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">...</div> -->
            </div>
        </div>
    </div>
    </div>
</div>    
</template>

<script>
import Navbar from "./Navbar.vue"
import mixin from "../mixin"
import firebase from "firebase/compat"
export default {
    name:"ProfilePage",
    components: {
        Navbar,
    },
    mixins:[mixin],
    methods: {
        sortTable(key,direction) {
            this.sort = `${key} > ${direction}`
            if (direction === 'asc') {
                this.rows.sort((a, b) => a[key] > b[key] ? 1: -1)
                this.direction = 'desc';
            } else {
                this.rows.sort((a, b) => a[key] < b[key] ? 1: -1)
                this.direction = 'asc';
            }
        }
    },
      beforeMount(){
    //    this.usertype = this.getUserType()
    //    console.log(this.usertype)
    //     if(this.getUserType() != "employee"){
    //         this.$router.push("/")
    //     }
  },
    data() {
        return {
            user_details: [],
            user_tasks: [],
            user_reviews: [],
            filter: '',
            sort: '',
            direction: 'asc',
            columns: ['task','proj','status','person'],
            // rows: [
            //     {task:'Setup Database', proj: 'Project 2', status: 'In Progress', person: 'John', deadline: '20/11/2021'},
            //     {task:'Draft Proposal', proj: 'Project 1', status: 'New', person: 'John', deadline: '2/11/2021'},
            //     {task:'UI Testing', proj: 'Project 1',status: 'Completed', person: 'John', deadline: '10/11/2021'}
            // ],
            // details: {name:"John", password:"IT123john", email:"john_IT.gmail.com", department:"IT", position:"Team Lead", current_points:"10", employment_type: "Full Time"}
        }
    },
    computed: {
        filteredRows() {
                return this.user_tasks.filter(row => {
                const task = row.task_name.toLowerCase();
                const status = row.task_status.toLowerCase();
                const project = row.project_name.toLowerCase();
                const searchTerm = this.filter.toLowerCase();

                return task.includes(searchTerm) || status.includes(searchTerm) || project.includes(searchTerm);
            });
        },
        averageReviews(){
            var total = 0
            var listedRatings = this.user_reviews;
            for(let i = 0; i < listedRatings.length; i++){
                // console.log(listedRatings[i].ratings)
                total+= listedRatings[i].ratings
            }

            return Math.round(total/listedRatings.length)
        }
    },
    created() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.database().ref('users/' + user.uid ).on('value', (snapshot) => {
                    this.user_details.push(snapshot.val());  
                }); 
                firebase.database().ref('tasks/').on('value', (snapshot) => {
                    snapshot.forEach((childSnapshot) => {
                        var task = childSnapshot.val();
                        if (task.user_id === user.uid) {
                            console.log(task)
                            this.user_tasks.push(task)
                        } 
                    });
                }); 
                firebase.database().ref('reviews/').on('value', (snapshot) => {
                    snapshot.forEach((childSnapshot) => {
                        var review = childSnapshot.val();
                        if (review.user_id === user.uid) {
                            console.log(review)
                            this.user_reviews.push(review)
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

<style>
.card{
    /* width: auto; */
    height: auto;
}
#main-container{
    width: auto;
    height: auto;
}
.imagepos{
    width: 270px;
    height: 200px;
}
#image{
    max-width: 100%;
    height: auto;
}
h1{
    margin-top: 80px;
}
.page{
    min-height: 100vh;
    width:100%;
    background: white;
    /* display: flex; */
}
.pageContent{
  min-height:100vh;
  /* margin-top:60px; */
  background:rgb(248, 248, 248);
  padding-top:60px;
  padding-bottom:60px;
}
</style>

<style scoped>
h3 {
    margin-top: 80px;
    margin-left: 32px;
    text-align: left;
}
label {
    text-align: left;
}
.details {
    text-align: left;
    padding: 7px 12px 7px 12px;
}
.sort {
    width: 20px;
}
.button {
    border: none;
    background-color: transparent;
}
.ratings {
    margin-right: 10px
}
.ratings i {
    color: #cecece;
    font-size: 32px
}
.rating-color {
    color: #fbc634 !important
}
.review-count {
    font-weight: 400;
    margin-bottom: 2px;
    font-size: 24px !important
}
.small-ratings i {
    color: #cecece
}
.review-stat {
    font-weight: 300;
    font-size: 18px;
    margin-bottom: 2px;
    text-align: left;
}

.header{
    box-shadow: 0px 5px 0px rgba(83, 90, 249, 0.81);
    width: max-content;
    margin: 80px auto;
} 

</style>