<template>
<div>

<div class="card projectCard" style="width: 18rem;" v-if="taskStatus === 'New'">
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
    <button class = "btn delete-btn" data-toggle="modal" data-target="#deleteModal">Delete</button>
      </div>

      </div>

  </div>


<div class="card projectCard" style="width: 18rem;" v-if="taskStatus === 'Review'">
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
    <button class = "btn delete-btn" data-toggle="modal" data-target="#deleteModal">Delete</button>
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


<!-- Modal -->
<div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">Delete task</h3>

      </div>
      <div class="modal-body">
        Are you sure? This task CANNOT be reversed!
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">Yes</button>
      </div>
    </div>
    <h5>Click anywhere to cancel</h5>
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
.modal-title{
    margin:auto;
}
.modal-dialog h5{
  color:white;
}
.modal-footer{
    display: flex;
    justify-content: center;

}
</style>