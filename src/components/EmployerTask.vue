<template>
<div>

<div class="card projectCard" style="width: 18rem;" v-if="taskStatus === 'incomplete'">
  <div class="card-header task-title">
    Task Name
  </div>
  <div class = "card-body">


      <div class = "task-details">
    <table class="table" style="width: 18rem;">
        <tr>
            <th scope = "row">Task due:</th>
            <td>{{taskDue}}</td>
        </tr>
        <tr>
            <th scope = "row">Status:</th>
            <td>{{taskStatus}} </td>
        </tr>
        <tr>
            <th scope = "row">Reward:</th>
            <td>{{taskReward}} </td>
        </tr>

    </table>
    <button class = "btn project-btn">Edit</button>
    <button class = "btn delete-btn">Delete</button>
      </div>






      </div>

  </div>


<div class="card projectCard" style="width: 18rem;" v-if="taskStatus === 'review'">
  <div class="card-header review-title">
    Task Name
  </div>
  <div class = "card-body">


      <div class = "task-details">
    <table class="table" style="width: 18rem;">

        <tr>
            <th scope = "row">Task due:</th>
            <td>{{taskDue}}</td>
        </tr>
        <tr>
            <th scope = "row">Status:</th>
            <td>{{taskStatus}} </td>
        </tr>
        <tr>
            <th scope = "row">Reward:</th>
            <td>{{taskReward}} </td>
        </tr>

        <tr>
            <th scope = "row">Approve:</th>
            <td style = "display:flex;"> <button type = "button" class = "btn  approve-btn"
            style = "background:rgba(0, 132, 37, 1);">Yes </button> 
            <button class = "btn  dont-approve-btn"
            style = "background:rgba(160, 3, 3, 1);">No </button>  </td>
        </tr>

    </table>
    <button class = "btn project-btn">Edit</button>
    <button class = "btn delete-btn">Delete</button>
      </div> 
      </div>

  </div>

<div class="card projectCard" style="width: 18rem;" v-if="taskStatus === 'complete'">
  <div class="card-header complete-title">
    Task Name
  </div>
  <div class = "card-body">


      <div class = "task-details">
    <table class="table" style="width: 18rem;">

        <tr>
            <th scope = "row">Completed at:</th>
            <td>{{completedAt}}</td>
        </tr>
        <tr>
            <th scope = "row">Reward:</th>
            <td>{{taskReward}} </td>
        </tr>

        <tr>
            <th scope = "row">Completed by:</th>
            <td>{{completedBy}} </td>
        </tr>

    </table>
      </div> 
      </div>

  </div>



</div>    
</template>
<script>
// import { AccountCheckIcon } from '@icons/material'

export default {
    name:"EmployerTask",
    props:["taskDue","taskStatus","taskReward","completedBy","completedAt"]
}
</script>
<style>
th{
    width:50%;
    text-align: right;
}
td{
    width:50%;
    text-align: left;
}
.projectCard{
   
    margin:10px;
    border: none;
    height:360px;
}
.task-title{
    background: linear-gradient(57.11deg, #6D9DF8 -4.9%, #6461FF 101.23%, rgba(109, 157, 248, 0.64) 101.24%, rgba(109, 157, 248, 0) 101.24%);
     color: white;
}
.project-btn{
background: linear-gradient(0deg, #504DFF, #504DFF), rgba(78, 74, 255, 0.61);
border-radius: 5px;
color: white;
margin:10px;
}
.delete-btn{
background: rgba(153, 11, 11, 1);
border-radius: 5px;
color: white;
margin:10px;
}
.iconContainer{
    display: flex;
    align-items: center;
    justify-content:center;
}
/* .task-details{
    display: grid;
    align-items: center;
    justify-content: center;
} */
table{
    width: 100%;
}
.card-body{
        display: grid;
    align-items: center;
    justify-content: center;
}
.task-details{
        display: grid;
    align-items: center;
    justify-content: center;
}
.approve-btn,.dont-approve-btn{
    color:white;
    padding-left:5px;
    margin:5px;
}
.review-title{
    background: rgba(218, 142, 4, 1);
    color: white;
}
.complete-title{
    background: rgba(3, 128, 38, 1);
    color: white;
}
</style>