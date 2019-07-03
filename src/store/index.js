import Vue from 'vue';
import Vuex from 'vuex';
import robortsModule from './modules/roborts';
import usersModule from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    roborts: robortsModule,
    users: usersModule,
  },
});
