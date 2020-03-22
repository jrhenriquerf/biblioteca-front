import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Multiselect from 'vue-multiselect';
import './plugins/bootstrap-vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {
  ValidationObserver, ValidationProvider,
} from 'vee-validate';
import App from './App.vue';
import routes from './routes';
import './vee-validate';

// Install components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

Vue.use(VueRouter);

axios.interceptors.request.use((config) => {
  const newConfig = config;
  newConfig.baseURL = 'http://localhost:8091/api/v1';
  newConfig.headers.Authorization = 'Bearer abc123';
  newConfig.headers['Access-Control-Allow-Origin'] = '*';

  return newConfig;
});

Vue.use(VueAxios, axios);

Vue.component('multiselect', Multiselect);

const router = new VueRouter({
  routes,
  mode: 'history',
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
