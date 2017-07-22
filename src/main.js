import Vue from 'vue'
import Resourse from 'vue-resource'
import VueTouch from 'vue-touch'
import App from './App.vue'
import router from './router'

Vue.use(Resourse);
Vue.use(VueTouch, {name: 'v-touch'});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
