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
import AddProject from "../components/AddProject.vue"
import ErrorPage from "../components/ErrorPage.vue"
import AddItem from "../components/AddItem.vue"
// import EmployerProject from "../components/EmployerProject.vue"
import EmployerProjects from "../components/EmployerProjects"
import firebase from 'firebase/compat';
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
		component: Home,
		meta: {
			authRequired: true,
		},
	},
	{
		path: "/calendar",
		name:"Calendar",
		component:Calendar,
		meta: {
			authRequired: true,
		},
	},
	{
		path: "/emptasks",
		name:"EmployeeToDo",
		component:EmployeeToDo,
		meta: {
			authRequired: true,
		},
	},
	{
		path: "/profile",
		name:"ProfilePage",
		component:ProfilePage,
		meta: {
			authRequired: true,
		},
	}
	,{
		path:"/:catchAll(.*)",
		name:"Error",
		component:ErrorPage,
		meta: {
			authRequired: true,
		},
	}
	,{
		path:"/employees",
		name:"EmployeeList",
		component:EmployeeList,
		meta: {
			authRequired: true,
		},
	}
	,{
		path:"/employees/add",
		name:"AddEmployee",
		component:AddEmployee,
		meta: {
			authRequired: true,
		},
	},
	
	{
		path:"/projects",
		name:"Projects",
		component:EmployerProjects,
		meta: {
			authRequired: true,
		},
	},

	{
		path:"/projects/add",
		name:"AddProject",
		component:AddProject,
		meta: {
			authRequired: true,
		},
	},

	{
		path:"/projects/project/:id",
		name:"Project",
		component:Project,
		meta: {
			authRequired: true,
		},
	},

	{
		path:"/projects/project/:id/addTask",
		name:"AddTask",
		component:AddItem,
		meta: {
			authRequired: true,
		},
	},


	{
		path:"/review",
		name:"Review",
		component:ProjectReview,
		meta: {
			authRequired: true,
		},

	},
	{
		path:"/review/:id",
		name:"MemberToReview",
		props: true,
		component:MemberToReview,
		meta: {
			authRequired: true,
		},

	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
        const currentUser = firebase.auth().currentUser
        if(requiresAuth && !currentUser) {
            next("/")
        } else if(requiresAuth && currentUser) {
            next()
        }else{
            next()
        }
});

export default router;


