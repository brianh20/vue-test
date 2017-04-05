import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Message from './Message.vue';
import Home from './Home.vue';
import Someview from './someview/someview.vue';
import VuexTutorial from './VuexTutorial/test.vue';

Vue.use(VueRouter);

const routes = [
	{path: '/message', component: Message },
	{path: '/someview/', component: Someview },
	{path: '/', component: Home }, // path: '/:valorVariable'
	{path: '/vuex', component: VuexTutorial }
];

const router = new VueRouter({routes, mode:'history'});

//Vue.component('app-message', Message);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
