<template>
<div class = "page">
    <Navbar :usertype="'employer'"/>
    <h1 id = "project-name">Project Name</h1>
    <div class = "task-container">
        
    <ProjectDetail/>
    <EmployerTask :taskStatus = "'incomplete'" :taskReward="'1500'" :taskDue="'14/11/2021'"/>
    <EmployerTask :taskStatus = "'review'" :taskReward="'300'" :taskDue="'11/10/2021' " />
    <EmployerTask :taskStatus = "'complete'" :taskReward="'500'" :completedAt="'17/9/2021'"
    :completedBy="'Matilda'"/>
    <EmployerTask/>
    <AddItem :itemType = "'task'"/>
    </div>

</div>
</template>
<script>
import ProjectDetail from "./ProjectDetail.vue"
import Navbar from "./Navbar.vue"
import EmployerTask from "./EmployerTask.vue"
import AddItem from "./AddItem.vue"
export default {
    name:"Project",
    components:{
        ProjectDetail,
        Navbar,
        EmployerTask,
        AddItem
    }
}
</script>
<style scoped>
h1{
    align-self: middle;
}
.task-container{
          display: flex;
    flex-wrap: wrap;
}
.page{
    min-height: 100vh;
    width:100%;
    background:rgba(248, 248, 248, 1);
    /* display: flex; */
}
.task-container{
      min-height:100vh;
  /* margin-top:60px; */
  /* background:grey; */
  padding-top:60px;
  padding-bottom:60px;
}
#project-name{
    width: max-content;
    margin: auto;
    box-shadow: 0px 5px 0px rgba(83, 90, 249, 0.81);
}
</style>
<style>
</style>