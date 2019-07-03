import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    addRobortToCart(state, robort) {
      state.cart.push(robort);
    },
  },
});
