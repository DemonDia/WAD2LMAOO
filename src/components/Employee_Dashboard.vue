<template>
    <div class="page">
        <Navbar :usertype="'employee'"/>
        <div id="bg">
            <div class="container">
                <div class="row justify-content-between">
                    <h1 class="col-4">{{currentMonth()}} Summary</h1>
                    <div class="card col-2">
                        <div class="card-body">
                            <h5 class="card-title">Total No. of Task(s)</h5>
                            <h4 class="card-text pt-2">10</h4>
                        </div>
                    </div>   
                    <div class="card col-2">
                        <div class="card-body">
                            <h5 class="card-title">No. of Completed Task(s)</h5>
                            <h4 class="card-text pt-2">2</h4>
                        </div>
                    </div>  
                    <div class="card col-2">
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
</template>

<script>
import Navbar from "./Navbar.vue"
import {Chart} from 'highcharts-vue'
export default {
    name:"Project",
    components:{
        Navbar,
        highcharts: Chart 
    },
    methods: {
        currentMonth() {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const current = new Date();
            const month = months[current.getMonth()];
            return month;
        },
    },
    data() {
        return {

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
    }
}
</script>

<style>
/* employer */
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

    .card {
        height: 100px;
        width: 270px;
        background-image: linear-gradient(to right, rgb(156, 185, 238),rgb(91, 143, 255));
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