import About from './pages/about.vue'
import Works from './pages/works.vue'
import Main from './pages/main.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

let router = new VueRouter({
	routes: [
		{ path: '/', component: Main },
		{ path: '/works', component: Works},
		{ path: '/about', component: About }
	]
});

export default router