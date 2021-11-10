
<template>
<Navbar/>
<div class="container">
<section class="panel">
    <header class="panel-heading">
        All projects List
        <span class="pull-right">
            <button type="button" id="loading-btn" class="btn btn-warning btn-xs"><i class="fa fa-refresh"></i> Refresh</button>
            <a href="#" class=" btn btn-success btn-xs"> Create New Project</a>
        </span>
    </header>
    <div class="panel-body">
        <div class="row">

            <div class="col-md-12">
                <div class="input-group"><input type="text" placeholder="Search Here" class="input-sm form-control"> <span class="input-group-btn">
                <button type="button" class="btn btn-sm btn-success"> Go!</button> </span></div>
            </div>
        </div>
    </div>
    <table class="table table-hover p-table">
        <thead>
        <tr>
            <th>Project Name</th>
            <th>Team Member</th>
            <th>Rewarded Points</th>
            <th>Project Status</th>
            <!-- Project Due -->
            <th>Custom</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td class="p-name">
                <a href="project_details.html">New Dashboard BS3</a>
                <br>
                <small>Created 27.11.2014</small>
            </td>
            <td class="p-team">
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar1.png"></a>
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar2.png"></a>
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar3.png"></a>
            </td>
            <td class="p-progress">
                <div class="progress progress-xs">
                    <div style="width: 87%;" class="progress-bar progress-bar-success"></div>
                </div>
                <small>87% Complete </small>
            </td>
            <td>
                <span class="label label-primary">Active</span>
            </td>
            <td>
                <a href="project_details.html" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> View </a>
                <a href="#" class="btn btn-info btn-xs"><i class="fa fa-pencil"></i> Edit </a>
                <a href="#" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> Delete </a>
            </td>
        </tr>
        <tr>
            <td class="p-name">
                <a href="project_details.html">Creative Portfolio</a>
                <br>
                <small>Created 21.10.2014</small>
            </td>
            <td class="p-team">
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar1.png"></a>
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar2.png"></a>
            </td>
            <td class="p-progress">
                <div class="progress progress-xs">
                    <div style="width: 65%;" class="progress-bar progress-bar-success"></div>
                </div>
                <small>65% Complete </small>
            </td>
            <td>
                <span class="label label-primary">Active</span>
            </td>
            <td>
                <a href="project_details.html" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> View </a>
                <a href="#" class="btn btn-info btn-xs"><i class="fa fa-pencil"></i> Edit </a>
                <a href="#" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> Delete </a>
            </td>
        </tr>
        <tr>
            <td class="p-name">
                <a href="project_details.html">Directory &amp; listing</a>
                <br>
                <small>Created 2.09.2014</small>
            </td>
            <td class="p-team">
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar1.png"></a>
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar2.png"></a>
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar3.png"></a>
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar3.png"></a>
            </td>
            <td class="p-progress">
                <div class="progress progress-xs">
                    <div style="width: 55%;" class="progress-bar progress-bar-success"></div>
                </div>
                <small>55% Complete </small>
            </td>
            <td>
                <span class="label label-primary">Active</span>
            </td>
            <td>
                <a href="project_details.html" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> View </a>
                <a href="#" class="btn btn-info btn-xs"><i class="fa fa-pencil"></i> Edit </a>
                <a href="#" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> Delete </a>
            </td>
        </tr>
        <tr>
            <td class="p-name">
                <a href="project_details.html">New Dashboard BS3</a>
                <br>
                <small>Created 27.11.2014</small>
            </td>
            <td class="p-team">
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar1.png"></a>
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar2.png"></a>
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar3.png"></a>
            </td>
            <td class="p-progress">
                <div class="progress progress-xs">
                    <div style="width: 87%;" class="progress-bar progress-bar-success"></div>
                </div>
                <small>87% Complete </small>
            </td>
            <td>
                <span class="label label-primary">Active</span>
            </td>
            <td>
                <a href="project_details.html" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> View </a>
                <a href="#" class="btn btn-info btn-xs"><i class="fa fa-pencil"></i> Edit </a>
                <a href="#" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> Delete </a>
            </td>
        </tr>
        <tr>
            <td class="p-name">
                <a href="project_details.html">Creative Portfolio</a>
                <br>
                <small>Created 21.10.2014</small>
            </td>
            <td class="p-team">
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar1.png"></a>
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar2.png"></a>
            </td>
            <td class="p-progress">
                <div class="progress progress-xs">
                    <div style="width: 65%;" class="progress-bar progress-bar-success"></div>
                </div>
                <small>65% Complete </small>
            </td>
            <td>
                <span class="label label-primary">Active</span>
            </td>
            <td>
                <a href="project_details.html" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> View </a>
                <a href="#" class="btn btn-info btn-xs"><i class="fa fa-pencil"></i> Edit </a>
                <a href="#" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> Delete </a>
            </td>
        </tr>
        <tr>
            <td class="p-name">
                <a href="project_details.html">Directory &amp; listing</a>
                <br>
                <small>Created 2.09.2014</small>
            </td>
            <td class="p-team">
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar1.png"></a>
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar2.png"></a>
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar3.png"></a>
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar4.png"></a>
            </td>
            <td class="p-progress">
                <div class="progress progress-xs">
                    <div style="width: 55%;" class="progress-bar progress-bar-success"></div>
                </div>
                <small>55% Complete </small>
            </td>
            <td>
                <span class="label label-default">Inactive</span>
            </td>
            <td>
                <a href="project_details.html" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> View </a>
                <a href="#" class="btn btn-info btn-xs"><i class="fa fa-pencil"></i> Edit </a>
                <a href="#" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> Delete </a>
            </td>
        </tr>
        <tr>
            <td class="p-name">
                <a href="project_details.html">New Dashboard BS3</a>
                <br>
                <small>Created 27.11.2014</small>
            </td>
            <td class="p-team">
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar1.png"></a>
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar2.png"></a>
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar3.png"></a>
            </td>
            <td class="p-progress">
                <div class="progress progress-xs">
                    <div style="width: 87%;" class="progress-bar progress-bar-success"></div>
                </div>
                <small>87% Complete </small>
            </td>
            <td>
                <span class="label label-primary">Active</span>
            </td>
            <td>
                <a href="project_details.html" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> View </a>
                <a href="#" class="btn btn-info btn-xs"><i class="fa fa-pencil"></i> Edit </a>
                <a href="#" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> Delete </a>
            </td>
        </tr>
        <tr>
            <td class="p-name">
                <a href="project_details.html">Creative Portfolio</a>
                <br>
                <small>Created 21.10.2014</small>
            </td>
            <td class="p-team">
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar1.png"></a>
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar2.png"></a>
            </td>
            <td class="p-progress">
                <div class="progress progress-xs">
                    <div style="width: 65%;" class="progress-bar progress-bar-success"></div>
                </div>
                <small>65% Complete </small>
            </td>
            <td>
                <span class="label label-default">Inactive</span>
            </td>
            <td>
                <a href="project_details.html" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> View </a>
                <a href="#" class="btn btn-info btn-xs"><i class="fa fa-pencil"></i> Edit </a>
                <a href="#" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> Delete </a>
            </td>
        </tr>
        <tr>
            <td class="p-name">
                <a href="project_details.html">Directory &amp; listing</a>
                <br>
                <small>Created 2.09.2014</small>
            </td>
            <td class="p-team">
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar1.png"></a>
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar2.png"></a>
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar3.png"></a>
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar4.png"></a>
            </td>
            <td class="p-progress">
                <div class="progress progress-xs">
                    <div style="width: 55%;" class="progress-bar progress-bar-success"></div>
                </div>
                <small>55% Complete </small>
            </td>
            <td>
                <span class="label label-primary">Active</span>
            </td>
            <td>
                <a href="project_details.html" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> View </a>
                <a href="#" class="btn btn-info btn-xs"><i class="fa fa-pencil"></i> Edit </a>
                <a href="#" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> Delete </a>
            </td>
        </tr>
        <tr>
            <td class="p-name">
                <a href="project_details.html">New Dashboard BS3</a>
                <br>
                <small>Created 27.11.2014</small>
            </td>
            <td class="p-team">
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar1.png"></a>
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar2.png"></a>
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar3.png"></a>
            </td>
            <td class="p-progress">
                <div class="progress progress-xs">
                    <div style="width: 87%;" class="progress-bar progress-bar-success"></div>
                </div>
                <small>87% Complete </small>
            </td>
            <td>
                <span class="label label-primary">Active</span>
            </td>
            <td>
                <a href="project_details.html" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> View </a>
                <a href="#" class="btn btn-info btn-xs"><i class="fa fa-pencil"></i> Edit </a>
                <a href="#" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> Delete </a>
            </td>
        </tr>
        <tr>
            <td class="p-name">
                <a href="project_details.html">Creative Portfolio</a>
                <br>
                <small>Created 21.10.2014</small>
            </td>
            <td class="p-team">
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar1.png"></a>
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar2.png"></a>
            </td>
            <td class="p-progress">
                <div class="progress progress-xs">
                    <div style="width: 65%;" class="progress-bar progress-bar-success"></div>
                </div>
                <small>65% Complete </small>
            </td>
            <td>
                <span class="label label-primary">Active</span>
            </td>
            <td>
                <a href="project_details.html" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> View </a>
                <a href="#" class="btn btn-info btn-xs"><i class="fa fa-pencil"></i> Edit </a>
                <a href="#" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> Delete </a>
            </td>
        </tr>
        <tr>
            <td class="p-name">
                <a href="project_details.html">Directory &amp; listing</a>
                <br>
                <small>Created 2.09.2014</small>
            </td>
            <td class="p-team">
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar1.png"></a>
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar2.png"></a>
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar3.png"></a>
                <a href="#"><img alt="image" class="member" src="https://bootdey.com/img/Content/avatar/avatar4.png"></a>
            </td>
            <td class="p-progress">
                <div class="progress progress-xs">
                    <div style="width: 55%;" class="progress-bar progress-bar-success"></div>
                </div>
                <small>55% Complete </small>
            </td>
            <td>
                <span class="label label-primary">Active</span>
            </td>
            <td>
                <a href="project_details.html" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> View </a>
                <a href="#" class="btn btn-info btn-xs"><i class="fa fa-pencil"></i> Edit </a>
                <a href="#" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> Delete </a>
            </td>
        </tr>
        </tbody>
    </table>
</section>
</div>
    
</template>
<script>
// import { AccountCheckIcon } from '@icons/material'
import Navbar from  "./Navbar.vue"
import mixin from "../mixin"
export default {
    name:"EmployerProject",
    components: {Navbar},
    mixins:[mixin],
    props:["projectName","projectAssignees","projectAssigned","projectDue","projectStatus",'projectReward'],
      beforeMount(){
       this.getUserType()
        if(this.usertype !== "employer"){
            this.$router.push("/")
        }
  },
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
.project-title{
    background: linear-gradient(57.11deg, #6D9DF8 -4.9%, #6461FF 101.23%, rgba(109, 157, 248, 0.64) 101.24%, rgba(109, 157, 248, 0) 101.24%);
    color: white;
    max-width: 100%;
}
.project-btn{
/* background: linear-gradient(0deg, #504DFF, #504DFF), rgba(78, 74, 255, 0.61); */
    background: rgb(253, 198, 97);
    border-radius: 5px;
    color: black;
    border: 1px solid black;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.19);
}
.iconContainer{
    display: flex;
    align-items: center;
    justify-content:center;
}

.member{
    height: 50px;
    width: 50px;
}
</style>