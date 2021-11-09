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
import Project from "../components/Project.vue"
import EmployeeToDo from "../components/EmployeeToDoList.vue"
import ProjectReview from "../components/ProjectReview.vue"
import MemberToReview from "../components/MemberToReview.vue"
import ProfilePage from "../components/EmployeeProfile.vue"
import EmployeeList from "../components/EmployeeList.vue"
import AddEmployee from "../components/AddEmployee.vue"
import ErrorPage from "../components/ErrorPage.vue"
// import EmployerProject from "../components/EmployerProject.vue"
import EmployerProjects from "../components/EmployerProjects"
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
		name:"Profile",
		component:ProfilePage
	}
	,{
		path:"/:catchAll(.*)",
		name:"Error",
		component:ErrorPage
	}
	,{
		path:"/employees",
		name:"EmployeeList",
		component:EmployeeList
	}
	,{
		path:"/employees/add",
		name:"AddEmployee",
		component:AddEmployee
	}
	,{
		path:"/projects",
		name:"Projects",
		component:EmployerProjects
	},

	{
		path:"/projects/project/:id",
		name:"Project",
		component:Project
	},

	{
		path:"/review",
		name:"Review",
		component:ProjectReview

	},
	{
		path:"/review/member",
		name:"ReviewMember",
		component:MemberToReview

	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;


