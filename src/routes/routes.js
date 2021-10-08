// import Home from "../components/Home.vue"

// const routes = [
//     {path:"/home",component:Home},
// ]
// export default routes
import { createWebHistory, createRouter } from 'vue-router';
import Home from "../components/Home.vue"

const routes = [
	{
		path: '/',
		component: Home,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;


