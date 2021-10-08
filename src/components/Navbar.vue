<template>
<div >
<nav class="navbar navbar-dark fixed-top" id = "barz">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" >ProJeck</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" style = "color:white" id="offcanvasNavbarLabel">Fella</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" v-if="usertype === 'employer'">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Projects</a>
          </li>
         <li class="nav-item">
            <a class="nav-link" href="#">Calendar</a>
          </li>
         <li class="nav-item">
            <a class="nav-link" href="#">Employees</a>
          </li>
         <li class="nav-item">
            <a class="nav-link" href="#">Review</a>
          </li>
         <li class="nav-item">
            <a class="nav-link" href="#">Settings</a>
          </li>
         <li class="nav-item">
            <a class="nav-link" href="#">Logout</a>
          </li>
        </ul>

        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" v-else>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">To-do</a>
          </li>
         <li class="nav-item">
            <a class="nav-link" href="#">Calendar</a>
          </li>
         <li class="nav-item">
            <a class="nav-link" href="#">Settings</a>
          </li>
         <li class="nav-item">
            <a class="nav-link" href="#">Logout</a>
          </li>
        </ul>

        
      </div>
    </div>
  </div>
</nav>
</div>
</template>
<script>
export default {
    name:"Navbar",
    props: ["usertype"],
    data(){
        return{

        }
    },
    beforeMount(){
      console.log(this.usertype)
    }

}
</script>
<style scoped>
#barz,#offcanvasNavbar{
    background: linear-gradient(57.11deg, #86B0FF -4.9%, #6461FF 101.23%, rgba(133, 175, 255, 0.61) 101.24%, rgba(52, 97, 184, 0.64) 101.24%);    
}
.active-page{
    background: rgb(3, 3, 117);
}

</style>