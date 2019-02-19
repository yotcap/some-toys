import Vue from 'vue'
import VueRouter from 'vue-router'
import {routers} from './routers'

Vue.use(VueRouter);
export default new VueRouter({
  mode: 'history',
  routes: routers
  // routes: [
  //   {
  //     path: '/',
  //     component: resolve => {require('../views/index.vue'), resolve}
  //   }
  // ]
})
