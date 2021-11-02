<template>
<div >
<nav class="navbar navbar-expand-sm navbar-dark fixed-top" id = "barz">
  <div class="container-fluid">
    <router-link class = "nav-link" to="/"><img src="../assets/projeck.png" width="60" height="47" ></router-link>
    <!-- <a class="navbar-brand" href="src\components\Home.vue" ></a> -->
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" style = "color:white" id="offcanvasNavbarLabel">
          {{loggedUser.name}}
          </h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" v-if="usertype === 'employer'">

          <!-- employer -->
          <li class="nav-item px-2">
            <router-link class = "nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item px-2">
            <router-link class = "nav-link" to="/projects">Projects</router-link>
            <!-- <a class="nav-link" href="#">Projects</a> -->
          </li>
         <li class="nav-item px-2">
            <router-link class = "nav-link" to="/calendar">Calendar</router-link>
          </li>
         <li class="nav-item px-2">
           <router-link class = "nav-link" to="/employees">Employees</router-link>
            <!-- <a class="nav-link" href="#">Employees</a> -->
          </li>
         <li class="nav-item px-2">
           <router-link class = "nav-link" to="/review">Review</router-link>
            <!-- <a class="nav-link" href="#">Review</a> -->
          </li>
         <li class="nav-item px-2">
            <a class="nav-link" href="#">Settings</a>
          </li>
         <li class="nav-item px-2">
            <a class="nav-link" href="#" v-on:click = "logoutUser">Logout</a>
          </li>
        </ul>

        <!-- employee -->
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" v-else>
          <li class="nav-item px-3">
            <router-link class = "nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item px-3">
            <router-link class = "nav-link" to="/emptasks">To-do</router-link>
            <!-- <a class="nav-link" href="#">To-do</a> -->
          </li>
         <li class="nav-item px-3">
            <!-- <a class="nav-link" href="#">Calendar</a> -->
            <router-link class = "nav-link" to="/calendar">Calendar</router-link>
          </li>
         <li class="nav-item px-3">
           <router-link class = "nav-link" to="/profile">Profile</router-link>

          </li>
         <li class="nav-item px-3">
            <a class="nav-link" href="#" v-on:click = "logoutUser">Logout</a>
          </li>
        </ul>
        
      </div>
    </div>
  </div>
</nav>
</div>
</template>

<script>
import mixin from "../mixin"
export default {
    name:"Navbar",
    // props: ["usertype"],
    mixins:[mixin],
    data(){
        return{

        }
    },
    beforeMount(){
      this.getUserType();
      this.getLoggedUser();

      // console.log(this.usertype)
    }

}
</script>
<style scoped>
#barz,#offcanvasNavbar{
    background: linear-gradient(57.11deg, #86B0FF -4.9%, #5b59fd 101.23%, rgba(133, 175, 255, 0.61) 101.24%, rgba(52, 97, 184, 0.64) 101.24%);    
    /* background: #6461FF; */
    padding-top: 0%;
    padding-bottom: 0%;
}
.active-page{
    background: rgb(3, 3, 117);
}
.navbar-nav{
    display: flex;
    flex-wrap: wrap;
}

</style>