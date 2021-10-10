<template>
<div class = "page">
<Navbar :usertype ="usertype"/>
<div class = "pageContent">
    <!-- {{usertype}} -->
    <div v-if="usertype ==='employer'" class = "employer-projects">
  <EmployerProject :projectName ="'Proj1'" :projectAssignees = "'Ruby Kurosawa'" :projectAssigned = "'14/7/2021'"
  :projectDue ="'14/11/2021'" :projectStatus = "'incomplete'"  :projectReward = "'500'"/>
  <EmployerProject :projectName ="'Proj2'" :projectAssignees = "'Karin'" :projectAssigned = "'11/6/2021'"
  :projectDue ="'12/10/2021'" :projectStatus = "'incomplete'"  :projectReward = "'460'"/>
  <EmployerProject :projectName ="'Proj2'" :projectAssignees = "'Karin'" :projectAssigned = "'11/6/2021'"
  :projectDue ="'12/10/2021'" :projectStatus = "'incomplete'"  :projectReward = "'460'"/>
  <EmployerProject :projectName ="'Proj2'" :projectAssignees = "'Karin'" :projectAssigned = "'11/6/2021'"
  :projectDue ="'12/10/2021'" :projectStatus = "'incomplete'"  :projectReward = "'460'"/>
  <EmployerProject :projectName ="'Proj2'" :projectAssignees = "'Karin'" :projectAssigned = "'11/6/2021'"
  :projectDue ="'12/10/2021'" :projectStatus = "'incomplete'"  :projectReward = "'460'"/>
  <AddItem :itemType="'project'"/>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
</div>
  </div>
  <div v-else>
        <div id="bg">
            <div class="container">
                <div class="row justify-content-between">
                    <h1 class="col-4">{{currentMonth()}} Summary</h1>
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
                                        <th scope="col">Task Name</th>
                                        <th scope="col">Project Name</th>
                                        <th scope="col">Deadline</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">Complete UI</td>
                                        <td>Project 1</td>
                                        <td>28/10/2021</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Draft Proposal</td>
                                        <td>Project 3</td>
                                        <td>20/10/2021</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">UI Prototype</td>
                                        <td>Project 4</td>
                                        <td>01/11/2021</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>





  </div>
</div>


</div>
    
</template>
<script>
// import { onBeforeMount } from '@vue/runtime-core'
import {Chart} from 'highcharts-vue'
import Navbar from "./Navbar.vue"
import EmployerProject from "./EmployerProject.vue"
import AddItem from "./AddItem.vue"

export default {
    name:"Home",
      components: {
    Navbar,
    EmployerProject,
    AddItem,
    highcharts: Chart 
  },
  props:["usertype"],
    methods: {
        currentMonth() {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const current = new Date();
            const month = months[current.getMonth()];
            return month;
        },
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






    }
  },
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
  margin-top:60px;
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

 .page{
        min-height: 100vh;
        width:100%;
        background:rgba(248, 248, 248, 1);
        /* display: flex; */
    }

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

</style>