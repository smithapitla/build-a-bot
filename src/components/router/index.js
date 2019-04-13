import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Build',
    component: RobotBuilder,
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  }],
});
