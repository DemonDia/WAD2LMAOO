// import Home from "../components/Home.vue"

// const routes = [
//     {path:"/home",component:Home},
// ]
// export default routes
import { createWebHistory, createRouter } from 'vue-router';
//
import redirect from "../components/redirect.vue"
// 
import Authenticate from "../components/Authenticate.vue";
//
import Home from "../components/Home.vue"
//
import Calendar from "../components/Calendar.vue"
// import Project from "./components/Project.vue"
// import Dashboard from "./components/Employee_Dashboard.vue"
import EmployeeToDo from "../components/EmployeeToDoList.vue"
// import ProjectReview from "./components/ProjectReview.vue"
// import MemberToReview from "./components/MemberToReview.vue"
import ProfilePage from "../components/EmployeeProfile.vue"
// import EmployeeList from "./components/EmployeeList.vue"
// import AddEmployee from "./components/AddEmployee.vue"
const routes = [
	{
		path: '/',
		name:"Default",
		component: redirect
	},
	{
		path: '/authenticate',
		name:"Authenticate",
		component: Authenticate
	},

	{
		path: '/home',
		name:"Home",
		component: Home
	},
	{
		path: "/calendar",
		nam:"Calendar",
		component:Calendar
	},
	{
		path: "/emptasks",
		nam:"EmployeeTasks",
		component:EmployeeToDo
	},
	{
		path: "/profile",
		nam:"Profile",
		component:ProfilePage
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;


