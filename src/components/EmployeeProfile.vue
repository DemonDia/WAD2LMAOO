<template>
<div class = "page">
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
    <Navbar/>
    <div class="container" id="main-container">
        <h1 style="color: black" class="mb-4">Profile Page</h1>
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
                    <li class="nav-item mx-3" role="presentation">
                        <a class="nav-link" id="settings-tab" data-bs-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">Settings</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="about-tab">
                        <div class="container-fluid justify-content-center">
                            <div class="row">
                                <div class="col-sm-3 mt-4 mb-4 imagepos mx-auto">
                                    <img src="../assets/john.png" id="image" class="img-fluid rounded float-start border-2 border-dark rounded-circle" alt="...">
                                </div>
                                <div id = "space"></div>
                                <div class="card col-sm-9 mx-2 mt-4 mx-auto">
                                    <ul class="list-group list-group-flush ">
                                        <li class="list-group-item">
                                            <div class="my-1 row mx-3">
                                                <label class="col-sm-4 col-form-label"><b>Name:</b></label>
                                                <div class="col-sm-8 details">{{details.name}}</div>
                                            </div>
                                        </li>
                                        <li class="list-group-item bg-light">
                                            <div class="my-1 row mx-3 ">
                                                <label class="col-sm-4 col-form-label"><b>Department:</b></label>
                                                <div class="col-sm-8 details">{{details.department}}</div>
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
                                                <div class="col-sm-8 details">{{details.current_points}}</div>
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
                                    <th style="background: #b6cefb" scope="col">Task Status <button class="button" @click="sortTable('status', direction)"><img class="sort" src="../assets/sort.png"></button></th>
                                    <th style="background: #b6cefb" scope="col">Task Name <button class="button" @click="sortTable('task', direction)"><img class="sort" src="../assets/sort.png"></button></th>
                                    <th style="background: #b6cefb" scope="col">Project Name <button class="button" @click="sortTable('proj', direction)"><img class="sort" src="../assets/sort.png"></button></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, index) in filteredRows" :key="`task-${index}`">
                                    <td>{{ row.status }}</td>
                                    <td>{{ row.task }}</td>
                                    <td>{{ row.proj }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                        <div class="height-100 container mt-3">
                            <div class="card p-3">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="ratings"> 
                                        <!-- {{averageReviews}} -->
                                        <i class="fa fa-star rating-color" v-for="index in averageReviews" :key="index"  ></i> 
                                        <!-- <i class="fa fa-star rating-color"></i> 
                                        <i class="fa fa-star rating-color"></i> 
                                        <i class="fa fa-star rating-color"></i>  -->
                                        <i class="fa fa-star" v-for="index in 5-averageReviews" :key="index" ></i> </div>
                                    <h5 class="review-count"> {{reviews.length}} Reviews</h5>
                                </div>
                                <div class="mt-5 card ">
                                    <div class="card-body d-flex flex-column align-items-center"
                                    v-for = "review in reviews" v-bind:key= "review.id">
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
                    </div>
                    <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">...</div>
                </div>
            </div>
        </div>
    </div>
    
    

</div>    
</template>

<script>
import Navbar from "./Navbar.vue"
import mixin from "../mixin"
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
       this.getUserType()
        if(this.usertype != "employee"){
            this.$router.push("/")
        }
        console.log(this.loggedUser.name)
        console.log(this.tasks)
  },
    data() {
        return {
            filter: '',
            sort: '',
            direction: 'asc',
            columns: ['task','proj','status','person'],

            rows: [
                {task:'Setup Database', proj: 'Project 2', status: 'In Progress', person: 'John', deadline: '20/11/2021'},
                {task:'Draft Proposal', proj: 'Project 1', status: 'New', person: 'John', deadline: '2/11/2021'},
                {task:'UI Testing', proj: 'Project 1',status: 'Completed', person: 'John', deadline: '10/11/2021'}
            ],

        }
    },
    computed: {
        filteredRows() {
                return this.rows.filter(row => {
                const task = row.task.toString().toLowerCase();
                const status = row.status.toLowerCase();
                const person = row.person.toLowerCase();
                const searchTerm = this.filter.toLowerCase();

                return task.includes(searchTerm) || status.includes(searchTerm) || person.includes(searchTerm);
            });
        },
        details(){
            var department = this.departments.filter(department => department.department_id === this.loggedUser.department_id)[0].department_name
            return{
                name:this.loggedUser.name,
                password:this.loggedUser.password,email:this.loggedUser.email
                ,department:department,position:this.loggedUser.position
                ,current_points:this.loggedUser.current_pts,employment_type:"Full Time"
            }
        },
        reviews(){
            return this.reviews.filter(review => review.user_id === this.loggedUser.user_id)
        },
        averageReviews(){
            var total = 0
            var listedRatings = this.reviews.filter(review => review.user_id === this.loggedUser.user_id)
           console.log(listedRatings)
           for(let i = 0; i < listedRatings.length; i++){
               total+= listedRatings[i].ratings
           }
        //    for(rating in ratings){
        //         total+=ratings[rating].rating
        //     }
            return Math.round(total/listedRatings.length)
        }
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

#space{
    height:30px;
}

</style>