<template>
<!-- <Navbar /> -->
  <!-- <Home/> -->
  <!-- <Modal/> -->
  <!-- <Project/> -->
  <!-- <Calendar/> -->
  <!-- <Dashboard/> -->
<!-- <EmployeeToDo/> -->
<!-- <authenticate/> -->
<!-- <ProjectReview/> -->
<!-- <MemberToReview/> -->
<!-- <AddEmployee/> -->
<!-- <EmployeeList/> -->
<!-- <ProfilePage/> -->
<!-- <Authenticate/> -->
<router-view/>
</template>

<script>
// import Authenticate from "./components/Authenticate.vue";
// import Navbar from "./components/Navbar.vue"
// import Authenticate from "./components/Authenticate.vue"
// import Modal from "./components/modal.vue"
// import Home from "./components/Home.vue"
// import Project from "./components/Project.vue"
// import Calendar from "./components/Calendar.vue"
// import Dashboard from "./components/Employee_Dashboard.vue"
// import EmployeeToDo from "./components/EmployeeToDoList.vue"
// import ProjectReview from "./components/ProjectReview.vue"
// import MemberToReview from "./components/MemberToReview.vue"
// import ProfilePage from "./components/EmployeeProfile.vue"
// import EmployeeList from "./components/EmployeeList.vue"
// import AddEmployee from "./components/AddEmployee.vue"

import mixin from "./mixin"
export default {
  name: 'App',
  mixins:[mixin],
  components: {
    // Navbar,
    // Authenticate
    // Home
    // Modal
    // Project
    // Calendar
    // Dashboard
    // EmployeeToDo
    // ProjectReview
    // MemberToReview,
    // ProfilePage
    // EmployeeList
    // AddEmployee
    
},
  data(){
    return{
      // usertype:"employer"
      // usertype:"employee"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height:100vh;
  display: flex;
  /* overflow-y:scroll; */
  /* overflow:hidden; */
}
</style>
