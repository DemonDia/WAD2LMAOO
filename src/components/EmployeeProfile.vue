<template>
<div class = "page">
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
    <Navbar :usertype ="'employee'"/>
    <h3>Profile Page</h3>
    <div class="container">
        <div class="row">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#about" role="tab" aria-controls="about" aria-selected="true">About Me</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="tasks-tab" data-bs-toggle="tab" href="#tasks" role="tab" aria-controls="tasks" aria-selected="false">My Tasks</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="settings-tab" data-bs-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">Settings</a>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="about-tab">
                    <div class="container">
                        <div class="mt-4 row">
                            <div class="col-sm-3">
                                <img src="../assets/logo.png" class="rounded float-start border " alt="...">
                            </div>
                            <div class="col">
                                <div class="my-4 row">
                                    <label class="col-sm-4 col-form-label">Name:</label>
                                    <div class="col-sm-8 details">{{details.name}}</div>
                                </div>
                                <div class="my-4 row">
                                    <label class="col-sm-4 col-form-label">Department:</label>
                                    <div class="col-sm-8 details">{{details.department}}</div>
                                </div>
                                <div class="my-4 row">
                                    <label class="col-sm-4 col-form-label">Position:</label>
                                    <div class="col-sm-8 details">{{details.position}}</div>
                                </div>
                                <div class="my-4 row">
                                    <label class="col-sm-4 col-form-label">Employment Type:</label>
                                    <div class="col-sm-8 details">{{details.employment_type}}</div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="my-4 row">
                                    <label class="col-sm-4 col-form-label">Email:</label>
                                    <div class="col-sm-8 details">{{details.email}}</div>
                                </div>
                                <div class="my-4 row">
                                    <label class="col-sm-4 col-form-label">Password:</label>
                                    <div class="col-sm-8 details">{{details.password}}</div>
                                </div>
                                <div class="my-4 row">
                                    <label class="col-sm-4 col-form-label">Current Points:</label>
                                    <div class="col-sm-8 details">{{details.current_points}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="tasks" role="tabpanel" aria-labelledby="tasks-tab">
                    <input type="text" placeholder=" Filter by task/status" class="w-100 mt-3" v-model="filter" />
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Task Status <button class="button" @click="sortTable('status', direction)"><img class="sort" src="../assets/sort.png"></button></th>
                                <th scope="col">Task Name <button class="button" @click="sortTable('task', direction)"><img class="sort" src="../assets/sort.png"></button></th>
                                <th scope="col">Project Name <button class="button" @click="sortTable('proj', direction)"><img class="sort" src="../assets/sort.png"></button></th>
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
                                <div class="ratings"> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star"></i> </div>
                                <h5 class="review-count">12 Reviews</h5>
                            </div>
                            <div class="mt-5 card">
                                <div class="card-body">
                                    <h5 class="review-stat card-title">Anon</h5>
                                    <div class="small-ratings card-subtitle"> 
                                        <i class="fa fa-star rating-color"></i> 
                                        <i class="fa fa-star rating-color"></i> 
                                        <i class="fa fa-star rating-color"></i> 
                                        <i class="fa fa-star"></i> 
                                        <i class="fa fa-star"></i> 
                                    </div>
                                    <p class="card-text">John is helpful and conpletes his task on time.</p>
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
</template>

<script>
import Navbar from "./Navbar.vue"

export default {
    name:"ProfilePage",
    components: {
        Navbar,
    },
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
            details: {name:"John", password:"IT123john", email:"john_IT.gmail.com", department:"IT", position:"Team Lead", current_points:"10", employment_type: "Full Time"}
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
        }
    }
}

</script>

<style>

.page{
    min-height: 100vh;
    width:100%;
    /* display: flex; */
}
.pageContent{
  min-height:100vh;
  /* margin-top:60px; */
  background:rgba(248, 248, 248, 1)
;
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

.container {
    padding: 10px;
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

</style>