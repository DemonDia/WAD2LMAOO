<template>
<div>
<div class = "page" v-if = "usertype !== 'na'">
    <div class="container">
        <Navbar/>
    </div>

<!-- <div class = "pageContent"> -->
    <!-- {{usertype}} -->
    <div class="container-fluid" style="background: white">
    <!-- <div v-if="usertype ==='employer'" class = "employer-projects"> -->
        <!-- <EmployerProject :projectName ="'Proj1'" :projectAssignees = "'Ruby Kurosawa'" :projectAssigned = "'14/7/2021'"
        :projectDue ="'14/11/2021'" :projectStatus = "'incomplete'"  :projectReward = "'500'"/>
        <EmployerProject :projectName ="'Proj2'" :projectAssignees = "'Karin'" :projectAssigned = "'11/6/2021'"
        :projectDue ="'12/10/2021'" :projectStatus = "'incomplete'"  :projectReward = "'460'"/>
        <EmployerProject :projectName ="'Proj2'" :projectAssignees = "'Karin'" :projectAssigned = "'11/6/2021'"
        :projectDue ="'12/10/2021'" :projectStatus = "'incomplete'"  :projectReward = "'460'"/>
        <EmployerProject :projectName ="'Proj2'" :projectAssignees = "'Karin'" :projectAssigned = "'11/6/2021'"
        :projectDue ="'12/10/2021'" :projectStatus = "'incomplete'"  :projectReward = "'460'"/>
        <EmployerProject :projectName ="'Proj2'" :projectAssignees = "'Karin'" :projectAssigned = "'11/6/2021'"
        :projectDue ="'12/10/2021'" :projectStatus = "'incomplete'"  :projectReward = "'460'"/>
        <AddItem :itemType="'project'"/> -->

<!-- Modal -->
<!-- <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title" id="exampleModalLabel" align="center">Add new project</h2>
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
          <tr>
            <th scope = "row">Add assignees:</th>
            <td><input type = "text" class = "form-control" /></td>
          </tr>
        </table>
        <button class = "btn new-project-btn" data-dismiss="modal">Assign project</button>
      </div>
    

    </div>
    <h5>Click anywhere to cancel</h5>
  </div>
</div> -->
        <div id="bg" class="row m-4">
            <div class="container-fluid">
                <div class="row justify-content-between">
                    <h1 class="col-xl-4">{{currentMonth()}} Summary</h1>
                    <div class="card task-info col-2">
                        <div class="card-body">
                            <h5 class="card-title">Total No. of Task(s)</h5>
                            <h4 class="card-text pt-2">59</h4>
                        </div>
                    </div>   
                    <div class="card task-info col-2">
                        <div class="card-body">
                            <h5 class="card-title">No. of Completed Task(s)</h5>
                            <h4 class="card-text pt-2">25</h4>
                        </div>
                    </div>  
                    <div class="card task-info col-2">
                        <div class="card-body">
                            <h5 class="card-title">No. of Incomplete Task(s)</h5>
                            <h4 class="card-text pt-2">32</h4>
                        </div>
                    </div>  
                </div>
                <div class="row p-2 my-4 bg-white border border-dark">
                    <div class="row mx-0 p-0 justify-content-between">
                        <highcharts :options="taskStatus_employer" class="chart col border border-dark"></highcharts>
                        <highcharts :options="revenue" class="chart col border border-dark"></highcharts>
                    </div>
                    <div class="row mx-0 p-0 justify-content-between">
                        <highcharts :options="taskDist_employer" class="chart col-5 border border-dark"></highcharts>
                        <div class="task_list col border border-dark">
                            <h5 class="border-bottom border-dark py-3">Project Task List</h5><input type="text" placeholder="Filter by task/status/person" class="w-100" v-model="filter" />
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Task Status <button class="button" @click="sortTable('status', direction)"><img src="../assets/sort.png"></button></th>
                                        <th scope="col">Task Name <button class="button" @click="sortTable('task', direction)"><img src="../assets/sort.png"></button></th>
                                        <th scope="col">Project Name <button class="button" @click="sortTable('proj', direction)"><img src="../assets/sort.png"></button></th>
                                        <th scope="col">Person In-charge <button class="button" @click="sortTable('person', direction)"><img src="../assets/sort.png"></button></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(row, index) in filteredRows" :key="`task-${index}`">
                                        <td>{{ row.status }}</td>
                                        <td>{{ row.task }}</td>
                                        <td>{{ row.proj }}</td>
                                        <td>{{ row.person }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
  <!-- <div v-else>
        <div id="bg">
            <div class="container">
                <div class="row justify-content-between">
                    <h1 class="col-xl-4">{{currentMonth()}} Summary</h1>
                    <div class="card task-info col-2">
                        <div class="card-body">
                            <h5 class="card-title">Total No. of Task(s)</h5>
                            <h4 class="card-text pt-2">10</h4>
                        </div>
                    </div>   
                    <div class="card task-info col-2">
                        <div class="card-body">
                            <h5 class="card-title">No. of Completed Task(s)</h5>
                            <h4 class="card-text pt-2">2</h4>
                        </div>
                    </div>  
                    <div class="card task-info col-2">
                        <div class="card-body">
                            <h5 class="card-title">No. of Incomplete Task(s)</h5>
                            <h4 class="card-text pt-2">8</h4>
                        </div>
                    </div>  
                </div>
                <div class="row p-2 my-4 bg-white border border-dark">
                    <div class="row mx-0 p-0 justify-content-between">
                        <highcharts :options="taskStatus" class="chart col border border-dark"></highcharts>
                        <highcharts :options="rewardHist" class="chart col border border-dark"></highcharts>
                    </div>
                    <div class="row mx-0 p-0 justify-content-between">
                        <highcharts :options="taskDist" class="chart col-5 border border-dark"></highcharts>
                        <div class="task_list col border border-dark">
                            <h5 class="border-bottom border-dark py-3">Project Task List</h5>
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Task Status</th>
                                        <th scope="col">Task Name</th>
                                        <th scope="col">Project Name</th>
                                        <th scope="col">Deadline</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(row, index) in filteredRows" :key="`task-${index}`">
                                        <td>{{ row.status }}</td>
                                        <td>{{ row.task }}</td>
                                        <td>{{ row.proj }}</td>
                                        <td>{{ row.deadline }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  </div> -->
</div>
<div v-else>
<h3>You are not logged in.</h3>
</div>
</div>

<!-- </div> -->
    
</template>
<script>
// import { onBeforeMount } from '@vue/runtime-core'
import {Chart} from 'highcharts-vue'
import Navbar from "./Navbar.vue"
import mixin from "../mixin"
// import EmployerProject from "./EmployerProject.vue"
// import AddItem from "./AddItem.vue"

export default {
    name:"Home",
    mixins:[mixin],
      components: {
    Navbar,
    // EmployerProject,
    // AddItem,
    highcharts: Chart 
  },
//   props:["usertype"],
  beforeMount(){
       this.getUserType()
        if(this.usertype === "na"){
            this.$router.push("/authenticate")
        }
  },
    methods: {
        currentMonth() {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const current = new Date();
            const month = months[current.getMonth()];
            return month;
        },
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

  
  data(){
    return{
      arr:[],
            taskStatus: {
                chart: {
                    type: 'pie'
                },
                title: {
                    text: 'Task Status'
                },
                plotOptions: {
                    pie: {
                        innerSize: '70%',
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {y}'
                        }
                    }
                },
                series: [{
                    name: 'Count',
                    data: [{
                        name: 'Completed Task(s)',
                        y: 2,
                        color: "#1b3e6e"
                    }, {
                        name: 'Incomplete Task(s)',
                        y: 8,
                        color: "#6c9fe6"
                    }]
                }]
            },
            rewardHist: {
                chart: {
                    type: 'line'
                },
                title: {
                    text: 'Points Reward History'
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
                },
                series: [{
                    name: "Points Per Month",
                    data: [20, 10, 15, 7, 10, 16, 10, 14, 8]
                }],
            },
            taskDist: {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Task Distribution'
                },
                xAxis: {
                    categories: ['Project 1', 'Project 2', 'Project 3', 'Project 4']
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Total No. of Tasks'
                    },
                    stackLabels: {
                        enabled: true,
                        
                    }
                },
                tooltip: {
                    headerFormat: '<b>{point.x}</b><br/>',
                    pointFormat: '{series.name}: {point.y}'
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                    }
                },
                series: [{
                    name: 'Completed',
                    data: [0, 1, 1, 0],
                    color: "#1b3e6e"
                }, {
                    name: 'Incomplete',
                    data: [3, 3, 1, 1],
                    color: "#6c9fe6"
                }]
            },
            taskStatus_employer: {
                chart: {
                    type: 'pie'
                },
                title: {
                    text: 'Task Status'
                },
                plotOptions: {
                    pie: {
                        innerSize: '70%',
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {y}'
                        }
                    }
                },
                series: [{
                    name: 'Count',
                    data: [{
                        name: 'Completed Task(s)',
                        y: 25,
                        color: "#1b3e6e"
                    }, {
                        name: 'Incomplete Task(s)',
                        y: 32,
                        color: "#6c9fe6"
                    }]
                }]
            },
            taskDist_employer: {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Task Distribution'
                },
                xAxis: {
                    categories: ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5', 'Project 6']
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Total No. of Tasks'
                    },
                    stackLabels: {
                        enabled: true,
                        
                    }
                },
                tooltip: {
                    headerFormat: '<b>{point.x}</b><br/>',
                    pointFormat: '{series.name}: {point.y}'
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                    }
                },
                series: [{
                    name: 'Completed',
                    data: [10, 4, 2, 7, 2,0],
                    color: "#1b3e6e"
                }, {
                    name: 'Incomplete',
                    data: [3, 5, 10, 2, 2, 10],
                    color: "#6c9fe6"
                }]
            },
            revenue: {
                chart: {
                    type: 'line'
                },
                title: {
                    text: 'Revenue Growth'
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
                },
                series: [{
                    name: "Profits Per Month",
                    data: [20000, 40000, 50000, 70000, 100000, 160000, 100000, 99000, 110000]
                }],
            },
            filter: '',
            sort: '',
            direction: 'asc',
            columns: ['task','proj','status','person'],
            rows: [
                {task:'Complete UI', proj: 'Project 5', status: 'Completed', person: 'James', deadline: '28/11/2021'},
                {task:'Prototype', proj: 'Project 1', status: 'New', person: 'James', deadline: '28/11/2021'},
                {task:'Draft Proposal', proj: 'Project 2', status: 'In Progress', person: 'James', deadline: '28/11/2021'},
                {task:'Setup Database', proj: 'Project 2', status: 'In Progress', person: 'John', deadline: '20/11/2021'},
                {task:'Draft Proposal', proj: 'Project 1', status: 'New', person: 'Kelly', deadline: '2/11/2021'},
                {task:'UI Testing', proj: 'Project 1',status: 'Completed', person: 'Den', deadline: '10/11/2021'}
            ]
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
/* .container-fluid{
    background: white;
} */
.table{
    table-layout:fixed;
    width:100%;
}
.task_list{
    overflow-y:scroll;
}
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
.employer-projects{
      display: flex;
    flex-wrap: wrap;
}


.new-project-btn{
background: linear-gradient(0deg, #504DFF, #504DFF), rgba(78, 74, 255, 0.61);
border-radius: 5px;
color: white;
}
.modal-title{
  margin: auto;
}
.modal-dialog h5{
  color:white;
}

/* employee homepage aka dashboard */

    .container {
        margin-top: 80px;
    }

    h1 {
        text-align: left;
        padding-top: 25px;
    }

    .task-info {
        height: 100px;
        width: 270px;
        background: linear-gradient(57.11deg, #6D9DF8 -4.9%, #6461FF 101.23%, rgba(109, 157, 248, 0.64) 101.24%, rgba(109, 157, 248, 0) 101.24%);        color:white;
    }

    .card-body {
        padding: 10px 0px;
    }

    .chart {
        padding: 0px;
        margin: 5px;
    }

    .task_list {
        margin: 5px;
        height: 400px;
    }

    img {
        width: 20px;
    }

    .button {
        border: none;
        background-color: transparent;
    }

</style>