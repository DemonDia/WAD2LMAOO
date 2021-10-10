<template>
  <!-- <Home :usertype ="usertype"/> -->
  <!-- <Modal/> -->
  <!-- <Project/> -->
  <!-- <Calendar/> -->
  <!-- <Dashboard/> -->
<EmployeeToDo/>
</template>

<script>
// import Modal from "./components/modal.vue"
// import Home from "./components/Home.vue"
// import Project from "./components/Project.vue"
// import Calendar from "./components/Calendar.vue"
// import Dashboard from "./components/Employee_Dashboard.vue"
import EmployeeToDo from "./components/EmployeeToDoList.vue"
export default {
  name: 'App',
  components: {
    // Home
    // Modal
    // Project
    // Calendar
    // Dashboard
    EmployeeToDo
},
  data(){
    return{
      // usertype:"employer"
      usertype:"employer"
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
}
</style>
