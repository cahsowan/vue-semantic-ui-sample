import '../node_modules/semantic-ui-css/semantic.min.css';
import '../node_modules/semantic-ui-css/semantic.min.js';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Interceptor from './interceptor';
import App from './App';
import { configRouter } from './routes';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter();
const params = {
  replace: false,
  components: { App },
};
const API_URL = 'http://localhost:8000/';

Vue.http.options.root = API_URL;
Vue.http.interceptors.push(Interceptor);

configRouter(router);

router.start(params, 'body');
