import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios';
import VueGeolocation from 'vue-browser-geolocation';

Vue.use(VueGeolocation);
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

axios.defaults.baseURL = 'https://api.openweathermap.org/';