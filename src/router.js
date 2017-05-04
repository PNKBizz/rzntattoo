import About from './pages/about.vue'
import Works from './pages/works.vue'
import Main from './pages/main.vue'
import Coords from './components/coords.vue'
import Price from './components/price.vue'
import Masters from './components/masters.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

let router = new VueRouter({
	routes: [
		{ path: '/', component: Main },
		{ path: '/works', component: Works, children: [{
			path: '', component: Masters
		}]},
		{ path: '/about', component: About, children: [{
			path: '', redirect: 'coords'
		}, {
			path: 'coords', component: Coords
		},{
			path: 'price', component: Price
		}] }
	]
});

export default router