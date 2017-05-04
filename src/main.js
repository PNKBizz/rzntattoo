import Vue from 'vue'
import App from './App.vue'
import Resourse from 'vue-resource'
import router from './router'

Vue.use(Resourse);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
