import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Multiselect from 'vue-multiselect';
import './plugins/bootstrap-vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import routes from './routes';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = 'http://localhost:8091/api/v1';
Vue.axios.defaults.headers.common.Authorization = 'Bearer abc123';

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
