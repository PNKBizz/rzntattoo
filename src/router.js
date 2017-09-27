const About = () => import('./pages/about.vue')
const Works = () => import('./pages/works.vue')
const Coords = () => import('./components/coords.vue')
const Price = () => import('./components/price.vue')
const Masters = () => import('./components/masters.vue')
const Gallery = () => import('./components/gallery.vue')
import Main from './pages/main.vue'
import { EventBus } from './eventBus'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

let router = new VueRouter({
	routes: [
		{ path: '/', component: Main },
		{ path: '/works', component: Works, children: [{
			path: '', component: Masters
		}, {
			path: 'master/:name', component: Gallery, props: true
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

router.afterEach((to, from) => {
	EventBus.menuIsOpened = false;
})

export default router