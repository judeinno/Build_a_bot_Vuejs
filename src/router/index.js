import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobortBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobortHeads from '../parts/RobortHeads.vue';
import RobortBases from '../parts/RobortBases.vue';
import RobortArms from '../parts/RobortArms.vue';
import RobortTorsos from '../parts/RobortTorsos.vue';
import SideBarStandard from '../sidebars/SideBarStandard.vue';
import SideBarBuild from '../sidebars/SideBarBuild.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: HomePage,
        sidebar: SideBarStandard,
      },
    },
    {
      path: '/build',
      name: 'Build',
      components: {
        default: RobortBuilder,
        sidebar: SideBarBuild,
      },
    },
    {
      path: '/parts/browse',
      name: 'BrowseParts',
      component: BrowseParts,
      children: [
        {
          path: 'heads',
          name: 'BrowseHeads',
          component: RobortHeads,
        },
        {
          path: 'bases',
          name: 'BrowseBases',
          component: RobortBases,
        },
        {
          path: 'arms',
          name: 'BrowseArms',
          component: RobortArms,
        },
        {
          path: 'torsors',
          name: 'BrowseTorsos',
          component: RobortTorsos,
        },
      ],
    },
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartInfo,
      props: true,
      beforeEnter(to, from, next) {
        const isValidId = Number.isInteger(Number(to.params.id));
        next(isValidId);
      },
    },
  ],
});
