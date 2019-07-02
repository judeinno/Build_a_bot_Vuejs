import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobortBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/build',
      name: 'Build',
      component: RobortBuilder,
    },
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartInfo,
      props: true,
    },
  ],
});
