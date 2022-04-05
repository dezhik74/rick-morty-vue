import {createRouter, createWebHashHistory} from 'vue-router';

import HelloWorld from '../views/HelloWorld.vue';
import Characters from '../views/Characters.vue';

const routes = [
  { path: '/about', component: HelloWorld},
  { path: '/', component: Characters}
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})