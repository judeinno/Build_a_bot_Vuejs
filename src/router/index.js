import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobortBuilder from '../build/RobotBuilder.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home ',
      component: HomePage,
    },
    {
      path: '/build',
      name: 'build ',
      component: RobortBuilder,
    },
  ],
});
