<template>
<div class="card project-detail" style="width: 18rem;">
  <div class="card-header project-title">
    Project details
  </div>
  <div class = "card-body">
      <!-- <AccountCheckIcon/> -->

      <div class = "project-details">
    <table class="table">
        <tr>
            <th scope = "row" align="end">Project due:</th>
            <td>15/11/2020</td>
        </tr>
        <!-- <tr>
            <th scope = "row">Reward:</th>
            <td>500 </td>
        </tr> -->
        <tr>
            <th scope = "row">Status:</th>
            <td>Incomplete</td>
        </tr>
        <tr>
            <th scope = "row">Progress:</th>
            <td>25%</td>
        </tr>


    </table>
    <router-link to ="/projects" class = "btn project-btn">
    Back
    </router-link>
    <!-- <button class = "btn project-btn">Back</button> -->
      </div>


      </div>

  </div>
</template>
<script>
export default {
    name:"ProjectDetail"
}
</script>
<style scoped>
.project-details{
      display: flex;
    flex-wrap: wrap;
}




th{
    width:50%;
    text-align: right;
}
td{
    width:50%;
    text-align: left;
}
.project-detail{
   
    margin:10px;
    border: none;
    height:360px;
}
.project-title{
    background: linear-gradient(57.11deg, #6D9DF8 -4.9%, #6461FF 101.23%, rgba(109, 157, 248, 0.64) 101.24%, rgba(109, 157, 248, 0) 101.24%);
     color: white;
}
.project-btn{
background: linear-gradient(0deg, #504DFF, #504DFF), rgba(78, 74, 255, 0.61);
border-radius: 5px;
color: white;
}
.iconContainer{
    display: flex;
    align-items: center;
    justify-content:center;
}
.card-body{
    display: grid;
    justify-content: center;
    align-content: center;

}
.project-details{
    display: grid;
}

</style>
<style>

</style>