import Vue from 'vue'
import Resourse from 'vue-resource'
import VueTouch from 'vue-touch'
import App from './App.vue'
import router from './router'
import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";

Vue.use(Resourse);
Vue.use(VueTouch, {name: 'v-touch'});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
